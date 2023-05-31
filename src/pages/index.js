import './index.css';

import {
  initialCards,
  validationConfig,
  buttonEditProfileElement,
  buttonAddCardElement,
  popupEditProfileForm,
  popupAddCardForm,
  profileNameSelector,
  profileJobSelector,
  sectionSelector,
  editProfilePopupSelector,
  addCardPopupSelector,
  imageCardPopupSelector,
  cardTemplate
} from '../scripts/utils/constants.js';
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';

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

