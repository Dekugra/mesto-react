import React from 'react';

function Input({ name, placeholder, maxlength }) {
  return (
    <>
      <input
        id={`${name}`}
        type="text"
        className={`popup__input popup__input_type_${name}`}
        name={`${name}`}
        placeholder={`${placeholder}`}
        defaultValue=""
        minLength="2"
        maxLength={`${maxlength}`}
        required
      />
      <span id={`error-${name}`} className={`error-massage error-massage_visible error-massage_type_${name}`}></span>
    </>
  );
}

export default Input;
