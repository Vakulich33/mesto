import { Card } from "./card.js";
import { initialCards } from "./initil.js";
import { FormValidator } from "./validaty.js";

const fromSettings = {
  popupForm: ".popup__form",
  formInput: ".popup__name",
  buttonSubmit: ".popup__submit-button",
  inactiveButtonClass: "popup__button_invalid",
  inputErrorClass: "popup__error",
  errorClass: "popup__error_text",
};
const popups = document.querySelectorAll(".popup");
const popup = document.querySelector(".popup__form");
const popupAdd = document.querySelector(".popup__form_add");
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
const submitFormAdd = document.querySelector(".popup__form_add");
const buttonCloseImage = document.querySelector(".popup__close_image");

const validationEdit = new FormValidator(fromSettings, popup);
const validationAdd = new FormValidator(fromSettings, popupAdd);

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
  const card = createCard(data, ".place-template");
  places.append(card);
});
function createCard(data, templateSelector) {
  const card = new Card(data, templateSelector);
  const cardElement = card.generateCard();
  return cardElement;
}
function addCard(e) {
  e.preventDefault();
  const name = document.querySelector(".popup__card-name").value;
  const link = document.querySelector(".popup__url-input").value;
  const altImage = document.querySelector(".popup__card-name").value;
  renderCard(createCard({ name, link }, ".place-template"));
  closePopup(modalWindowAdd);
  submitFormAdd.reset();
  validationAdd.toggleButtonState();
  validationEdit.resetField();
}
function handleEscape(evt) {
  if (evt.key === "Escape") {
    const popupActive = document.querySelector(".popup_active");
    closePopup(popupActive);
  }
}
function handleOverlay(evt) {
  if (evt.target === evt.target) {
    closePopup(evt.target);
  }
}

validationEdit.enableValidation();
validationAdd.enableValidation();

popups.forEach((popup) => {
  popup.addEventListener("mousedown", handleOverlay);
});
buttonCloseImage.addEventListener("click", () => closePopup(popupImage));
submitFormAdd.addEventListener("submit", addCard);
closeButtonAdd.addEventListener("click", () => {
  closePopup(modalWindowAdd);
});
buttonAdd.addEventListener("click", () => {
  validationAdd.resetField();
  validationAdd.toggleButtonState;
  openPopup(modalWindowAdd);
  submitFormAdd.reset();
});
myForm.addEventListener("submit", onSubmit);
buttonClose.addEventListener("click", () => {
  closePopup(modalWindow);
});
profileEdit.addEventListener("click", () => {
  nameInput.value = nameProfile.textContent;
  descripInput.value = descripProfile.textContent;
  validationEdit.toggleButtonState();
  validationEdit.resetField();
  openPopup(modalWindow);
});
