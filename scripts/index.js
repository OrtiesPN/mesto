
const ButtonEditProfileElement = document.querySelector('.profile__edit-btn'); // получаю элемент кнопки редактирования
const ButtonAddCardElement = document.querySelector('.profile__add-btn');
const popupElement = document.querySelectorAll('.popup'); // получаю все элементы секции попап
const editProfilePopup = document.querySelector('.edit-profile-popup');
const addCardPopup = document.querySelector('.add-card-popup');
const popupCloseButtons = document.querySelectorAll('.popup__close-btn'); // получаю все кнопки закрытия
let profileNameElement = document.querySelector('.profile__name'); // получаю элемент имени профиля
let profileJobElement = document.querySelector('.profile__subtitle'); // получаю элемент описания профиля
const popupEditProfileForm = document.getElementById('edit-profile-form'); // получаю элемент формы редактирования профиля
const popupAddCardForm = document.getElementById('add-card-form');
let nameInputElement = document.getElementById('name'); // получаю элемент строки ввода имени из формы
let jobInputElement = document.getElementById('job'); // получаю элемент строки ввода описания из формы
let placeInputElement = document.getElementById('place');
let linkInputElement = document.getElementById('link');

const openPopup = (popupElement) => {
  popupElement.classList.add('popup_opened');

};

const openEditProfilePopup = function() {
  nameInputElement.value = profileNameElement.textContent;
  jobInputElement.value = profileJobElement.textContent;
  openPopup(editProfilePopup);
}

const openAddCardPopup = function() {
  openPopup(addCardPopup);
}

const closePopup = function (evt) { // функция закрытия попапа по крестику
  const popupToClose = evt.target.closest('.popup');
  popupToClose.classList.remove('popup_opened');
};

function handleEditProfileFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileNameElement.textContent = nameInputElement.value; // подставляю в профиль значения из строк ввода
    profileJobElement.textContent = jobInputElement.value;
    closePopup(evt); // закрываю попап
}

function handleAddCardFormSubmit (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const newCard = {name: placeInputElement.value, link: linkInputElement.value};
  addCard(newCard);
  closePopup(evt); // закрываю попап
  popupAddCardForm.reset();
  
}

// Раздел с обработчиками событий

ButtonEditProfileElement.addEventListener("click", openEditProfilePopup);
ButtonAddCardElement.addEventListener('click', openAddCardPopup);
popupCloseButtons.forEach((popupCloseButton) => popupCloseButton.addEventListener("click", closePopup));
popupEditProfileForm.addEventListener('submit', handleEditProfileFormSubmit);
popupAddCardForm.addEventListener('submit', handleAddCardFormSubmit);
// Раздел с логикой отображения и добавления карточек

const elements = document.querySelector('.elements__cards');
const cardTemplate = document.querySelector('.card-template').content;
const initialCards = [
    {
      name: 'Россия',
      link: './images/OctoberWalks-72.jpg'
    },
    {
      name: 'Москва',
      link: './images/autumn_dull-9.jpg'
    },
    {
      name: 'Краснодарский край',
      link: './images/gele-1.jpg'
    },
    {
      name: 'Геленджик',
      link: './images/gele-187.jpg'
    },
    {
      name: 'Шри-Ланка',
      link: './images/inland-142.jpg'
    },
    {
      name: 'Серфинг',
      link: './images/cool_surfers-7.jpg'
    }
  ];

  initialCards.forEach(addCard);

  function addCard(card) {
    const newCard = cardTemplate.cloneNode(true);
    newCard.querySelector('.card__image').src = card.link;
    newCard.querySelector('.card__image').alt = card.name;
    newCard.querySelector('.card__title').textContent = card.name;
    
    
    elements.append(newCard);
  }
