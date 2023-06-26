export const header = document.querySelector(".header");
const linkFocused = document.querySelector("#focused");

window.addEventListener('scroll', () => {
  header.classList.toggle("active", window.scrollY > 1);
  linkFocused.classList.toggle("active", window.scrollY > 1);
});

const MENU_HAMBURGUER_CHECK = document.querySelector("#x-menu");
const HAMBURGUER_NAV = document.querySelector(".hamburguer-nav");
const HAMBURGUER_LIST_ITEM = HAMBURGUER_NAV.querySelectorAll(".hamburguer-nav_list_item a");

function checkMenu() {
  if(MENU_HAMBURGUER_CHECK.checked) {
    HAMBURGUER_NAV.style.transform = "translateY(0)";
  } else {
    HAMBURGUER_NAV.style.transform = "translateY(-100vh)";
  }
}

MENU_HAMBURGUER_CHECK.onclick = checkMenu;

HAMBURGUER_LIST_ITEM.forEach(links => {
  links.onclick = () => {
    MENU_HAMBURGUER_CHECK.checked = false;
    checkMenu();
  }
});

header.classList.toggle("active", window.scrollY > 0);
linkFocused.classList.toggle("active", window.scrollY > 0);