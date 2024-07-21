import terser from "@rollup/plugin-terser";

const banner = `
// ==UserScript==
// @name         DTOM.js
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Don't tread on me!
// @author       artegoser
// @homepage     https://github.com/artegoser/dtom.js
// @updateURL    https://github.com/artegoser/dtom.js/dist/dtom.min.js
// @downloadURL  https://github.com/artegoser/dtom.js/dist/dtom.min.js
// @match        *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==
`;

export default {
  input: "src/app.js",
  output: {
    file: "dist/dtom.min.js",
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
