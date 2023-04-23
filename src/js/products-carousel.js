const lista = document.querySelector(".products-list");
function addListItem() {
  lista.innerHTML += (`
    <li class="products-list_items" title="O combo contém produtos que entregam fios saudáveis e livres de pontas duplas por meio de ativos poderosos.">
      <img class="product-image" src="./src/img/products/siage_nutri_rose_shamp_cond.jpg" alt="Combo nutri rose com shampoo e condicionador" />
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

// -----------------------------------

let isDragStart = false, prevPageX, prevScrollLeft;

function dragStart(e) {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = lista.scrollLeft
}

function dragging(e) {
  if(!isDragStart) {
    return;
  }
  e.preventDefault();
  let positionDiff = e.pageX - prevPageX;
  lista.scrollLeft = prevScrollLeft - positionDiff;
}

function dragStop() {
  isDragStart = false;
}

lista.addEventListener("mousedown", dragStart);
lista.addEventListener("mousemove", dragging);
lista.addEventListener("mouseup", dragStop);