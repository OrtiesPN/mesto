export default class Popup {
    constructor (popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = this._popup.querySelector('.popup__close-btn');
    }

    setEventListeners() {
        this._popup.addEventListener('click', this._closePopupByOverlay);
        this._buttonClose.addEventListener('click', this._closePopupByButton);
    }

    _closePopupByEscape = (evt) => {
        if (evt.key == 'Escape') {
            this.close();
          }
    }

    _closePopupByOverlay =(evt) => {
        if (evt.target == evt.currentTarget) {
            this.close();
        }
      }

    _closePopupByButton = () => {
        this.close();
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._closePopupByEscape);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._closePopupByEscape);
    }
}