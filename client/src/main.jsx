import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , createRoutesFromElements , route, routeProvider } from 'react-bootstrap/esm/ThemeProvider.js';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
