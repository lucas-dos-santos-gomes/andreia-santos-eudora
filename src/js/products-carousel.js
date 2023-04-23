const productsCarouselAll = document.querySelectorAll(".products-carousel");
const arrowIcons = document.querySelectorAll(".products-wrapper i");
let isDragStart = false, prevPageX, prevScrollLeft;

productsCarouselAll.forEach(productsCarousel => {
  const firstProduct = productsCarousel.querySelector(".products-carousel_first-item");
  function showHideIcons() {
    // showing and hiding prev/next icon according to carousel scroll left value  
    let scrollWidth = productsCarousel.scrollWidth - productsCarousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = productsCarousel.scrollLeft == 0 ? "none": "inline-block";
    arrowIcons[1].style.display = productsCarousel.scrollLeft == scrollWidth ? "none": "inline-block";
  }
  
  arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      let firstProductWidth = firstProduct.clientWidth + 14; // getting first list item width & adding 14 margin value
      // if clicked icon is left, reduce width value from the carousel scroll left else add to it
      productsCarousel.scrollLeft += icon.id == "arrow-left" ? -(firstProductWidth * 2) : (firstProductWidth * 2);
      setTimeout(showHideIcons, 60); // calling function after 60ms;
    });
  });
  
  function dragStart(e) {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = productsCarousel.scrollLeft;
  }
  
  function dragging(e) {
    if(!isDragStart) return;
    e.preventDefault();
    productsCarousel.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    productsCarousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
  }
  
  function dragStop() {
    isDragStart = false;
    productsCarousel.classList.remove("dragging");
  }
  
  productsCarousel.addEventListener("mousedown", dragStart);
  productsCarousel.addEventListener("touchstart", dragStart);
  
  productsCarousel.addEventListener("mousemove", dragging);
  productsCarousel.addEventListener("touchmove", dragging);
  
  productsCarousel.addEventListener("mouseup", dragStop);
  productsCarousel.addEventListener("mouseleave", dragStop);
  productsCarousel.addEventListener("touchend", dragStop);
});