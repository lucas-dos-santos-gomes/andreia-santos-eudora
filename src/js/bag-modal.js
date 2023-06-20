import { header } from "./header-scroll.js";
import { allTables } from "./db-products.js";

const imgBag = document.querySelector("#img-bag");
const listBagProducts = imgBag.querySelector(".bag-modal_list");
const trashIcons = imgBag.querySelectorAll("i");
const submitBag = imgBag.querySelector(".bag-modal_submit-button");
const textNoProducts = imgBag.querySelector(".bag-modal_no-products");
const buttonProducts = document.querySelectorAll(".button-put-bag");

function bagHovers() {
  imgBag.onmouseover = () => {
    document.querySelector(".main").style.filter = "brightness(0.5)";
    document.querySelector(".footer").style.filter = "brightness(0.5)";
    if(header.classList.length < 2) {
      header.classList.add("active");
    }
    hiddenBagList();
  }
  imgBag.onmouseout = () => {
    document.querySelector(".main").style.filter = "brightness(1)";
    document.querySelector(".footer").style.filter = "brightness(1)";
    if(header.classList.length > 1 && window.scrollY < 2) {
      header.classList.remove("active");
    }
    hiddenBagList();
  }

  trashIcons.forEach(trashIcon => {
    trashIcon.onmouseover = () => {
      trashIcon.classList.toggle("fa-bounce");
    }
    trashIcon.onmouseout = () => {
      trashIcon.classList.toggle("fa-bounce");
    }
  });
}

let totalPrice = 0;

function addBag() {
  const id = this.parentElement.classList[0];
  allTables.forEach(filterProduct => {
    if (filterProduct.id == id) {
      listBagProducts.innerHTML += (`
        <li class="${filterProduct.id} bag-modal_items">
          <img src="https://res.cloudinary.com/beleza-na-web/image/upload/w_130,f_auto,fl_progressive,q_auto:best/v1/imagens/products/${filterProduct.productCode}/${filterProduct.imgName}" alt="${filterProduct.imgAlt}">
          <div class="bag-modal_items-info">
            <p class="bag-modal_title-product"><span class="bag-modal_quantity-items">1</span>x ${filterProduct.title}</p>
            <div class="bag-modal_price-and-trash">
              <p class="bag-modal_price">R$ ${filterProduct.convertToString(filterProduct.value)}</p>
              <i class="fa-solid fa-trash"></i>
            </div>
          </div>
        </li>
      `);
      totalPrice += filterProduct.value;
      submitBag.innerText = `Finalizar compra (R$ ${totalPrice})`;
    }
  });
}

function hiddenBagList() {
  if(listBagProducts.childElementCount == 0) {
    listBagProducts.classList.add("display");
    listBagProducts.classList.add("none");
    
    submitBag.classList.add("display");
    submitBag.classList.add("none");
    
    textNoProducts.classList.remove("display");
    textNoProducts.classList.remove("none");
  } else {
    listBagProducts.classList.remove("display");
    listBagProducts.classList.remove("none");
    
    submitBag.classList.remove("display");
    submitBag.classList.remove("none");

    textNoProducts.classList.add("display");
    textNoProducts.classList.add("none");
  }
}

export function BagModal() {
  bagHovers();
  buttonProducts.forEach(button => {
    button.onclick = addBag;
  });

  hiddenBagList();
}