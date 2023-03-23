const ButtonEditProfileElement = document.querySelector('.profile__edit-btn'); // получаю элемент кнопки редактирования
const popupElement = document.querySelector('.popup'); // получаю элемент секции попап
const popupCloseButtonElement = document.querySelector('.popup__close-btn'); // получаю элемент кнопки закрытия попапа из секции попапа
let profileNameElement = document.querySelector('.profile__name'); // получаю элемент имени профиля
let profileJobElement = document.querySelector('.profile__subtitle'); // получаю элемент описания профиля
const popupEditProfileElement = document.querySelector('.popup__edit-profile'); // получаю элемент формы редактирования профиля
let nameInputElement = document.getElementById('name'); // получаю элемент строки ввода имени из формы
let jobInputElement = document.getElementById('job'); // получаю элемент строки ввода описания из формы

const openPopup = function () { // функция открытия попапа, каждый вызов функции подставляет в строки ввода исходные значения из профиля
    popupElement.classList.add('popup_opened');
    nameInputElement.value = profileNameElement.textContent;
    jobInputElement.value = profileJobElement.textContent;
};

const closePopup = function () { // функция закрытия попапа по крестику
    popupElement.classList.remove('popup_opened');
};

function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileNameElement.textContent = nameInputElement.value; // подставляю в профиль значения из строк ввода
    profileJobElement.textContent = jobInputElement.value;
    closePopup(); // закрываю попап
}

// Раздел с обработчиками событий

ButtonEditProfileElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
popupEditProfileElement.addEventListener('submit', handleFormSubmit);

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
    newCard.querySelector('.card__title').textContent = card.name;
    
    elements.append(newCard);
  }
