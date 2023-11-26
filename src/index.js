
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
// import {addPost, updateNewPostText, updateNewMessageText, addMessage, subscribe} from './redux/state';
import App from './App';
import {Provider} from "react-redux"


const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(

        <Provider store={store}>
          <App  dispatch={store.dispatch.bind(store)} store={store} />
        </Provider>
 
  );








// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();