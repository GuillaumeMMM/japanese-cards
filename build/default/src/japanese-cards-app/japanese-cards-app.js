import { html, LitElement } from "../../node_modules/@polymer/lit-element/lit-element.js";
import { SimpleCardDisplay } from './card/simple-card-display.js';
import { CardsCollection } from './collection/cards-collection.js';
import { Navbar } from './meta/navbar.js';
import { Home } from './meta/home.js';
import { ExercisesList } from './exercise/exercises-list.js';
import { CollectionsList } from './collection/collections-list.js';
import { Router } from "../../node_modules/@vaadin/router/dist/vaadin-router.js";

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
        #outlet{
          height: 80%;
        }
        @media screen and (max-width: 700px) {
          #outlet{
            height: 100%;
          }
        }
      </style>
      <div class="main-page">
        <!-- <navbar-element></navbar-element> -->
        <div id="outlet"></div>
      </div>
    `;
  }

  _firstRendered() {
    const outlet = this.shadowRoot.getElementById('outlet');
    const router = new Router(outlet);
    router.setRoutes([{
      path: '/',
      component: 'home-element'
    }, {
      path: '/exercises',
      component: 'exercises-list'
    }, {
      path: '/collections',
      component: 'collections-list'
    }, {
      path: '/hiraganas',
      component: 'hiraganas-exercise'
    }, {
      path: '/katakanas',
      component: 'katakanas-exercise'
    }]);
  }

}

customElements.define("japanese-cards-app", JapaneseCardsApp);