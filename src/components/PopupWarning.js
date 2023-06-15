import Popup from "./Popup.js";

export default class PopupWarning extends Popup {
    constructor (popupSelector, submitCallback) {
        super(popupSelector);
        this._submitFunc = submitCallback;
        this._form = this._popup.querySelector('.popup__form');
        this._submitButton = this._form.querySelector('.popup__submit-btn');
        this._submitDefaultText = this._submitButton.textContent;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitButton.textContent = `${this._submitDefaultText}...`;
            this._submitFunc(this._target);
        })
    }

    open = (target) => {
        super.open();
        this._target = target;
    }

    setSubmitDefaultText() {
        this._submitButton.textContent = this._submitDefaultText;
    }


}