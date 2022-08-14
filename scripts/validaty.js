export { FormValidator };
class FormValidator {
  constructor(data, formElement) {
    this._popupForm = data.popupForm;
    this._formInput = data.formInput;
    this._buttonSubmit = data.buttonSubmit;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._formElement = formElement;
    this._inputList = this._formElement.querySelectorAll(this._formInput);
    this._button = this._formElement.querySelector(this._buttonSubmit);
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
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this.toggleButtonState();
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
    this.toggleButtonState();
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }
  toggleButtonState() {
    if (this._formElement.checkValidity()) {
      this._button.disabled = false;
      this._button.classList.remove(this._inactiveButtonClass);
    } else {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.disabled = true;
    }
  }
}
