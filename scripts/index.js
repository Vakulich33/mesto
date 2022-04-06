const profileEdit = document.querySelector(".profile__edit-button");
const modalWindow = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close");
const myForm = document.querySelector(".popup__container");
const nameInput = document.querySelector(".popup__name");
const descripInput = document.querySelector(".popup__description");
const nameProfile = document.querySelector(".profile__name");
const descripProfile = document.querySelector(".profile__description");
function togglePopup() {
  modalWindow.classList.toggle("popup_active");
if (modalWindow.classList.contains("popup_active")) {
  nameInput.value = nameProfile.textContent;
  descripInput.value = descripProfile.textContent;
}
};
closeButton.addEventListener("click", togglePopup);
profileEdit.addEventListener("click", togglePopup);
function onSubmit(e) {
  e.preventDefault();
  nameProfile.textContent = nameInput.value;
  descripProfile.textContent = descripInput.value;
  togglePopup();
}
myForm.addEventListener("submit", onSubmit);
