export default class Popup {
    constructor (popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closePopupByEscape = this._closePopupByEscape.bind(this);
    }

    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-btn')) {
                this.close();
            }
        });
    }

    _closePopupByEscape(evt) {
        if (evt.key === 'Escape') {
            this.close();
          }
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