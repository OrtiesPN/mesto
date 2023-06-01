import './index.css';

import {
  initialCards,
  validationConfig,
  profileNameSelector,
  profileJobSelector,
  sectionSelector,
  editProfilePopupSelector,
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
const buttonAddCardElement = document.querySelector('.profile__add-btn'); 

const popupEditProfileForm = document.querySelector('#edit-profile-form'); 
const popupAddCardForm = document.querySelector('#add-card-form');

// Обработчики Popup

const userInfo = new UserInfo (profileNameSelector, profileJobSelector);

const editProfilePopup = new PopupWithForm (editProfilePopupSelector, handleEditProfileFormSubmit);
editProfilePopup.setEventListeners();

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

function handleAddCardFormSubmit(formValues) {
  cardSection.prependItem(formValues);
  addCardPopup.close();
}

// Функции обработки форм

const validationEditProfileForm = new FormValidator(validationConfig, popupEditProfileForm);
validationEditProfileForm.enableValidation();

const validationPopupAddCardForm = new FormValidator(validationConfig, popupAddCardForm);
validationPopupAddCardForm.enableValidation();

// Раздел с обработчиками событий

buttonEditProfileElement.addEventListener('click', toggleEditProfilePopup);
buttonAddCardElement.addEventListener('click', toggleAddCardPopup);

