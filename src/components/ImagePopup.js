import React from 'react';

export default function ImagePopup(card) {
  return (
    <section className={card.isOpen ? `popup popup_type_show popup_opened` : `popup popup_type_show`} onClick={() => card.setOpen(false)}>
      <div className="popup__containershow" onClick={(e) => e.stopPropagation()}>
        <button onClick={card.onClose} className="popup__close popup__close_type_show" type="button" aria-label="Закрыть"></button>
        <img src={`${card.source}`} className="popup__image" />
        <h3 className="popup__titleshow" aria-label="место">
          {card.title}
        </h3>
      </div>
    </section>
  );
}
