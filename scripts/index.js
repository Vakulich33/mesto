const profileEdit = document.querySelector(".profile__edit-button");
const modalWindow = document.querySelector(".popup");
const buttonClose = modalWindow.querySelector(".popup__close");
const myForm = modalWindow.querySelector(".popup__container");
const nameInput = modalWindow.querySelector(".popup__name");
const descripInput = document.querySelector(".popup__description");
const nameProfile = document.querySelector(".profile__name");
const descripProfile = document.querySelector(".profile__description");
const buttonAdd = document.querySelector('.profile__add-button');
const buttonAddSubmit = document.querySelector('.popup__submit-button_add');
const modalWindowAdd = document.querySelector(".popup_add");
const closeButtonAdd = document.querySelector(".popup__close_add");
const namePlace = document.querySelector(".popup__card-name");
const linkPlace = document.querySelector(".popup__url-input")
const popupImage = document.querySelector(".popup_image");
const buttonDelete = document.querySelector(".profile__trash-button");
const placeTemple = document.querySelector(".place-template");
const emptyHeart = document.querySelectorAll(".place__heart");
const places = document.querySelector(".places");
const submitFormAdd = document.querySelector(".popup__form_add");
const popupImageText = document.querySelector(".popup__text")
const popupImagePic = document.querySelector(".popup__picture");
const buttonCloseImage = document.querySelector(".popup__close_image");
const imageText = document.querySelector(".popup__place");
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  }
];
function resetField() {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((form) => {
    const inputList = Array.from(form.querySelectorAll('.popup__name'))
    inputList.forEach((input) => {
    hideInputError(form, input);
  });
  });
}
function openPopup(modalWindow) {
  resetPopup()
  modalWindow.classList.add("popup_active");
  document.addEventListener('keydown', handleEscape);
};

function closePopup(modalWindow) {
  modalWindow.classList.remove("popup_active");
  document.removeEventListener("keydown", handleEscape);
};

function onSubmit(e) {
  e.preventDefault();
  nameProfile.textContent = nameInput.value;
  descripProfile.textContent = descripInput.value;
  closePopup(modalWindow);
}
function renderCard(placeElement) {
  places.prepend(placeElement);
}
function renderItem(data) {
  data.forEach((item) => renderCard(getCard(item)));
}

function getCard(item) {
  const placeElement = placeTemple.content.cloneNode(true);
  const image = placeElement.querySelector(".place__image");
  const text = placeElement.querySelector(".place__text");
  placeElement.querySelector(".place__heart").addEventListener("click", (evt) => { evt.target.classList.toggle("place__heart_black") });
  placeElement.querySelector(".profile__trash-button").addEventListener("click", function (evt) {
    const deleteItem = evt.target.closest(".place");
    deleteItem.remove();
  });
  image.alt = item.name
  text.textContent = item.name
  image.src = item.link
  image.addEventListener("click", (evt) => { openImage(item) });
  return placeElement
};

function openImage(item) {
  openPopup(popupImage)
  popupImagePic.src = item.link
  imageText.textContent = item.name
  popupImagePic.alt = item.name
}

function addCard(e) {
  e.preventDefault();
  const name = namePlace.value;
  const link = linkPlace.value;
  renderCard(getCard({ name, link }));
  closePopup(modalWindowAdd);
  submitFormAdd.reset();
}
function handleEscape(evt) {
  popupElement = document.querySelector('.popup_active')
  if (evt.key === 'Escape') {
    closePopup(popupElement);
  }
};
function handleOverlay(evt) {
  popupElement = document.querySelector('.popup_active')
  if (evt.target === popupElement) {
    closePopup(popupElement);
  }
};
renderItem(initialCards);
document.addEventListener('mousedown', handleOverlay)
buttonCloseImage.addEventListener("click", () => closePopup(popupImage));
submitFormAdd.addEventListener("submit", addCard);
closeButtonAdd.addEventListener("click", () => { closePopup(modalWindowAdd) });
buttonAdd.addEventListener("click", () => { openPopup(modalWindowAdd) });
myForm.addEventListener("submit", onSubmit);
buttonClose.addEventListener("click", () => { closePopup(modalWindow) });
profileEdit.addEventListener("click", () => {
  nameInput.value = nameProfile.textContent;
  descripInput.value = descripProfile.textContent;
  openPopup(modalWindow)
});