const fromSettings = { 
  popupForm: '.popup__form', 
  formInput: '.popup__name', 
  buttonSubmit: '.popup__submit-button', 
  inactiveButtonClass: 'popup__button_invalid', 
  inputErrorClass: 'popup__error', 
  errorClass: 'popup__error_text' 
}; 
const {popupForm, formInput, buttonSubmit, inputErrorClass, errorClass} = fromSettings;

function showInputError(formElement, inputElement, errorMessage) { 
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
  inputElement.classList.add(inputErrorClass); 
  errorElement.textContent = errorMessage; 
  errorElement.classList.add(errorClass); 
} 

function hideInputError(formElement, inputElement) { 
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); 
  inputElement.classList.remove(inputErrorClass); 
  errorElement.classList.remove(errorClass); 
  errorElement.textContent = ''; 
} 
function resetPopup() { 
  buttonAddSubmit.classList.add('popup__button_invalid'); 
  buttonAddSubmit.setAttribute('disabled', true); 
  resetField(); 
} 

const isValid = (formElement, inputElement, {...rest}) => { 
  if (!inputElement.validity.valid) { 
    showInputError(formElement, inputElement, inputElement.validationMessage, {errorClass, inputErrorClass, ...rest}); 
} else { 
    hideInputError(formElement, inputElement, {errorClass, inputErrorClass, ...rest}) 
 } 
}; 

const setEventListeners = (formElement, {formInput, buttonSubmit, ...rest}) => { 
  const inputList = Array.from(formElement.querySelectorAll(formInput)); 
  const buttonElement = formElement.querySelector(buttonSubmit); 
  toggleButtonState(inputList, buttonElement, {...rest}); 
  inputList.forEach((inputElement) => { 
    inputElement.addEventListener('input', () => { 
      isValid(formElement, inputElement, {...rest}); 
      toggleButtonState(inputList, buttonElement, {...rest}); 
    }); 
  }); 
}; 

const enableValidation = () => { 
  const formList = Array.from(document.querySelectorAll(popupForm));
  formList.forEach((formElement, {...rest}) => {  
    formElement.addEventListener('submit', (evt) => { 
      evt.preventDefault(); 
    }); 
    setEventListeners(formElement, {formInput, buttonSubmit, ...rest}) 
  }); 
}; 

const hasInvalidInput = (inputList) => { 
  return inputList.some((inputElement) => { 
  return !inputElement.validity.valid 
  }) 
};
  
  const toggleButtonState = (inputList, buttonSubmit) => { 
    if (hasInvalidInput(inputList)) { 
      buttonSubmit.classList.add('popup__button_invalid'); 
      buttonSubmit.setAttribute('disabled', true);   
  } else { 
    buttonSubmit.classList.remove('popup__button_invalid');
    buttonSubmit.removeAttribute('disabled');      
    } 
  }; 

enableValidation(fromSettings); 



