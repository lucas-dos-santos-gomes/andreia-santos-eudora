import { header } from "./header-scroll.js";

const imgBag = document.querySelector("#img-bag");
const bagModal = document.querySelector(".bag-modal");
const trashContainer = bagModal.querySelector(".trash-container");
const trashIcon = bagModal.querySelector("i");

export function BagModal() {
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

  trashContainer.onmouseover = () => {
    trashIcon.classList.toggle("fa-bounce");
  }
  trashContainer.onmouseout = () => {
    trashIcon.classList.toggle("fa-bounce");
  }
}