import './index.css';

import {
  initialCards,
  validationConfig,
  profileNameSelector,
  profileJobSelector,
  avatarSelector,
  sectionSelector,
  editProfilePopupSelector,
  editAvatarPopupSelector,
  addCardPopupSelector,
  imageCardPopupSelector,
  warningPopupSelector,
  cardTemplate
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWarning from '../components/PopupWarning.js';
import Api from '../components/Api';

const buttonEditProfileElement = document.querySelector('.profile__edit-btn');
const buttonEditAvatarElement = document.querySelector('.profile__avatar-btn');
const buttonAddCardElement = document.querySelector('.profile__add-btn');

const popupEditProfileForm = document.querySelector('#edit-profile-form'); 
const popupAddCardForm = document.querySelector('#add-card-form');
const popupEditAvatarForm = document.querySelector('#edit-avatar-form');

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '7e0d2f57-6b32-4260-a91a-24f46b2802d0',
    'Content-Type': 'application/json'
  }
});


// DEBUG

// api.getUserInfo()
// .then(res => console.log(res))

// api.getInitialCards()
// .then(res => console.log(res))

// Обработчики Popup

const userInfo = new UserInfo (profileNameSelector, profileJobSelector, avatarSelector,);
let userId = null;


const profilePopup = new PopupWithForm (editProfilePopupSelector, handleEditProfileFormSubmit);
profilePopup.setEventListeners();

const avatarPopup = new PopupWithForm (editAvatarPopupSelector, handleEditAvatarFormSubmit);
avatarPopup.setEventListeners();

const newCardPopup = new PopupWithForm (addCardPopupSelector, handleAddCardFormSubmit);
newCardPopup.setEventListeners();

const imageCardPopup = new PopupWithImage (imageCardPopupSelector)
imageCardPopup.setEventListeners();

const warningPopup = new PopupWarning (warningPopupSelector, handleWarningSubmit);
warningPopup.setEventListeners();

const cardSection = new Section ( addCardRenderer, sectionSelector);

// Функции callback

function toggleEditProfilePopup() {
  validationEditProfileForm.clearErrors();
  profilePopup.setInputValues(userInfo.getUserInfo());
  profilePopup.open();
}

function toggleEditAvatarPopup() {
  validationPopupEditAvatarForm.setButtonStatus()
  validationPopupEditAvatarForm.clearErrors()
  avatarPopup.open();
}

function toggleAddCardPopup() {
  validationPopupAddCardForm.setButtonStatus();
  validationPopupAddCardForm.clearErrors();
  newCardPopup.open();
}

function handleLike(cardId, likeButton, likesCounter) {
  if (likeButton.classList.contains('card__like-btn_active')) {
    api.dislikeCard(cardId)
    .then (res => {
      likesCounter.textContent = res.likes.length;
      likeButton.classList.remove('card__like-btn_active')})
    .catch(console.error)
    .finally()
  }
     else {
    api.likeCard(cardId)
    .then (res => {
      likesCounter.textContent = res.likes.length;
      likeButton.classList.add('card__like-btn_active')})
    .catch(console.error)
    .finally()
    }
  }

function addCardRenderer(element) {
  return new Card(element, cardTemplate, imageCardPopup.open, warningPopup.open, handleLike, userId).createNewCard();
}

function handleEditProfileFormSubmit(formValues) {
  api.setUserInfo(formValues)
  .then(res => {
    userInfo.setUserInfo(formValues);
    profilePopup.close();
  })
  .catch(console.error)
  .finally(() => {
    profilePopup.setSubmitDefaultText()
  })
}

function handleEditAvatarFormSubmit(formValues) {
  api.setUserAvatar(formValues)
  .then(res => {
    userInfo.setUserInfo(formValues);
    avatarPopup.close();
  })
  .catch(console.error)
  .finally(() => {
      avatarPopup.setSubmitDefaultText();
    })
}

function handleAddCardFormSubmit(formValues) {
  api.addCard(formValues)
  .then(res => {
    cardSection.prependItem(res);
    newCardPopup.close();
  })
  .catch(console.error)
  .finally(() => {
    newCardPopup.setSubmitDefaultText();
  })
}

function handleWarningSubmit(target) {
  api.deleteCard(target._cardId)
  .then(res => {
    target.deleteCard();
    warningPopup.close();;
  })
  .catch(console.error)
  .finally(() => {
    warningPopup.setSubmitDefaultText();
  })
}

// Функции обработки форм

const validationEditProfileForm = new FormValidator(validationConfig, popupEditProfileForm);
validationEditProfileForm.enableValidation();

const validationPopupAddCardForm = new FormValidator(validationConfig, popupAddCardForm);
validationPopupAddCardForm.enableValidation();

const validationPopupEditAvatarForm = new FormValidator(validationConfig, popupEditAvatarForm);
validationPopupEditAvatarForm.enableValidation();

// Раздел с обработчиками событий

buttonEditProfileElement.addEventListener('click', toggleEditProfilePopup);
buttonAddCardElement.addEventListener('click', toggleAddCardPopup);
buttonEditAvatarElement.addEventListener('click', toggleEditAvatarPopup);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo({user_name: userData.name, user_info: userData.about, user_avatar: userData.avatar, user_id: userData._id});
    userId = userInfo.getUserId();
    cardSection.addInitialItems (cardsData);
  })
  .catch(console.error);

