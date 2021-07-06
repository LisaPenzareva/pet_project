import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import './index.css';
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
    <div> Privet </div>
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
