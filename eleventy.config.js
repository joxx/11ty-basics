export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addWatchTarget("src/assets/**");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "data",
    },
    templateFormats: ["njk", "md", "html"],
  };
}
