const fromSettings = {
  popupForm: ".popup__form",
  formInput: ".popup__name",
  buttonSubmit: ".popup__submit-button",
  inactiveButtonClass: "popup__button_invalid",
  inputErrorClass: "popup__error",
  errorClass: "popup__error_text",
};
const {
  popupForm,
  formInput,
  buttonSubmit,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
} = fromSettings;
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
    console.log(this._inputErrorClass);
  }
  _hideInputError() {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.clasList.remove(this._errorClass);
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
    console.log(this._inputList);
    this._buttonElement = this._formElement.querySelector(this._buttonSubmit);
    this._toggleButtonState(this._inputList, this._buttonElement);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);

        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  enableValidation() {
    this._setEventListeners();
  }
  _hasInvalidInput = () => {
    return this._inputList.checkValidity((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = (inputList, buttonSubmit) => {
    if (this._hasInvalidInput(inputList)) {
      buttonSubmit.classList.add(this._inactiveButtonClass);
      buttonSubmit.setAttribute("disabled", true);
    } else {
      buttonSubmit.classList.remove(this._inactiveButtonClass);
      buttonSubmit.removeAttribute("disabled");
    }
  };
}

const validationEdit = new FormValidation(fromSettings, Popup);
const validationAdd = new FormValidation(fromSettings, Popupadd);
validationEdit.enableValidation();
validationAdd.enableValidation();
