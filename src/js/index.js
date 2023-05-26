import regex, { nameRegex } from "./name-regex.js";

/* REGEX */
nameRegex.forEach(input => {
  input.addEventListener("keypress", e => {
    regex(e);
  });
});