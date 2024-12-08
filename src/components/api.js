export { addNewCard, deleteCard, likeCard, deleteLikeCard, editAvatar }

const config = {
  baseUrl: 'https://nomoreparties.co/v1/frontend-st-cohort-201',
  headers: {
    authorization: '2078ef6c-8382-4a01-8429-63a09ea3576c',
    'Content-Type': 'application/json'
  }
}

const getResponseData = (res) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

// GET запрос данных о пользователе
export function getUser() {
  return fetch('https://nomoreparties.co/v1/frontend-st-cohort-201/users/me', {
    headers: config.headers
  })
    .then(getResponseData)
}

// PATCH изменение данных пользователя

export function editProfileInfo(userName, userJob,) {
  return fetch('https://nomoreparties.co/v1/frontend-st-cohort-201/users/me', {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: `${userName}`,
      about: `${userJob}`
    })
  })
    .then(getResponseData)

}

// GET запрос карточек
export function getCards() {
  return fetch('https://nomoreparties.co/v1/frontend-st-cohort-201/cards', {
    headers: config.headers
  })
    .then(getResponseData)
}

// POST Добавление новой карточки
function addNewCard(cardName, cardLink) {
  return fetch('https://nomoreparties.co/v1/frontend-st-cohort-201/cards', {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: `${cardName}`,
      link: `${cardLink}`
    })
  }).then(getResponseData)
}

function deleteCard(cardId) {
  return fetch(`https://nomoreparties.co/v1/frontend-st-cohort-201/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers
  })
    .then(getResponseData)
}

// Поставить лайк
function likeCard(cardId) {
  return fetch(`https://nomoreparties.co/v1/frontend-st-cohort-201/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers
  })
    .then(getResponseData)
}

// Удалить лайк карточки
function deleteLikeCard(cardId) {
  return fetch(`https://nomoreparties.co/v1/frontend-st-cohort-201/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(getResponseData)
}

// Обновление аватара
function editAvatar(avatarLink) {
  return fetch('https://nomoreparties.co/v1/frontend-st-cohort-201/users/me/avatar', {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: `${avatarLink}`
    })
  })
    .then(getResponseData)

}
