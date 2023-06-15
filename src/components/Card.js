export default class Card {
    constructor(data, cardTemplate, openShowCardPopup, openWarningPopup, handleLike, userId) {
      this._name = data.name;
      this._link = data.link;
      this._userId = userId;
      this._cardId = data._id;
      this._ownerId = data.owner._id;
      this._likes = data.likes;
      this._cardTemplate = cardTemplate;
      this._openShowCardPopup = openShowCardPopup;
      this._warning = openWarningPopup;
      this._handleLike = handleLike;
    }
  
    _toggleLike = () => {
      this._handleLike(this._cardId, this._newCardLikeButton, this._newCardLikesCount )
    }

    _renderLikes() {
      this._newCardLikesCount = this._newCard.querySelector('.card__likes-counter');
      this._newCardLikesCount.textContent = this._likes.length;
      this._likes.forEach(like => {
        if (like._id == this._userId) {
          this._newCardLikeButton.classList.add('card__like-btn_active');
          return;
        }
      });
        
    }

    _toggleDeleteButtonVisibility() {
      if (this._userId !== this._ownerId) {
        this._newCardDeleteButton.setAttribute('hidden', true);
      } else {
        this._newCardDeleteButton.removeAttribute('hidden');
      }
    }
  
    deleteCard() {
      this._newCard.remove();
      this._newCard = null;
    }

    _toggleWarning = () => {
      this._warning(this);
    }
  
    _toggleCardPopup = () => {
      this._openShowCardPopup({name: this._name, link: this._link});
    }
  
    _setEventListeners() {
      this._newCardLikeButton.addEventListener('click', this._toggleLike);
      this._newCardDeleteButton.addEventListener('click', this._toggleWarning);
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
      this._renderLikes();
      this._toggleDeleteButtonVisibility();
      this._setEventListeners()
      
      return this._newCard;
    }
  }