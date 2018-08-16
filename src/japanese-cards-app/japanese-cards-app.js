import {html, LitElement} from '@polymer/lit-element';

import { SimpleCardDisplay } from './card/simple-card-display.js';
import { CardsCollection } from './collection/cards-collection.js';
import { Navbar } from './meta/navbar.js';
import { Home } from './meta/home.js';
import { ExercisesList } from './exercise/exercises-list.js';
import { CollectionsList } from './collection/collections-list.js';

import '../../node_modules/@ibm/plex/scss/ibm-plex.scss';

import {Router} from '@vaadin/router';

class JapaneseCardsApp extends LitElement {
  constructor() {
    super();
  }
  
  _render() {
    return html`
      <style>
        *{
          font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
        }
        .main-page{
          height: 100%;
        }
      </style>
      <div class="main-page">
        <navbar-element></navbar-element>
        <div id="outlet"></div>
      </div>
    `
  }

  _firstRendered() {
    const outlet = this.shadowRoot.getElementById('outlet');
    const router = new Router(outlet);
    router.setRoutes([
      {path: '/', component: 'home-element'},
      {path: '/exercises', component: 'exercises-list'},
      {path: '/collections', component: 'collections-list'},
    ]);
  }
}

customElements.define("japanese-cards-app", JapaneseCardsApp);