export default class FormValidator {
    constructor(validationConfig, form) {
        this._formSelector = validationConfig.formSelector;
        this._inputSelector = validationConfig.inputSelector;
        this._submitButtonSelector = validationConfig.submitButtonSelector;
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
        this._inputErrorClass = validationConfig.inputErrorClass;
        this._errorClass = validationConfig.errorClass;
        this._form = form
        this._formButton = this._form.querySelector(this._submitButtonSelector);
    }
  
    _showErrorMessage() {
      this._input.classList.add(this._inputErrorClass);
      const errorMessage = this._form.querySelector(`#${this._input.id}-error`);
      errorMessage.classList.add(this._errorClass);
      errorMessage.textContent = this._input.validationMessage;
    }
  
    _hideErrorMessage() {
      this._input.classList.remove(this._inputErrorClass);
      const errorMessage = this._form.querySelector(`#${this._input.id}-error`);
      errorMessage.classList.remove(this._errorClass);
      errorMessage.textContent = this._input.validationMessage;
    }
  
    _checkInputValidity() {
      if (!this._input.checkValidity()) {
        this._showErrorMessage();
    } else {
        this._hideErrorMessage();
    }
    }
  
    _hasInvalidInput() {
      return this._inputList.some((item) => !item.checkValidity()); 
    }
  
    _enableButton() {
      this._formButton.classList.remove(this._inactiveButtonClass);
      this._formButton.removeAttribute('disabled');
    }
  
    _disableButton() { 
      this._formButton.classList.add(this._inactiveButtonClass);
      this._formButton.setAttribute('disabled', true);
    }
  
    _setButtonStatus() {
      if (this._hasInvalidInput()) {
          this._disableButton(); 
      } else {
          this._enableButton();
      }
    }
  
    _setEventListeners() {
      this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
      this._inputList.forEach((input) => input.addEventListener('input', () => {
        this._input = input;
        this._checkInputValidity();
        this._setButtonStatus();
      }))
    }
  
    enableValidation() {
      this._form.addEventListener('submit', evt => evt.preventDefault());
      this._setEventListeners();
    }
  
    resetValidation() {
      this._setButtonStatus()
    }
  }