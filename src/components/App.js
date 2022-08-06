import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Input from './Input';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    name: '',
    link: '',
  });
  const [isImageShowOpen, setImageShowOpen] = useState(false);

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setImageShowOpen(false)
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleImageClick = (card) => {
    setSelectedCard(card);
    setImageShowOpen(true);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onClick={handleImageClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        setOpen={setIsEditProfilePopupOpen}
        onClose={closeAllPopups}
        name="edit"
        title="Редактировать профиль"
        buttonContent="Сохранить"
      >
        <Input name="username" placeholder="Введите имя" maxlength="40" />
        <Input name="about" placeholder="Кратко о себе" maxlength="200" />
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        setOpen={setIsAddPlacePopupOpen}
        onClose={closeAllPopups}
        name="addcard"
        title="Новое место"
        buttonContent="Создать"
      >
        <Input name="cardname" placeholder="Название" maxlength="30" />
        <Input name="source" placeholder="Ссылка на картинку" maxlength="200" />
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        setOpen={setIsEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name="editavatar"
        title="Обновить аватар"
        buttonContent="Сохранить"
      >
        <Input name="userfoto" placeholder="Ссылка на фото пользователя" maxlength="200" />
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        isOpen={isImageShowOpen}
        setOpen={setImageShowOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}
