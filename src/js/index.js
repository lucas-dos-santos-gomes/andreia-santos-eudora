import regex, { nameRegex } from "./name-regex.js";

/* REGEX */
nameRegex.forEach(input => {
  input.addEventListener("keypress", e => {
    regex(e);
  });
});

const copyYear = document.querySelector("#copy-year");
let data = new Date();
copyYear.innerHTML = data.getFullYear();