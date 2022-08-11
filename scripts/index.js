import { Card } from "./card.js";
import { initialCards } from "./initil.js";
import { FormValidation, fromSettings } from "./validaty.js";

const profileEdit = document.querySelector(".profile__edit-button");
const modalWindow = document.querySelector(".popup");
const buttonClose = modalWindow.querySelector(".popup__close");
const myForm = modalWindow.querySelector(".popup__container");
const nameInput = modalWindow.querySelector(".popup__name");
const descripInput = document.querySelector(".popup__description");
const nameProfile = document.querySelector(".profile__name");
const descripProfile = document.querySelector(".profile__description");
const buttonAdd = document.querySelector(".profile__add-button");
const buttonEdit = document.querySelector(".popup__submit-button");
const modalWindowAdd = document.querySelector(".popup_add");
const closeButtonAdd = document.querySelector(".popup__close_add");
const popupImage = document.querySelector(".popup_image");
const places = document.querySelector(".places");
// const template = document.querySelector(".place-template");
// const image = template.querySelector(".place");

// console.log(image);
const submitFormAdd = document.querySelector(".popup__form_add");
const popupImagePic = document.querySelector(".popup__picture");
const buttonCloseImage = document.querySelector(".popup__close_image");
const imageText = document.querySelector(".popup__place");

export function openPopup(modalWindow) {
  modalWindow.classList.add("popup_active");
  document.addEventListener("keydown", handleEscape);
}

function closePopup(modalWindow) {
  modalWindow.classList.remove("popup_active");
  document.removeEventListener("keydown", handleEscape);
}

function onSubmit(e) {
  e.preventDefault();
  nameProfile.textContent = nameInput.value;
  descripProfile.textContent = descripInput.value;
  closePopup(modalWindow);
}
function renderCard(placeElement) {
  places.prepend(placeElement);
}

initialCards.forEach((data) => {
  const card = new Card(data, ".place-template");
  const cardElement = card.generateCard();
  places.append(cardElement);
});

function addCard(e) {
  e.preventDefault();
  const image = document.querySelector(".place__image");
  const name = document.querySelector(".popup__card-name").value;
  const link = document.querySelector(".popup__url-input").value;
  const card = new Card({ name, link }, ".place-template");
  renderCard(card.generateCard({ name, link }));
  closePopup(modalWindowAdd);
  submitFormAdd.reset();
  submitFormAdd.setAttribute("disabled", true);
  card._toggleButtonState();
  card.resetField();
}
function handleEscape(evt) {
  popupElement = document.querySelector(".popup_active");
  if (evt.key === "Escape") {
    closePopup(popupElement);
  }
}
function handleOverlay(evt) {
  if (evt.target === evt.target) {
    closePopup(evt.target);
  }
}
function openImage(item) {
  openPopup(popupImage);
  popupImagePic.src = item.link;
  imageText.textContent = item.name;
  popupImagePic.alt = item.name;
}
document.addEventListener("mousedown", handleOverlay);
buttonCloseImage.addEventListener("click", () => closePopup(popupImage));
submitFormAdd.addEventListener("submit", addCard);
closeButtonAdd.addEventListener("click", () => {
  closePopup(modalWindowAdd);
});
buttonAdd.addEventListener("click", () => {
  openPopup(modalWindowAdd);
});
myForm.addEventListener("submit", onSubmit);
buttonClose.addEventListener("click", () => {
  closePopup(modalWindow);
});
// image.addEventListener("click", () => {
//   openImage(item);
// });
profileEdit.addEventListener("click", () => {
  buttonEdit.classList.remove("popup__button_invalid");
  buttonEdit.removeAttribute("disabled");
  nameInput.value = nameProfile.textContent;
  descripInput.value = descripProfile.textContent;
  openPopup(modalWindow);
});
