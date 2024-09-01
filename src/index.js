import React from 'react';
import { createRoot } from 'react-dom/client'; // Импортируем createRoot
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store'; // Импортируйте ваше хранилище и персистор
import App from './App';

const container = document.getElementById('root'); // Получаем элемент с id 'root'
const root = createRoot(container); // Создаем корень 

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);