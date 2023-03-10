console.log("Wake up, Neo!");
const editButtonElement = document.querySelector('.profile__edit-button'); // получаю элемент кнопки редактирования
const popupElement = document.querySelector('.popup'); // получаю элемент секции попап
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button'); // получаю элемент кнопки закрытия попапа из секции попапа

let profileName = document.querySelector('.profile__name'); // получаю элемент имени профиля
let profileJob = document.querySelector('.profile__subtitle'); // получаю элемент описания профиля

const popupEditProfileElement = document.querySelector('.popup__edit-profile'); // получаю элемент формы редактирования профиля
let nameInput = popupEditProfileElement.querySelector('.popup__name-input'); // получаю элемент строки ввода имени из формы
let jobInput = popupEditProfileElement.querySelector('.popup__job-input'); // получаю элемент строки ввода описания из формы

const openPopup = function () { // функция открытия попапа, каждый вызов функции подставляет в строки ввода исходные значения из профиля
    popupElement.classList.add('popup_is-active');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};

const closePopup = function () { // функция закрытия попапа по крестику
    popupElement.classList.remove('popup_is-active');
};

const closePopupByClickOverlay = function (event) { // функция закрытия попапа по черному полю с ранним выходом
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopup();
};

function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = nameInput.value; // подставляю в профиль значения из строк ввода
    profileJob.textContent = jobInput.value;
    closePopup(); // закрываю попап


    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

editButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
popupElement.addEventListener("click", closePopupByClickOverlay);
popupEditProfileElement.addEventListener('submit', handleFormSubmit);
