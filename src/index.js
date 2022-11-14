import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
import store, {persistor} from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import GlobalContext from './Redux/Global/GlobalContext'
import App from "./App";

import './index.css'
ReactDOM.render(

  <React.StrictMode>
 
    <GlobalContext>

    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    
    <App />
    
    </PersistGate> 
    </Provider>
    </GlobalContext>
   
   
  </React.StrictMode>,
  document.getElementById("root")
);