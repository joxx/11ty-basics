import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addWatchTarget("src/assets/**");

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // which file extensions to process
    extensions: "html, md, njk",

    // Add any other Image utility options here:

    // optional, output image formats
    formats: ["webp", "jpeg"],
    // formats: ["auto"],

    // optional, output image widths
    // widths: ["auto"],

    // optional, attributes assigned on <img> override these values.
    defaultAttributes: {
      loading: "lazy",
      decoding: "async",
    },
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "data",
    },
    templateFormats: ["njk", "md", "html"],
  };
}
