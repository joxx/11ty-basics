export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addWatchTarget("src/assets/**");
}

export const config = {
  dir: {
    input: "src",
    output: "_site",
    layouts: "_layouts",
  },
};
