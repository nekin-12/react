import React from 'react';
import ReactDOM from 'react-dom/client';
import '././components/css/index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import {Dash} from './components/dash';
// import { Form } from './components/form';
// import SimpleInput from './components/exo/simpleInput';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Dash />
    {/* <SimpleInput /> */}
    {/* <Form /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
