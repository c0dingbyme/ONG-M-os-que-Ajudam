import { defineConfig } from "vite";
import { minify } from "html-minifier-terser";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const githubPagesBase = repositoryName.endsWith(".github.io")
  ? "/"
  : `/${repositoryName}/`;

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === "true" ? githubPagesBase : "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: "oxc",
    cssMinify: "lightningcss"
  },
  plugins: [
    {
      name: "minificar-html",
      enforce: "post",
      async transformIndexHtml(html) {
        return minify(html, {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          minifyCSS: true,
          minifyJS: true
        });
      }
    }
  ]
});
