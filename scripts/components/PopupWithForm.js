import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor( popupSelector, submitCallback) {
        super(popupSelector);
        this._submitFunc = submitCallback;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._formValues = {};
    }

    _getInputValues() {
        this._inputList.forEach((input) => {
          this._formValues[input.name] = input.value
        })
        return this._formValues;
      }

    setInputValues(data) {
        this._inputList.forEach((input) => {
            input.value = data[input.name];
        })
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._getInputValues();
            this._submitFunc(this._formValues);
        })
    }

    close() {
        this._form.reset();
        super.close();
    }
}