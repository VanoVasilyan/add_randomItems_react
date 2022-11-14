import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';
import { AppProvider } from './context';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppProvider>
      <App />
    </AppProvider>,
  </Provider>
);
