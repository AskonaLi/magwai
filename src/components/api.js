// Конфиг
export const config = {
  baseUrl: 'https://jsonplaceholder.typicode.com',
};

// Функция обработки ответа от сервера
export const getResponse = (result) => {
  if (result.ok) {
    return result.json();
  }
  return Promise.reject(`Ошибка: ${result.status}`);
};

// Функция загрузки данных о названии и тексте с сервера
export function loadingCardsInfo() {
  return fetch(`${config.baseUrl}/posts`, {
    method: 'GET',
  }).then(getResponse);
}

// Функция загрузки данных о фотографии с сервера
export function loadingImageInfo() {
  return fetch(`${config.baseUrl}/photos`, {
    method: 'GET',
  }).then(getResponse);
}
