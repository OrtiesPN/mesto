const ValidationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  };

function Validate() {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach(form => {
        form.addEventListener('submit', evt => evt.preventDefault());
        setEventListeners(form);
    })
    
}

function setEventListeners(formToValidate) {
    const formInputs = Array.from(formToValidate.querySelectorAll('.popup__input'));
    const formButton = formToValidate.querySelector('.popup__submit-btn');
    formInputs.forEach((input) => input.addEventListener('input', () => {
        checkInputValidity(input)
        setButtonStatus(formToValidate, formInputs)
    }
    ))
}

function checkInputValidity(input) {
    if (!input.checkValidity()) {
        input.classList.add('popup__input_error')
        showErrorMessage(input)
    } else {
        input.classList.remove('popup__input_error')
        hideErrorMessage(input)
    }
}

function showErrorMessage(input) {
    input.classList.add('popup__input_error');
    const errorMessage = document.querySelector(`#${input.id}-error`);
    errorMessage.textContent = input.validationMessage;
}

function hideErrorMessage(input) {
    input.classList.remove('popup__input_error')
    const errorMessage = document.querySelector(`#${input.id}-error`);
    errorMessage.textContent = "";
}

function setButtonStatus(formToValidate, formInputs) {
    const formButton = formToValidate.querySelector('.popup__submit-btn');
    if (hasInvalidInput(formInputs)) {
        disableButton(formButton) 
    } else {
        enableButton(formButton)
    }
}

function hasInvalidInput(formInputs) {
    return formInputs.some((item) => !item.checkValidity()) 
}

function enableButton(button) {
    button.classList.remove('popup__submit-btn_disabled');
    button.removeAttribute('disabled');
}

function disableButton(button) { 
    button.classList.add('popup__submit-btn_disabled');
    button.setAttribute('disabled', true);
}

function resetFormValidation(formToValidate) {
    const formInputs = Array.from(formToValidate.querySelectorAll('.popup__input'));
    formInputs.forEach(checkInputValidity);
    setButtonStatus(formToValidate, formInputs);
}

Validate()