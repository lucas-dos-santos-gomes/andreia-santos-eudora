const bagModal = document.querySelector(".bag-modal");
const trashIcon = bagModal.querySelector("i");

export function BagModal() {
  trashIcon.onmouseover = () => {
    trashIcon.classList.toggle("fa-bounce");
  }
  trashIcon.onmouseout = () => {
    trashIcon.classList.toggle("fa-bounce");
  }
}