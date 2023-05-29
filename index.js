import {initialCards, validationConfig} from './scripts/utils/constants.js';
import Card from './scripts/components/Card.js';
import FormValidator from './scripts/components/FormValidator.js';
import Popup from './scripts/components/Popup.js';
import PopupWithImage from './scripts/components/PopupWithImage.js';
import Section from './scripts/components/Section.js';
import UserInfo from './scripts/components/UserInfo.js';
import PopupWithForm from './scripts/components/PopupWithForm.js';

const buttonEditProfileElement = document.querySelector('.profile__edit-btn');
const buttonAddCardElement = document.querySelector('.profile__add-btn'); 



const formsList = document.querySelectorAll('form');

const popupEditProfileForm = document.querySelector('#edit-profile-form');
const nameInputElement = document.querySelector('#name');
const jobInputElement = document.querySelector('#job'); 

const popupAddCardForm = document.querySelector('#add-card-form');
const placeInputElement = document.querySelector('#place');
const linkInputElement = document.querySelector('#link');
const submitCardButton = popupAddCardForm.querySelector(validationConfig.submitButtonSelector);



// Селекторы и классы
const profileNameSelector = ('.profile__name');
const profileJobSelector = ('.profile__subtitle');

const sectionSelector = ('.elements__cards');

const editProfilePopupSelector = ('.edit-profile-popup');
const addCardPopup = ('.add-card-popup');
const imageCardPopupSelector = ('.image-card-popup');

const cardTemplate = ('.card-template');

// Обработчики Popup
const userInfo = new UserInfo (profileNameSelector, profileJobSelector);

const editProfilePopup = new PopupWithForm (editProfilePopupSelector,
  handleEditProfileFormSubmit);
editProfilePopup.setEventListeners();

const addCardPopup = new PopupWithForm ()

const imageCardPopup = new PopupWithImage (imageCardPopupSelector)
imageCardPopup.setEventListeners();

const cardSection = new Section ( {items: initialCards, 
  renderer: (element) => {
    return new Card(element, cardTemplate, imageCardPopup.open).createNewCard();
  }}, sectionSelector);
cardSection.addInitialItems ();




// Функции callback
function toggleEditProfilePopup() {
  editProfilePopup.setInputValues(userInfo.getUserInfo());
  editProfilePopup.open();
}

function handleEditProfileFormSubmit(formValues) {
  userInfo.setUserInfo(formValues);
  editProfilePopup.close(); 
}

const handleAddCardFormSubmit = (evt) => {
  evt.preventDefault();
  const userCard = {name: placeInputElement.value, link: linkInputElement.value};
  prependCard(userCard);
  // closePopup(addCardPopup); 
  popupAddCardForm.reset();
}
// Функции обработки форм

formsList.forEach((form) => {
  form = new FormValidator(validationConfig, form);
  form.enableValidation();
})

const validationEditProfileForm = new FormValidator(validationConfig, popupEditProfileForm);
validationEditProfileForm.enableValidation();

const validationpopupAddCardForm = new FormValidator(validationConfig, popupAddCardForm);
validationpopupAddCardForm.enableValidation();

// Раздел с обработчиками событий


buttonEditProfileElement.addEventListener('click', toggleEditProfilePopup);
// buttonAddCardElement.addEventListener('click', openAddCardPopup);
// popupAddCardForm.addEventListener('submit', handleAddCardFormSubmit);

