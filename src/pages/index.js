import './index.css';

import {
  initialCards,
  validationConfig,
  profileNameSelector,
  profileJobSelector,
  sectionSelector,
  editProfilePopupSelector,
  editAvatarPopupSelector,
  addCardPopupSelector,
  imageCardPopupSelector,
  cardTemplate
} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';

const buttonEditProfileElement = document.querySelector('.profile__edit-btn');
const buttonEditAvatarElement = document.querySelector('.profile__avatar-btn');
const buttonAddCardElement = document.querySelector('.profile__add-btn');

const AvatarElement = document.querySelector('.profile__avatar');

const popupEditProfileForm = document.querySelector('#edit-profile-form'); 
const popupAddCardForm = document.querySelector('#add-card-form');
const popupEditAvatarForm = document.querySelector('#edit-avatar-form');

// Обработчики Popup

const userInfo = new UserInfo (profileNameSelector, profileJobSelector);

const editProfilePopup = new PopupWithForm (editProfilePopupSelector, handleEditProfileFormSubmit);
editProfilePopup.setEventListeners();

const editAvatarPopup = new PopupWithForm (editAvatarPopupSelector, handleEditAvatarFormSubmit);
editAvatarPopup.setEventListeners();

const addCardPopup = new PopupWithForm (addCardPopupSelector, handleAddCardFormSubmit);
addCardPopup.setEventListeners();

const imageCardPopup = new PopupWithImage (imageCardPopupSelector)
imageCardPopup.setEventListeners();

const cardSection = new Section ( { items: initialCards, 
  renderer: addCardRenderer }, sectionSelector);
cardSection.addInitialItems ();

// Функции callback

function toggleEditProfilePopup() {
  validationEditProfileForm.clearErrors();
  editProfilePopup.setInputValues(userInfo.getUserInfo());
  editProfilePopup.open();
}

function toggleEditAvatarPopup() {
  validationPopupEditAvatarForm.setButtonStatus()
  validationPopupEditAvatarForm.clearErrors()
  editAvatarPopup.open();
}

function toggleAddCardPopup() {
  validationPopupAddCardForm.setButtonStatus();
  validationPopupAddCardForm.clearErrors();
  addCardPopup.open();
}

function addCardRenderer(element) {
  return new Card(element, cardTemplate, imageCardPopup.open).createNewCard();
}

function handleEditProfileFormSubmit(formValues) {
  userInfo.setUserInfo(formValues);
  editProfilePopup.close(); 
}

function handleEditAvatarFormSubmit(formValues) {
  AvatarElement.src = formValues.user_avatar;
  editAvatarPopup.close();
}

function handleAddCardFormSubmit(formValues) {
  cardSection.prependItem(formValues);
  addCardPopup.close();
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

