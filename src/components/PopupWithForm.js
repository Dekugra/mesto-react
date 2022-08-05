import React from 'react';

export default function PopupWithForm({ name, title, buttonContent, children, isOpen, setOpen, onClose }) {
  return (
    <section className={isOpen ? `popup popup_type_${name} popup_opened` : `popup popup_type_${name}`} onClick={() => setOpen(false)}>
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={`popup__close popup__close_type_${name}`} type="button" aria-label="закрыть"></button>
        <h3 className="popup__title">{`${title}`}</h3>
        <form className={`popup__form popup__form_type_${name}`} name={`${name}`}>
          {children}
          <button onClick={onClose} className={`popup__submit popup__submit_type_${name}`} type="button">
            {buttonContent}
          </button>
        </form>
      </div>
    </section>
  );
}
