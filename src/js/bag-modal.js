import { header } from "./header-scroll.js";
import { allTables } from "./db-products.js";

const imgBag = document.querySelector("#img-bag");
const trashIcon = imgBag.querySelector("i");

const buttonProducts = document.querySelectorAll(".button-put-bag");

function bagHovers() {
  imgBag.onmouseover = () => {
    document.querySelector(".main").style.filter = "brightness(0.5)";
    document.querySelector(".footer").style.filter = "brightness(0.5)";
    if(header.classList.length < 2) {
      header.classList.add("active");
    }
  }
  imgBag.onmouseout = () => {
    document.querySelector(".main").style.filter = "brightness(1)";
    document.querySelector(".footer").style.filter = "brightness(1)";
    if(header.classList.length > 1 && window.scrollY < 2) {
      header.classList.remove("active");
    }
  }

  trashIcon.onmouseover = () => {
    trashIcon.classList.toggle("fa-bounce");
  }
  trashIcon.onmouseout = () => {
    trashIcon.classList.toggle("fa-bounce");
  }
}

function addBag() {
  const id = this.parentElement.classList[0];
  const filterProduct = allTables.filter(e => e.id == id);
  console.log(id);
}

export function BagModal() {
  bagHovers();
  buttonProducts.forEach(button => {
    button.onclick = addBag;
  });
}