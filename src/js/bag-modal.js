import { header } from "./header.js";
import { allTables, Product } from "./db-products.js";
import {createLocalStorage as create, readLocalStorage as read, updateLocalStorage as update, deleteLocalStorage as delet} from "./crud.js"; 

const convert = new Product();
const imgBag = document.querySelector("#img-bag");
const listBagProducts = imgBag.querySelector(".bag-modal_list");
const submitBag = imgBag.querySelector(".bag-modal_submit-button");
const textNoProducts = imgBag.querySelector(".bag-modal_no-products");
const numberItems = imgBag.querySelector(".bag-modal_number-items");
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

  trashEvents();
}

function trashEvents() {
  const trashIcons = imgBag.querySelectorAll("i");
  trashIcons.forEach(trashIcon => {
    trashIcon.onmouseover = () => {
      trashIcon.classList.toggle("fa-bounce");
    }
    trashIcon.onmouseout = () => {
      trashIcon.classList.toggle("fa-bounce");
    }
    trashIcon.onclick = removeProduct;
  });
}

let totalPrice = 0;
function addBag(id, tables, list, price, btn, confirmCreate, qtd) {
  let countProductsForId = 0;
  tables.forEach(filterProduct => {
    if (filterProduct.id == id) {
      for(let itens of list.children) {
        if(Object.values(itens.classList)[0] == id) {
          let qtdProducts = +(itens.querySelector(".bag-modal_quantity-items").textContent) + 1
          itens.querySelector(".bag-modal_quantity-items").innerText = qtdProducts;
          countProductsForId++;
          
          update(id, qtdProducts);
        };
      }
      if(countProductsForId == 0) {
        list.innerHTML += (`
          <li class="${filterProduct.id} bag-modal_items">
            <img src="https://res.cloudinary.com/beleza-na-web/image/upload/w_130,f_auto,fl_progressive,q_auto:best/v1/imagens/products/${filterProduct.productCode}/${filterProduct.imgName}" alt="${filterProduct.imgAlt}">
            <div class="bag-modal_items-info">
              <p class="bag-modal_title-product"><span class="bag-modal_quantity-items">${qtd || 1}</span>x ${filterProduct.title}</p>
              <div class="bag-modal_price-and-trash">
                <p class="bag-modal_price">R$ ${filterProduct.convertToString(filterProduct.value)}</p>
                <i class="fa-solid fa-trash"></i>
              </div>
            </div>
          </li>
        `);
        if(confirmCreate) {
          create(id);
        }
      }
      price += filterProduct.value * (qtd || 1);
      btn.innerText = `Finalizar compra (R$ ${convert.convertToString(price.toFixed(2))})`;
    }
  });
  trashEvents();
  sendMessage();
  updateNumberItems();
  return price;
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

function removeProduct() {
  delet(this.parentElement.parentElement.parentElement.classList[0]);

  listBagProducts.removeChild(this.parentElement.parentElement.parentElement);
  const productValue = +((this.parentElement.children[0].textContent.slice(3, this.parentElement.children[0].textContent.length)).replace(",", "."));
  const quantityProducts = +(this.parentElement.previousElementSibling.children[0].innerText)
  totalPrice -= (productValue * quantityProducts);
  submitBag.innerText = `Finalizar compra (R$ ${convert.convertToString(totalPrice.toFixed(2))})`;
  updateNumberItems();
  sendMessage();
}

function sendMessage() {
  let msg = "Olá Andreia!\nDesejo comprar o(s) produto(s) listados abaixo:\n\n";
  for(let textProduct of listBagProducts.querySelectorAll(".bag-modal_title-product")) {
    msg += `- ${textProduct.textContent} = ${textProduct.nextElementSibling.children[0].textContent}\n`;
  }
  submitBag.href = "https://api.whatsapp.com/send?phone=5511985681416&text=";
  submitBag.href += encodeURIComponent(msg + "\n");
  submitBag.href += `Valor total: R$ ${convert.convertToString(totalPrice.toFixed(2))}`;
}

function updateNumberItems() {
  numberItems.innerHTML = 0;
  for(const listItems of listBagProducts.children) {
    numberItems.innerHTML = +(numberItems.innerHTML) + +(listItems.querySelector(".bag-modal_quantity-items").textContent);
  }
  if(numberItems.innerHTML > 0) {
    numberItems.style.display = "flex";
  } else {
    numberItems.style.display = "none";
    document.querySelector(".main").style.filter = "brightness(1)";
    document.querySelector(".footer").style.filter = "brightness(1)";
  }
}

export function BagModal() {
  bagHovers();
  buttonProducts.forEach(button => {
    button.onclick = () => {
      totalPrice = addBag(button.parentElement.classList[0], allTables, listBagProducts, totalPrice, submitBag, true);
    };
  });
  totalPrice = read(addBag, allTables, listBagProducts, submitBag);

  hiddenBagList();
  sendMessage();
  updateNumberItems();
}