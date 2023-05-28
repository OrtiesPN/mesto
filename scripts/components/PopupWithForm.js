import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor( popupSelector, submitCallback) {
        super(popupSelector);
        this._submitFunc = submitCallback;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', this._submitFunc);
    }

    close() {
        this._form.reset();
        super.close();
    }
}