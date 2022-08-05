class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  getInitCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  setNewProfileSave(userData) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(userData),
    }).then((res) => this._checkResponse(res));
  }

  recordNewCard(cardData) {
    const body = {
      name: cardData.name,
      link: cardData.link,
    };
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(body),
    }).then((res) => this._checkResponse(res));
  }

  deleteCurrentCard(obj) {
    return fetch(`${this._url}/cards/${obj._id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  recordNewAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(avatar),
    }).then((res) => this._checkResponse(res));
  }

  addLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }
}

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-45',
  headers: {
    authorization: '3d2f6fc9-c8b6-4135-a900-76b411c920b6',
    'Content-Type': 'application/json',
  },
});

export default api;
