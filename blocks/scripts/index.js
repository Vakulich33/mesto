const profileEdit = document.querySelector('.profile__edit-button');
const modalWindow = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close');
function togglePopup () {
modalWindow.classList.toggle('popup_active')
}
profileEdit.addEventListener('click', togglePopup);

closeButton.addEventListener('click', togglePopup);
const myForm = document.querySelector('.popup__container');
const nameInput = document.querySelector('.popup__name');
const descripInput = document.querySelector('.popup__description');
const nameProfile = document.querySelector('.profile__name');
const descripProfile = document.querySelector('.profile__description');
nameInput.value = nameProfile.textContent;
descripInput.value = descripProfile.textContent;
function onSubmit (e) {
    e.preventDefault();
    nameProfile.textContent = nameInput.value;
    descripProfile.textContent = descripInput.value;

}
myForm.addEventListener('submit', onSubmit);
const popupSubmit = document.querySelector('.popup__submit-button');
popupSubmit.addEventListener('click', togglePopup);