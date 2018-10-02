import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

document.addEventListener("DOMContentLoaded", function(event) {
    let about = document.getElementById('about')
    let projects = document.getElementById('projects')
    let contact = document.getElementById('contact')

    let orb = document.getElementById('orb-bg')

    about.addEventListener("onClick", function( event ) {
      orb.style = 'background-color: var(--red);'
    })

    projects.addEventListener("onClick", function( event ) {
      orb.style = 'background-color: yellow;'
    })

    contact.addEventListener("onClick", function( event ) {
      orb.style = 'background-color: var(--blue);'
  }
)
}
)

ReactDOM.render(
  (<BrowserRouter>
    <App />
   </BrowserRouter>), document.getElementById('root'));
// registerServiceWorker();
