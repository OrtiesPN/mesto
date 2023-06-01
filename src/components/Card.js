export default class Card {
    constructor(data, cardTemplate, openShowCardPopup) {
      this._name = data.card_place;
      this._link = data.card_link;
      this._cardTemplate = cardTemplate;
      this._openShowCardPopup = openShowCardPopup;
    }
  
    _toggleLike = () => {
      this._newCardLikeButton.classList.toggle('card__like-btn_active');
    }
  
    _deleteCard = () => {
      this._newCard.remove();
      this._newCard = null;
    }
  
    _toggleCardPopup = () => {
      this._openShowCardPopup({name: this._name, link: this._link});
    }
  
    _setEventListeners() {
      this._newCardLikeButton.addEventListener('click', this._toggleLike);
      this._newCardDeleteButton.addEventListener('click', this._deleteCard);
      this._newCardImage.addEventListener('click', this._toggleCardPopup);
    }
  
    createNewCard() {
      this._newCard = document.querySelector(this._cardTemplate).content.querySelector('.card').cloneNode(true);
      this._newCardImage = this._newCard.querySelector('.card__image');
      this._newCardLikeButton = this._newCard.querySelector('.card__like-btn');
      this._newCardDeleteButton = this._newCard.querySelector('.card__delete-btn');
      this._newCardImage.src = this._link;
      this._newCardImage.alt = this._name;
      this._newCard.querySelector('.card__title').textContent = this._name;
      this._setEventListeners()
      
      return this._newCard;
    }
  }