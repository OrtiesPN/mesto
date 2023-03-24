const popupElement = document.querySelectorAll('.popup');
const editProfilePopup = document.querySelector('.edit-profile-popup');
const addCardPopup = document.querySelector('.add-card-popup');
const imageCardPopup = document.querySelector('.image-card-popup');

const ButtonEditProfileElement = document.querySelector('.profile__edit-btn');
const ButtonAddCardElement = document.querySelector('.profile__add-btn');
const popupCloseButtons = document.querySelectorAll('.popup__close-btn'); 

const profileNameElement = document.querySelector('.profile__name');
const profileJobElement = document.querySelector('.profile__subtitle');

const popupEditProfileForm = document.getElementById('edit-profile-form');
const nameInputElement = document.getElementById('name');
const jobInputElement = document.getElementById('job'); 

const popupAddCardForm = document.getElementById('add-card-form');
const placeInputElement = document.getElementById('place');
const linkInputElement = document.getElementById('link');

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

function closePopup(evt) {
  evt.target.closest('.popup').classList.remove('popup_opened');
};

// Функции обработки форм

const handleEditProfileFormSubmit = (evt) => {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileNameElement.textContent = nameInputElement.value; // подставляю в профиль значения из строк ввода
    profileJobElement.textContent = jobInputElement.value;
    closePopup(evt); // закрываю попап
}

const handleAddCardFormSubmit = (evt) => {
  evt.preventDefault();
  const newCard = {name: placeInputElement.value, link: linkInputElement.value};
  prependCard(newCard);
  closePopup(evt); 
  popupAddCardForm.reset();
  
}

// Функции кнопок на карточках

const openShowCardPopup = (evt) => {
  const showCardImage = document.querySelector('.popup-card__image');
  showCardImage.src = evt.target.src;
  showCardImage.alt = evt.target.alt;
  const showCardCaption = document.querySelector('.popup-card__caption');
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

ButtonEditProfileElement.addEventListener("click", openEditProfilePopup);
ButtonAddCardElement.addEventListener('click', openAddCardPopup);
popupCloseButtons.forEach((popupCloseButton) => popupCloseButton.addEventListener("click", closePopup));
popupEditProfileForm.addEventListener('submit', handleEditProfileFormSubmit);
popupAddCardForm.addEventListener('submit', handleAddCardFormSubmit);

// Раздел с логикой отображения и добавления карточек

const elements = document.querySelector('.elements__cards');
console.log(elements.length);
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

  initialCards.forEach(appendCard);

  function addCard(name, link) {
    const newCard = cardTemplate.cloneNode(true);
    newCard.querySelector('.card__image').src = link;
    newCard.querySelector('.card__image').alt = name;
    newCard.querySelector('.card__title').textContent = name;
    newCard.querySelector('.card__image').addEventListener('click', openShowCardPopup);
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
