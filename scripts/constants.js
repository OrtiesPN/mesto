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

  const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error_visible'
  }

  export {initialCards, validationConfig};