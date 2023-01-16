import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/Api';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onClick }) {
  const [cards, setCards] = useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getInitCards()
      .then((res) => setCards(res))
      .catch((err) => console.log('Ошибка. Запрос не выполнен', err));
  }, []);
//--------------------------
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
}
//---------------------------
  const cardRender = cards.map((card) => {
    return <Card onCardLike={handleCardLike} card={card} onClick={onClick} key={card._id} />;
  });

  return (
    <>
      <main className="content">
        <section className="profile">
          <img style={{ backgroundImage: `url("${currentUser.avatar}")` }} className="profile__avatar" alt=' '/>
          <button
            onClick={onEditAvatar}
            className="profile__avatar-editbutton"
            type="button"
            aria-label="редактировать"
          ></button>
          <div className="profile__info">
            <div className="profile__title-editbtn">
              <h1 className="profile__title" aria-label="Ваше имя">
                {currentUser.name}
              </h1>
              <button
                onClick={onEditProfile}
                type="button"
                className="profile__edit-button"
                aria-label="редактировать"
              ></button>
            </div>
            <p className="profile__subtitle" aria-label="область компетенций">
              {currentUser.about}
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
