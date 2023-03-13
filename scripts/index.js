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


