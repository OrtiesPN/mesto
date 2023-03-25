const editProfilePopup = document.querySelector('.edit-profile-popup');
const addCardPopup = document.querySelector('.add-card-popup');
const imageCardPopup = document.querySelector('.image-card-popup');
const showCardImage = imageCardPopup.querySelector('.popup-card__image');
const showCardCaption = imageCardPopup.querySelector('.popup-card__caption');

const buttonEditProfileElement = document.querySelector('.profile__edit-btn');
const buttonAddCardElement = document.querySelector('.profile__add-btn');
const buttonsClose = document.querySelectorAll('.popup__close-btn'); 

const profileNameElement = document.querySelector('.profile__name');
const profileJobElement = document.querySelector('.profile__subtitle');

const popupEditProfileForm = document.querySelector('#edit-profile-form');
const nameInputElement = document.querySelector('#name');
const jobInputElement = document.querySelector('#job'); 

const popupAddCardForm = document.querySelector('#add-card-form');
const placeInputElement = document.querySelector('#place');
const linkInputElement = document.querySelector('#link');

// Функции открытия и закрытия попап

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
};

const openEditProfilePopup = () => {
  nameInputElement.value = profileNameElement.textContent;
  jobInputElement.value = profileJobElement.textContent;
  openPopup(editProfilePopup);
}

const openAddCardPopup = () => {
  openPopup(addCardPopup);
}

// function closePopup(evt) {
//   evt.target.closest('.popup').classList.remove('popup_opened');
// };

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
};

// Функции обработки форм

const handleEditProfileFormSubmit = (evt) => {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileNameElement.textContent = nameInputElement.value; // подставляю в профиль значения из строк ввода
    profileJobElement.textContent = jobInputElement.value;
    closePopup(editProfilePopup); // закрываю попап
}

const handleAddCardFormSubmit = (evt) => {
  evt.preventDefault();
  const newCard = {name: placeInputElement.value, link: linkInputElement.value};
  prependCard(newCard);
  closePopup(addCardPopup); 
  popupAddCardForm.reset();
  
}

// Функции кнопок на карточках

const openShowCardPopup = (evt) => {
  showCardImage.src = evt.target.src;
  showCardImage.alt = evt.target.alt;
  showCardCaption.textContent = evt.target.alt;
  openPopup(imageCardPopup);
}

const toggleLike = (evt) => {
  evt.target.classList.toggle('card__like-btn_active');
}

const deleteCard = (evt) => {
  evt.target.closest('.card').remove();
}

// Раздел с обработчиками событий

buttonEditProfileElement.addEventListener("click", openEditProfilePopup);
buttonAddCardElement.addEventListener('click', openAddCardPopup);
buttonsClose.forEach((close) => close.addEventListener("click", evt => closePopup( evt.target.closest('.popup'))));
popupEditProfileForm.addEventListener('submit', handleEditProfileFormSubmit);
popupAddCardForm.addEventListener('submit', handleAddCardFormSubmit);

// Раздел с логикой отображения и добавления карточек

const elements = document.querySelector('.elements__cards');
const cardTemplate = document.querySelector('.card-template');

initialCards.forEach(appendCard);

function addCard(name, link) {
  const newCard = cardTemplate.content.cloneNode(true);
  const newCardImage = newCard.querySelector('.card__image');
  newCardImage.src = link;
  newCardImage.alt = name;
  newCard.querySelector('.card__title').textContent = name;
  newCardImage.addEventListener('click', openShowCardPopup);
  newCard.querySelector('.card__like-btn').addEventListener('click', toggleLike);
  newCard.querySelector('.card__delete-btn').addEventListener('click', deleteCard);
  return newCard;
}

function prependCard({name, link}) {
  const newCard = addCard(name, link)
  elements.prepend(newCard)
}

function appendCard({name, link}) {
  const newCard = addCard(name, link)
  elements.append(newCard);
}
