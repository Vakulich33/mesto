const profileEdit = document.querySelector(".profile__edit-button");
const modalWindow = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close");
const myForm = document.querySelector(".popup__container");
const nameInput = document.querySelector(".popup__name");
const descripInput = document.querySelector(".popup__description");
const nameProfile = document.querySelector(".profile__name");
const descripProfile = document.querySelector(".profile__description");
const addButton = document.querySelector('.profile__add-button'); 
const addButtonSubmit = document.querySelector('.popup__submit-button_add');
const modalWindowAdd = document.querySelector(".popup_add");
const closeAddButton = document.querySelector(".popup__close_add");
const namePlace = document.querySelector(".popup__name_add");
const linkPlace = document.querySelector(".popup__description_add")
const placeText = document.querySelector(".place__text");
const placeImage = document.querySelector(".place__image");
const popupImage = document.querySelector(".popup_image");
const deleteButton = document.querySelector(".profile__trash-button");
const placeTemple = document.querySelector(".place-template");
const emptyHeart = document.querySelectorAll(".place__heart");
const ulList = document.querySelector(".places");
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
 
function openPopup(modalWindow) {
  modalWindow.classList.add("popup_active")
  nameInput.value = nameProfile.textContent;
  descripInput.value = descripProfile.textContent;
};
  function closePopup (modalWindow) {
    modalWindow.classList.remove("popup_active");
};

function onSubmit(e) {
  e.preventDefault();
  nameProfile.textContent = nameInput.value;
  descripProfile.textContent = descripInput.value;
  closePopup(modalWindow);
}

function renderCard (data) {
  data.forEach(getCard);
}

function getCard(item) {
  const placeElement = placeTemple.content.cloneNode(true);
  const image = placeElement.querySelector(".place__image");
  const text = placeElement.querySelector(".place__text");
  placeElement.querySelector(".place__heart").addEventListener("click", function(evt) {evt.target.classList.toggle("place__heart_black")}); // Лайк
  placeElement.querySelector(".profile__trash-button").addEventListener("click", function(evt) {
  const deleteItem = evt.target.closest(".place");
  deleteItem.remove();
 }); 
 text.textContent = item.name
 image.src = item.link
 ulList.append(placeElement);
  return placeElement
};


function addCard(e) {
  e.preventDefault();
  let name = namePlace.value;
  let link = linkPlace.value;
  getCard({name, link});
}



renderCard(initialCards);
addButtonSubmit.addEventListener("submit", addCard);
closeAddButton.addEventListener("click", () => {closePopup(modalWindowAdd)});
addButton.addEventListener("click",() => {openPopup(modalWindowAdd)});
myForm.addEventListener("submit", onSubmit);
closeButton.addEventListener("click", () => {closePopup(modalWindow)});
profileEdit.addEventListener("click", () => {openPopup(modalWindow)});

//  placeElement.querySelector(".place__heart").addEventListener("click", function(evt) {evt.target.classList.toggle("place__heart_black")}); // Лайк
//placeElement.querySelector(".profile__trash-button").addEventListener("click", function(evt) {
 // const deleteItem = evt.target.closest(".place");
 // deleteItem.remove();
 // }); 


//function renderCard(item) {
 // const cards = initialCards.forEach(getCard());
 // getCard({name:namePlace.value, link:linkPlace.value});
 // ulList.append(placeElement); //добавление карточек 
//};

//function getCard(item) {
  //const placeElement = placeTemple.cloneNode(true);
  //const image = placeElement.querySelector(".place__image");
  //const text = placeElement.querySelector(".place__text");
  //image.src = item.link
 // text.textContent = item.name
// удаление

 // return placeElement
//};
//renderCard();