import React from 'react';
import api from '../utils/Api';

export const CurrentUserContext = React.createContext();

React.useEffect(() => {
  api
    .getUserInfo()
    .then((res) => {
      setCurrentUser(res);
    })
    .catch((err) => console.log('Ошибка. Запрос не выполнен', err));
}, [currentUser]);
