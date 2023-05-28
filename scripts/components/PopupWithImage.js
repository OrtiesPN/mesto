import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup-card__image');
        this._popupCaption = this._popup.querySelector('.popup-card__caption');
    }

    open = (cardData) => {
        this._popupImage.src = cardData.link;
        this._popupImage.alt = cardData.name;
        this._popupCaption.textContent = cardData.name;
        super.open();
    }
}

// const openShowCardPopup = (card) => {
//     showCardImage.src = card.link;
//     showCardImage.alt = card.name;
//     showCardCaption.textContent = card.name;
//     // openPopup(imageCardPopup);
//   }