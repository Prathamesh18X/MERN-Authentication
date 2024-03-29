import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './redux/store.js';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <React.StrictMode>
      <ToastContainer/>
        <App/>
    </React.StrictMode>
  </Provider>
)
