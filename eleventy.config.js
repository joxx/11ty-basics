import Image from "@11ty/eleventy-img";

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addWatchTarget("src/assets/**");

  eleventyConfig.addShortcode(
    "image",
    async function (src, alt, widths = [300, 600], sizes = "100vh") {
      let metadata = await Image(src, {
        widths,
        formats: ["avif", "webp"],
        urlPath: "/assets/images/",
        outputDir: "./_site/assets/images/",
      });

      let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
      };

      // You bet we throw an error on a missing alt (alt="" works okay)
      return Image.generateHTML(metadata, imageAttributes);
    }
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "data",
    },
    markdownTemplateEngine: "njk",
  };
}
