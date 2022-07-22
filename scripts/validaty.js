const fromSettings = { 
  popupForm: 'popup__form', 
  formInput: '.popup__name', 
  buttonElement: 'popup__submit-button', 
  inactiveButtonClass: 'popup__button_invalid', 
  inputErrorClass: 'popup__error', 
  errorClass: 'popup__error_text' 
}; 
const {popupForm, formInput, buttonElement, inputErrorClass, errorClass} = fromSettings;

function showInputError(formElement, inputElement, errorMessage, {errorClass, inputErrorClass}) { 
  const errorElement = document.querySelector(`.${inputElement.id}-error`); 
  inputElement.classList.add(inputErrorClass); 
  errorElement.textContent = errorMessage; 
  errorElement.classList.add(errorClass); 
} 

function hideInputError(formElement, inputElement) { 
  const errorElement = document.querySelector(`.${inputElement.id}-error`); 
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

const setEventListeners = ({formElement, ...rest}) => { 
  const inputList = Array.from(document.querySelectorAll('.popup__name')); 
  const buttonElement = document.querySelector('.popup__submit-button'); 
  toggleButtonState(inputList, buttonElement, {...rest}); 
  inputList.forEach((inputElement) => { 
    inputElement.addEventListener('input', () => { 
      isValid(formElement, inputElement, {...rest}); 
      toggleButtonState(inputList, buttonElement, {...rest}); 
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
  
  const toggleButtonState = (inputList, buttonElement, {}) => { 
    if (hasInvalidInput(inputList)) { 
      buttonElement.classList.add('popup__button_invalid'); 
      buttonElement.setAttribute('disabled', true);   
  } else { 
        buttonElement.classList.remove('popup__button_invalid');
      buttonElement.removeAttribute('disabled');      
    } 
  }; 

enableValidation(fromSettings); 



