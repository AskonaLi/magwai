import './index.html';
import './index.scss';

import bridgeImg from './img/coins.png';

import { loadingCardsInfo, loadingImageInfo } from './style/components/api';

import { initialCards } from './style/components/card-items';

import { cardTemplate, createCard } from './style/components/card';

const cardList = document.querySelector('.card__list');

const cardCotactsSmbtBtn = document.querySelector('.card__contacts-smbt-btn');

// Функция открытия слайдера
document
  .querySelector('.header__burger')
  .addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('open');
    document.querySelector('.header__wrapper').classList.toggle('open');
    document.querySelector('.header').classList.toggle('active');

    if (document.body.style.overflow === 'hidden') {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  });

// Функция рендера карточек с корневой директории
function renderCards() {
  initialCards.forEach((item) => {
    const newCardElement = createCard(cardTemplate, item);
    cardList.append(newCardElement);
  });
}

// Вывод данных о профиле и карточках с сервера
cardCotactsSmbtBtn.addEventListener('click', () => {
  Promise.all([loadingImageInfo(), loadingCardsInfo()])
    .then(([imageInfoResult, cardsInfoResult]) => {
      // Берём первые MAX_CARDS записей
      const MAX_CARDS = 10;
      const limitedCards = cardsInfoResult.slice(0, MAX_CARDS);
      const limitedImages = imageInfoResult.slice(0, MAX_CARDS);

      const cardsWidthImages = limitedCards.map((card, index) => ({
        ...card,
        url: limitedImages[index]?.url || bridgeImg, // Подставляем картинку или дефолтную
      }));

      // Вывести карточки на страницу
      cardsWidthImages.slice(0, MAX_CARDS).forEach(function (item) {
        const eachElement = createCard(cardTemplate, item);
        cardList.append(eachElement);
      });
    })
    .catch((err) => console.log(err));
});

renderCards(); // Рендерим все карточки при загрузке
