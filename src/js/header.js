export const header = document.querySelector(".header");
const linkFocused = document.querySelector("#focused");

window.addEventListener('scroll', () => {
  header.classList.toggle("active", window.scrollY > 1);
  linkFocused.classList.toggle("active", window.scrollY > 1);
});

const MENU_HAMBURGUER_CHECK = document.querySelector("#x-menu");
const HAMBURGUER_NAV = document.querySelector(".hamburguer-nav");

MENU_HAMBURGUER_CHECK.onclick = (e) => {
  if(e.srcElement.checked) {
    HAMBURGUER_NAV.style.transform = "translateY(0)";
  } else {
    HAMBURGUER_NAV.style.transform = "translateY(-100vh)";
  }
}