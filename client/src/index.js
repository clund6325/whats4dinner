import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initMiddleware } from 'devise-axios';
import AuthProvider from './providers/AuthProvider';
import Meal_planProvider from './providers/Meal_planProvider'

initMiddleware()

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Meal_planProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Meal_planProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);