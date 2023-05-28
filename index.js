import {initialCards, validationConfig} from './scripts/utils/constants.js';
import Card from './scripts/components/Card.js';
import FormValidator from './scripts/components/FormValidator.js';
import Popup from './scripts/components/Popup.js';
import PopupWithImage from './scripts/components/PopupWithImage.js';
import Section from './scripts/components/Section.js';
import UserInfo from './scripts/components/UserInfo.js';

const buttonEditProfileElement = document.querySelector('.profile__edit-btn');
const buttonAddCardElement = document.querySelector('.profile__add-btn'); 

const profileNameElement = document.querySelector('.profile__name');
const profileJobElement = document.querySelector('.profile__subtitle');

const formsList = document.querySelectorAll('form');

const popupEditProfileForm = document.querySelector('#edit-profile-form');
const nameInputElement = document.querySelector('#name');
const jobInputElement = document.querySelector('#job'); 

const popupAddCardForm = document.querySelector('#add-card-form');
const placeInputElement = document.querySelector('#place');
const linkInputElement = document.querySelector('#link');
// const submitCardButton = popupAddCardForm.querySelector(validationConfig.submitButtonSelector);

const userInfo = new UserInfo ('.profile__name', '.profile__subtitle')

// Селекторы и классы
const sectionSelector = ('.elements__cards');

const editProfilePopupSelector = ('.edit-profile-popup');
const imageCardPopupSelector = ('.image-card-popup');

const cardTemplate = ('.card-template');

// Обработчики Popup
const editProfilePopup = new Popup (editProfilePopupSelector);
editProfilePopup.setEventListeners();

const imageCardPopup = new PopupWithImage (imageCardPopupSelector)
imageCardPopup.setEventListeners();

const cardSection = new Section ( {items: initialCards, 
  renderer: (element) => {
    return new Card(element, cardTemplate, imageCardPopup.open).createNewCard();
  }}, sectionSelector);
cardSection.addInitialItems ();


// Функции обработки форм

formsList.forEach((form) => {
  form = new FormValidator(validationConfig, form);
  form.enableValidation();
})

const validationEditProfileForm = new FormValidator(validationConfig, popupEditProfileForm);
validationEditProfileForm.enableValidation();

const validationpopupAddCardForm = new FormValidator(validationConfig, popupAddCardForm);
validationpopupAddCardForm.enableValidation();

const handleEditProfileFormSubmit = (evt) => {
    evt.preventDefault();
    profileNameElement.textContent = nameInputElement.value;
    profileJobElement.textContent = jobInputElement.value;
    // closePopup(editProfilePopup); 
}

const handleAddCardFormSubmit = (evt) => {
  evt.preventDefault();
  const userCard = {name: placeInputElement.value, link: linkInputElement.value};
  prependCard(userCard);
  // closePopup(addCardPopup); 
  popupAddCardForm.reset();
}

// Раздел с обработчиками событий

buttonEditProfileElement.addEventListener('click', () => editProfilePopup.open());
// buttonAddCardElement.addEventListener('click', openAddCardPopup);
popupEditProfileForm.addEventListener('submit', handleEditProfileFormSubmit);
popupAddCardForm.addEventListener('submit', handleAddCardFormSubmit);

