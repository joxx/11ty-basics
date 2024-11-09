import fs from "fs";
import postcss from "postcss";
import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import { log } from "node:console";

export default async function (eleventyConfig) {
  eleventyConfig.on("eleventy.before", async () => {
    // PostCSS processing
    const cssSourceFile = "src/assets/css/main.css";
    const cssDestinationFile = "main.css";
    const cssDestinationDir = "_site/assets/css/";
    const cssDestinationOutput = cssDestinationDir + cssDestinationFile;
    if (!fs.existsSync(cssDestinationDir)) {
      fs.mkdirSync(cssDestinationDir, { recursive: true });
    }
    fs.readFile(cssSourceFile, (err, css) => {
      postcss([postcssImport, autoprefixer, cssnano])
        .process(css, { from: cssSourceFile, to: cssDestinationFile })
        .then((result) => {
          fs.writeFile(cssDestinationOutput, result.css, () => true);
        });
    });
    eleventyConfig.addWatchTarget("/src/assets/css/");
  });
}

export const config = {
  dir: {
    input: "src",
    output: "_site",
    layouts: "_layouts",
  },
};
