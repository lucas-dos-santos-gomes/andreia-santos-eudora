const header = document.querySelector(".header");
const linkFocused = document.querySelector("#focused");

window.addEventListener('scroll', () => {
  header.classList.toggle("active", window.scrollY > 1);
  linkFocused.classList.toggle("active", window.scrollY > 1);
});