import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import Aos from 'aos';
import 'aos/dist/aos.css';


Aos.init({
  duration: 1000, // Duration of the animation
  easing: 'ease-in-out', // Easing function for the animation
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


