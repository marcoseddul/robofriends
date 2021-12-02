import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import card from './card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots';
ReactDOM.render(
  <div>
    <card id={robots[0].id} name={robots[0].name} email={robots[0]}/>
    <card id={robots[1].id} name={robots[1].name} email={robots[1]}/>
    <card id={robots[2].id} name={robots[2].name} email={robots[2]}/>
    <card id={robots[3].id} name={robots[3].name} email={robots[3]}/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
