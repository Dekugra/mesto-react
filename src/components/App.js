import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Input from './Input';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

export default function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({
    name: '',
    link: ''
  });
  const [isImageShowOpen, setImageShowOpen] = useState(false);

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  };

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const handleClick = (card) => {
    setSelectedCard(card);
    setImageShowOpen(true);
  };

  return (
    <div className="page">
      <Header />
      <Main onClick={handleClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />

      <PopupWithForm isOpen={isEditProfilePopupOpen} setOpen={setEditProfilePopupOpen} onClose={closeAllPopups} name="edit" title="Редактировать профиль" buttonContent="Сохранить">
        <Input name="username" placeholder="Введите имя" maxlength="40" />
        <Input name="about" placeholder="Кратко о себе" maxlength="200" />
      </PopupWithForm>
      <PopupWithForm isOpen={isAddPlacePopupOpen} setOpen={setAddPlacePopupOpen} onClose={closeAllPopups} name="addcard" title="Новое место" buttonContent="Создать">
        <Input name="cardname" placeholder="Название" maxlength="30" />
        <Input name="source" placeholder="Ссылка на картинку" maxlength="200" />
      </PopupWithForm>
      <PopupWithForm isOpen={isEditAvatarPopupOpen} setOpen={setEditAvatarPopupOpen} onClose={closeAllPopups} name="editavatar" title="Обновить аватар" buttonContent="Сохранить">
        <Input name="userfoto" placeholder="Ссылка на фото пользователя" maxlength="200" />
      </PopupWithForm>
      <ImagePopup source={selectedCard.link} title={selectedCard.name} card={selectedCard} isOpen={isImageShowOpen} setOpen={setImageShowOpen} onClose={() => setImageShowOpen(false)} />
    </div>
  );
}
