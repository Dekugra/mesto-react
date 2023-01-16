import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `${
    isOwn ? 'element__cardremove' : 'element__cardremove element__cardremove_hidden'
  }`;
  const isLiked = props.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `${isLiked ? `element__like element__like_liked` : `element__like`}`;

  const handleCardClick = () => {
    props.onClick(props.card);
  };
  const handleLikeClick = () => {
    props.onCardLike(props.card);
  };
  return (
    <li onCardLike={handleLikeClick} className="element" key={props.card._id}>
      <div className="element__card">
        <button
          className={cardDeleteButtonClassName}
          type="button"
          aria-label="удалить"
        ></button>
        <img
          onClick={handleCardClick}
          style={{ backgroundImage: `url(${props.card.link})` }}
          className="element__image"
        />
        <div className="element__title">{props.card.name}</div>
        <button className={cardLikeButtonClassName} type="button" aria-label="поставить лайк"></button>
        <p className="element__like-total">{props.card.likes.length}</p>
      </div>
    </li>
  );
}
