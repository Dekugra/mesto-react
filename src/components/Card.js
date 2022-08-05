import React, { Fragment } from 'react';

export default function Card(props) {
  const handleCardClick = () => {
    props.onClick(props.card);
  };
  return (
    <Fragment>
      <li className="element" onClick={handleCardClick}>
        <button className="element__cardremove element__cardremove_hidden" type="button" aria-label="удалить"></button>
        <img style={{ backgroundImage: `url(${props.card.link})` }} className="element__image" />
        <div className="element__title">{props.card.name}</div>
        <button className="element__like" type="button" aria-label="поставить лайк"></button>
        <p className="element__like-total">{props.card.likes.length}</p>
      </li>
    </Fragment>
  );
}
