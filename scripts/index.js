const profileEdit = document.querySelector(".profile__edit-button");
const modalWindow = document.querySelector(".popup");
const buttonClose = modalWindow.querySelector(".popup__close");
const myForm = modalWindow.querySelector(".popup__container");
const nameInput = modalWindow.querySelector(".popup__name");
const descripInput = document.querySelector(".popup__description");
const nameProfile = document.querySelector(".profile__name");
const descripProfile = document.querySelector(".profile__description");
const buttonAdd = document.querySelector('.profile__add-button');
const buttonEdit = document.querySelector('.popup__submit-button')
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

class Card {
  constructor(data, templateSelector) {
  this._name = data.name;
  this._link = data.link;
  this._alt = data.name;
  this._templateSelector = templateSelector;
}
  _getTemplate() {
  const cardElement = document
  .querySelector(this._templateSelector)
  .content
  .querySelector('.place')
  .cloneNode(true);
  return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.place__image').src = this._link;
    this._element.querySelector('.place__text').alt = this._altImage;
    this._element.querySelector('.place__text').textContent = this._name;
   return this._element;
  }

  _deleteItem() {
  this._element.remove();
  }
  _handleLikeClick () {
  this._element.querySelector('.place__heart').classList.toggle('place__heart_black');
 }
 _imageOpen() {
  const popupImages = document.querySelector('.popup_image')
  popupImages.querySelector('.popup__picture').src = this._link
  popupImages.querySelector('.popup__place').textContent = this._name
  openPopup(popupImages)
 }
  addCard(_name, _link) {
  console.log(this._link)  
  console.log(this._name)
  renderCard((this.generateCard({_name, _link})))
  }

  _setEventListeners() {
  this._element.querySelector('.place__heart').addEventListener('click', () => {
  this._handleLikeClick();
  })
  this._element.querySelector('.profile__trash-button').addEventListener('click', () => {
  this._deleteItem()
  })
  this._element.querySelector('.place__image').addEventListener('click', () => {
  this._imageOpen()
  })
  document.querySelector('.popup__form_add').addEventListener('submit', () => {
  this.addCard(this._name, this._link)
 })
  }
}


// function renderItem(data) {
//   data.forEach((item) => renderCard(getCard(item)));
// }


initialCards.forEach((data) => {
  const card = new Card(data,'.place-template');
  const cardElement = card.generateCard();
  places.append(cardElement);
})

// function addCard(e) {
//   e.preventDefault();
//   const name = namePlace.value;
//   const link = linkPlace.value;
//   renderCard(getCard({ name, link }));
//   resetPopup();
//   closePopup(modalWindowAdd);
//   submitFormAdd.reset();
//   submitFormAdd.setAttribute('disabled', true)
// }
function handleEscape(evt) {
  popupElement = document.querySelector('.popup_active')
  if (evt.key === 'Escape') {
    closePopup(popupElement);
  }
};
function handleOverlay(evt) {
  if (evt.target === evt.target) {
    closePopup(evt.target);
  }
};

document.addEventListener('mousedown', handleOverlay)
buttonCloseImage.addEventListener("click", () => closePopup(popupImage));
// submitFormAdd.addEventListener("submit", addCard);
closeButtonAdd.addEventListener("click", () => { closePopup(modalWindowAdd) });
buttonAdd.addEventListener("click", () => { openPopup(modalWindowAdd) });
myForm.addEventListener("submit", onSubmit);
buttonClose.addEventListener("click", () => { closePopup(modalWindow) });
profileEdit.addEventListener("click", () => {
  resetPopup();
  buttonEdit.classList.remove('popup__button_invalid')
  buttonEdit.removeAttribute('disabled')
  nameInput.value = nameProfile.textContent;
  descripInput.value = descripProfile.textContent;
  openPopup(modalWindow)
});
