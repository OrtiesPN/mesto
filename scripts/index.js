console.log("Wake up, Neo!");
const editButtonElement = document.querySelector('.profile__edit-button'); // получаю элемент кнопки редактирования
const popupElement = document.querySelector('.popup'); // получаю элемент секции попап
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button'); // получаю элемент кнопки закрытия попапа из секции попапа
console.log(editButtonElement, popupElement, popupCloseButtonElement);
let profileName = document.querySelector('.profile__name'); // получаю элемент имени профиля
let profileJob = document.querySelector('.profile__subtitle'); // получаю элемент описания профиля
console.log(profileName.textContent, profileJob.textContent);
const popupEditProfileElement = document.querySelector('.popup__edit-profile'); // получаю элемент формы редактирования профиля
let nameInput = popupEditProfileElement.querySelector('#name.popup__input'); // получаю элемент строки ввода имени из формы
let jobInput = popupEditProfileElement.querySelector('#job.popup__input'); // получаю элемент строки ввода описания из формы
console.log(popupEditProfileElement, nameInput.value, jobInput.value);
const openPopup = function () { // функция открытия попапа, каждый вызов функции подставляет в строки ввода исходные значения из профиля
    popupElement.classList.add('popup_is-active');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    console.log(popupElement.classList, nameInput.value, jobInput.value);
};

const clickNameInput = function () { // 
    nameInput.value = '';
};

const clickJobInput = function () {
    jobInput.value = '';
};

const closePopup = function () { // функция закрытия попапа по крестику
    popupElement.classList.remove('popup_is-active');
    console.log(popupElement.classList);
};

const closePopupByClickOverlay = function (event) { // функция закрытия попапа по черному полю с ранним выходом
    if (event.target !== event.currentTarget) {
        return;
    }
    closePopup();
    console.log(popupElement.classList);
};

function handleFormSubmit (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = nameInput.value; // подставляю в профиль значения из строк ввода
    profileJob.textContent = jobInput.value;
    closePopup(); // закрываю попап
    console.log(nameInput.value, profileName.textContent, jobInput.value, profileJob.textContent);
}

// Раздел с обработчиками событий

editButtonElement.addEventListener("click", openPopup);
nameInput.addEventListener("click", clickNameInput);
jobInput.addEventListener("click", clickJobInput);
popupCloseButtonElement.addEventListener("click", closePopup);
popupElement.addEventListener("click", closePopupByClickOverlay);
popupEditProfileElement.addEventListener('submit', handleFormSubmit);
