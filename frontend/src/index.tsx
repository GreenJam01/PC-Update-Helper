import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { checkAuthAction, fetchHardwaresAction } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import browserHistory from './browser-history';
import HistoryRouter from './components/history-route/history-route';
import Menu from './components/menu/Menu';
import { BeatLoader } from 'react-spinners';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
store.dispatch(fetchHardwaresAction());
store.dispatch(checkAuthAction());
root.render(
  <React.StrictMode>
    <HistoryRouter history={browserHistory}>
      <Provider store={store}>
        <ToastContainer autoClose = {4000}/>
        <Menu/>
        <App />
      </Provider>
    </HistoryRouter>
  </React.StrictMode>
);
