import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import api from '../utils/Api';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then(({ avatar, name, about }) => {
        setUserAvatar(avatar);
        setUserName(name);
        setUserDescription(about);
      })
      .catch((err) => console.log('Ошибка. Запрос не выполнен', err));
    // finally в десятой проектной работе не используется, т.к. в чеклисте ничего не сказано про название кнопки попапа
  }, []);

  useEffect(() => {
    api
      .getInitCards()
      .then((res) => setCards(res))
      .catch((err) => console.log('Ошибка. Запрос не выполнен', err));
  }, []);

  const cardRender = cards.map((card) => {
    return <Card card={card} onClick={onClick} key={card._id} />;
  });

  return (
    <>
      <main className="content">
        <section className="profile">
          <img style={{ backgroundImage: `url("${userAvatar}")` }} className="profile__avatar" />
          <button
            onClick={onEditAvatar}
            className="profile__avatar-editbutton"
            type="button"
            aria-label="редактировать"
          ></button>
          <div className="profile__info">
            <div className="profile__title-editbtn">
              <h1 className="profile__title" aria-label="Ваше имя">
                {userName}
              </h1>
              <button
                onClick={onEditProfile}
                type="button"
                className="profile__edit-button"
                aria-label="редактировать"
              ></button>
            </div>
            <p className="profile__subtitle" aria-label="область компетенций">
              {userDescription}
            </p>
          </div>
          <button
            onClick={onAddPlace}
            className="profile__add-button"
            type="button"
            aria-label="добавить изображение"
          ></button>
        </section>
        <section className="elements">
          <ul className="elements__items">{cardRender}</ul>
        </section>
      </main>
    </>
  );
}

export default Main;
