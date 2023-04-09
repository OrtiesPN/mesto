const ValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error_visible'
  }

function enableValidation( { formSelector, ...rest } ) {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach(form => {
        form.addEventListener('submit', evt => evt.preventDefault());
        setEventListeners(form, rest);
    })
    
}

function setEventListeners(formToValidate, { inputSelector, ...rest } ) {
    const formInputs = Array.from(formToValidate.querySelectorAll(inputSelector));
    formInputs.forEach((input) => input.addEventListener('input', () => {
        checkInputValidity(input, rest);
        setButtonStatus(formToValidate, formInputs, rest);
    }
    ))
}

function checkInputValidity(input, rest) {
    if (!input.checkValidity()) {
        showErrorMessage(input, rest);
    } else {
        hideErrorMessage(input, rest);
    }
}

function showErrorMessage(input, { inputErrorClass, errorClass }) {
    input.classList.add(inputErrorClass);
    const errorMessage = document.querySelector(`#${input.id}-error`);
    errorMessage.classList.add(errorClass);
    errorMessage.textContent = input.validationMessage;
}

function hideErrorMessage(input, { inputErrorClass,  errorClass }) {
    input.classList.remove(inputErrorClass);
    const errorMessage = document.querySelector(`#${input.id}-error`);
    errorMessage.classList.remove(errorClass);
    errorMessage.textContent = "";
}

function setButtonStatus(formToValidate, formInputs, { submitButtonSelector, ...rest }) {
    const formButton = formToValidate.querySelector(submitButtonSelector);
    if (hasInvalidInput(formInputs)) {
        disableButton(formButton, rest); 
    } else {
        enableButton(formButton, rest);
    }
}

function hasInvalidInput(formInputs) {
    return formInputs.some((item) => !item.checkValidity()); 
}

function enableButton(formButton, { inactiveButtonClass }) {
    formButton.classList.remove(inactiveButtonClass);
    formButton.removeAttribute('disabled');
}

function disableButton(formButton, { inactiveButtonClass }) { 
    formButton.classList.add(inactiveButtonClass);
    formButton.setAttribute('disabled', true);
}

function resetFormValidation(formToValidate, { inputSelector, ...rest } ) {
    const formInputs = Array.from(formToValidate.querySelectorAll(inputSelector));
    formInputs.forEach(input => checkInputValidity(input, rest));
    setButtonStatus(formToValidate, formInputs, rest);
}

enableValidation(ValidationConfig);