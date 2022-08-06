import React from 'react';

export default function Card(props) {
  // деструктуризация props приводит к ошибкам, т.к. передать onClick в Main не представляется возможным...
  const handleCardClick = () => {
    props.onClick(props.card);
  };
  return (
    <li className="element" key={props.card._id}>
      <div className="element__card">
        <button
          className="element__cardremove element__cardremove_hidden"
          type="button"
          aria-label="удалить"
        ></button>
        <img
          onClick={handleCardClick}
          style={{ backgroundImage: `url(${props.card.link})` }}
          className="element__image"
        />
        <div className="element__title">{props.card.name}</div>
        <button className="element__like" type="button" aria-label="поставить лайк"></button>
        <p className="element__like-total">{props.card.likes.length}</p>
      </div>
    </li>
  );
}
