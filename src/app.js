import { pasteUnblock } from "./modules/paste.js";
import { match } from "./lib.js";
import { disableRedirects } from "./modules/google.js";

pasteUnblock();

match("google.com", "/search", () => {
  console.log("google.com/search");
  disableRedirects();
});
