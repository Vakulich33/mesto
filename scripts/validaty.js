const fromSettings = {
  formElement: '.popup__form',
  formInput: '.popup__name',
  buttonElement: '.popup__submit-button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: '.form__submit_inactive',
  errorClass: '.popup__error'
};

function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
}

function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
}
function resetPopup() {
  buttonAddSubmit.classList.add('popup__button_invalid');
  buttonAddSubmit.setAttribute('disabled', true);
  resetField();
}

const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement)
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__name'));
  const buttonElement = formElement.querySelector('.popup__submit-button');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement)
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button_invalid');
    buttonElement.setAttribute('disabled', true)
  } else {
    buttonElement.classList.remove('popup__button_invalid')
    buttonElement.removeAttribute('disabled')
  }
};
function handlerInputForm(e) {
  const form = e.currentTarget;
  const submitButton = form.querySelector('.popup__submit-button')
  if (form.checkValidity()) {
    submitButton.classList.add('')
  }
};

enableValidation(fromSettings);