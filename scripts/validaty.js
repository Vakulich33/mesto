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
class FormValidation {
  constructor(fromSettings, formElement) {
    (this._fromSettings = fromSettings), (this._fromElement = formElement);
  }
  _showInputError(formElement, inputElement, errorMessage, inputErrorClass) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
    debugger;
  }
  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = "";
  }
  _isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };
  _setEventListeners = (formElement, formInput, buttonSubmit) => {
    const inputList = Array.from(formElement.querySelectorAll(formInput));
    const buttonElement = formElement.querySelector(buttonSubmit);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        isValid(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(popupForm));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement);
    });
  };
  enableValidation(fromSettings)
  toggleButtonState = (inputList, buttonSubmit) => {
    if (hasInvalidInput(inputList)) {
      buttonSubmit.classList.add(inactiveButtonClass);
      buttonSubmit.setAttribute("disabled", true);
    } else {
      buttonSubmit.classList.remove(inactiveButtonClass);
      buttonSubmit.removeAttribute("disabled");
    }
  };
}
const ValidationEdit = new FormValidation(fromSettings, ".popup__form");
const ValidationAdd = new FormValidation(fromSettings, ".popup__form_add");