import regex from "./name-regex.js";

/* AUTOMATIC PRODUCTS LIST */
const productsList = document.querySelector(".products-list");
function addListItem() {
  productsList.innerHTML += (`
    <li class="products-list_items" title="O combo contém produtos que entregam fios saudáveis e livres de pontas duplas por meio de ativos poderosos.">
      <img class="product-image" src="./src/img/products/siage_nutri_rose_shamp_cond.jpg" alt="Combo nutri rose com shampoo e condicionador" draggable="false" />
      <h3 class="product-title">Combo Nutri Rose: Shampoo 400ml + Condicionador 400ml</h3>
      <p class="product-value-discount">R$ 127,98</p>
      <p class="product-value">R$ 112,98</p>
      <p class="product-value-installment">7x de R$ 16,14</p>
      <button class="button-put-bag">+ Adicionar na sacola</button>
    </li>
  `);
}

for(let i = 0; i < 10; i++) {
  addListItem();
}

/* REGEX */
const nameRegex = document.querySelectorAll(".name-regex");
nameRegex.forEach(input => {
  input.addEventListener("keypress", e => {
    regex(e);
  });
});