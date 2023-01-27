import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, ReactReduxContext, connect } from 'react-redux';
import configureStore from './Redux/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore();


root.render(
  // <React.StrictMode>
   <Provider store={store} >
      <App />
    </Provider>
  // {/* </React.StrictMode> */}
);

reportWebVitals();
