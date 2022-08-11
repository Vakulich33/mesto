export { FormValidation, fromSettings };
const fromSettings = {
  popupForm: ".popup__form",
  formInput: ".popup__name",
  buttonSubmit: ".popup__submit-button",
  inactiveButtonClass: "popup__button_invalid",
  inputErrorClass: "popup__error",
  errorClass: "popup__error_text",
};

const Popup = document.querySelector(".popup__form");
const Popupadd = document.querySelector(".popup__form_add");
class FormValidation {
  constructor(data, formElement) {
    this._popupForm = data.popupForm;
    this._formInput = data.formInput;
    this._buttonSubmit = data.buttonSubmit;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._formElement = formElement;
    this._inputList = this._formElement.querySelectorAll(this._formInput);
  }
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }
  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };
  _setEventListeners = () => {
    this._buttonElement = this._formElement.querySelector(this._buttonSubmit);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  };

  enableValidation() {
    this._setEventListeners();
  }
  _hasInvalidInput = () => {
    if (this._inputList.checkValidity()) {
      return true;
    }
  };

  resetField() {
    _toggleButtonState();
    const formList = Array.from(
      this._formElement.querySelectorAll(this._popupForm)
    );
    formList.forEach((form) => {
      const inputList = Array.from(form.querySelectorAll(this._formInput));
      inputList.forEach((input) => {
        _hideInputError(form, input);
      });
    });
  }

  _toggleButtonState() {
    const button = this._formElement.querySelector(this._buttonSubmit);
    if (this._formElement.checkValidity()) {
      button.disabled = false;
      button.classList.remove(this._inactiveButtonClass);
    } else {
      button.classList.add(this._inactiveButtonClass);
      button.disabled = true;
    }
  }
}

const validationEdit = new FormValidation(fromSettings, Popup);
const validationAdd = new FormValidation(fromSettings, Popupadd);
validationEdit.enableValidation();
validationAdd.enableValidation();
