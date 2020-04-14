import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './forms.css'
import Weapons from './components/Weapons'
import Armor from './components/Armor'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Weapons />
    <Armor/>
  </React.StrictMode>,
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
