const initialCards = [
    {
      card_place: 'Россия',
      card_link: './images/OctoberWalks-72.jpg'
    },
    {
      card_place: 'Москва',
      card_link: './images/autumn_dull-9.jpg'
    },
    {
      card_place: 'Краснодарский край',
      card_link: './images/gele-1.jpg'
    },
    {
      card_place: 'Геленджик',
      card_link: './images/gele-187.jpg'
    },
    {
      card_place: 'Шри-Ланка',
      card_link: './images/inland-142.jpg'
    },
    {
      card_place: 'Серфинг',
      card_link: './images/cool_surfers-7.jpg'
    }
  ];

  const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error_visible'
  }

  export {initialCards, validationConfig};