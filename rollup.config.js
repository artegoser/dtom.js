import terser from "@rollup/plugin-terser";
import pkg from "./package.json" with { type: "json" };

const banner = `
// ==UserScript==
// @name         ${pkg.name}
// @namespace    http://tampermonkey.net/
// @version      ${pkg.version}
// @description  ${pkg.description}
// @author       ${pkg.author}
// @homepage     ${pkg.homepage}
// @updateURL    https://github.com/artegoser/dtom.js/dist/dtom.min.user.js
// @downloadURL  https://github.com/artegoser/dtom.js/dist/dtom.min.user.js
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==
`;

export default {
  input: "src/app.js",
  output: {
    file: "dist/dtom.min.user.js",
    format: "es",
    banner: banner.trim(),
  },
  plugins: [
    terser({
      format: {
        comments: /^\s*(=|@)[ \t]?/,
      },
    }),
  ],
};
