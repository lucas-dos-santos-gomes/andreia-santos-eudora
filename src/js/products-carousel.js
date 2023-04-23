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

// -----------------------------------

let isDragStart = false, prevPageX, prevScrollLeft;

function dragStart(e) {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = productsList.scrollLeft;
}

function dragging(e) {
  if(!isDragStart) return;
  e.preventDefault();
  productsList.classList.add("dragging");
  let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  productsList.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
}

function dragStop() {
  isDragStart = false;
  productsList.classList.remove("dragging");
}

productsList.addEventListener("mousedown", dragStart);
productsList.addEventListener("touchstart", dragStart);

productsList.addEventListener("mousemove", dragging);
productsList.addEventListener("touchmove", dragging);

productsList.addEventListener("mouseup", dragStop);
productsList.addEventListener("mouseleave", dragStop);
productsList.addEventListener("touchend", dragStop);

// -----------------------

const firstProduct = productsList.querySelectorAll(".products-list_items")[0];
const arrowIcons = document.querySelectorAll(".products-content i");


function showHideIcons() {
  // showing and hiding prev/next icon according to carousel scroll left value  
  let scrollWidth = productsList.scrollWidth - productsList.clientWidth; // getting max scrollable width
  arrowIcons[0].style.display = productsList.scrollLeft == 0 ? "none": "inline-block";
  arrowIcons[1].style.display = productsList.scrollLeft == scrollWidth ? "none": "inline-block";
}

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    let firstProductWidth = firstProduct.clientWidth + 14; // getting first list item width & adding 14 margin value
    // if clicked icon is left, reduce width value from the carousel scroll left else add to it
    productsList.scrollLeft += icon.id == "arrow-left" ? -firstProductWidth : firstProductWidth;
    setTimeout(showHideIcons, 60); // calling function after 60ms;
  });
});