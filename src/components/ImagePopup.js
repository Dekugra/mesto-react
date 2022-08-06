import React from 'react';

export default function ImagePopup({ isOpen, setOpen, onClose, card: { link, name } }) {
  return (
    <section
      className={isOpen ? `popup popup_type_show popup_opened` : `popup popup_type_show`}
      onClick={() => setOpen(false)}
    >
      <div className="popup__containershow" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="popup__close popup__close_type_show"
          type="button"
          aria-label="Закрыть"
        ></button>
        <img src={`${link}`} className="popup__image" />
        <h3 className="popup__titleshow" aria-label="место">
          {name}
        </h3>
      </div>
    </section>
  );
}
