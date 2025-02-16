export const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточки
export function createCard(cardTemplate, item) {
  const cardElement = cardTemplate.querySelector('.card__item').cloneNode(true);

  const cardImage = cardElement.querySelector('.card__item-img');
  const cardTitle = cardElement.querySelector('.card__item-title');
  const cardParagraph = cardElement.querySelector('.card__item-paragraph');
  const cardMark = cardElement.querySelector('.card__item-mark');
  const cardDate = cardElement.querySelector('.card__item-date');

  cardImage.src = item.link;
  cardImage.alt = item.heading;
  cardTitle.textContent = item.heading;
  cardParagraph.textContent = item.title;
  cardMark.textContent = item.body;

  // Добавление жирности шрифта автору поста после фразы 'Posted by'
  if (item.date && typeof item.date === 'string') {
    const dateParts = item.date.match(/Posted by (.+), on (.+)/);
    if (dateParts) {
      cardDate.textContent = 'Posted by ';

      const authorSpan = document.createElement('span');
      authorSpan.textContent = dateParts[1];
      authorSpan.classList.add('weight-bold');

      cardDate.appendChild(authorSpan);
      cardDate.append(`, on ${dateParts[2]}`);
    } else {
      cardDate.textContent = item.date;
    }
  } else {
    cardDate.textContent = 'Unknown Date';
  }

  return cardElement;
}
