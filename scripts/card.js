import { openPopup } from "./index.js";
export { Card };
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
      .content.querySelector(".place")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const image = this._element.querySelector(".place__image");
    image.src = this._link;
    image.alt = this._name;
    this._element.querySelector(".place__text").textContent = this._name;
    return this._element;
  }

  _deleteItem() {
    this._element.remove();
  }
  _handleLikeClick() {
    this._element
      .querySelector(".place__heart")
      .classList.toggle("place__heart_black");
  }
  _imageOpen() {
    const popupImages = document.querySelector(".popup_image");
    const popupPicture = popupImages.querySelector(".popup__picture");
    popupPicture.src = this._link;
    popupImages.querySelector(".popup__place").textContent = this._name;
    popupPicture.alt = this._alt;
    openPopup(popupImages);
  }
  _setEventListeners() {
    this._element
      .querySelector(".place__heart")
      .addEventListener("click", () => {
        this._handleLikeClick();
      });
    this._element
      .querySelector(".profile__trash-button")
      .addEventListener("click", () => {
        this._deleteItem();
      });
    this._element
      .querySelector(".place__image")
      .addEventListener("click", () => {
        this._imageOpen();
      });
  }
}
