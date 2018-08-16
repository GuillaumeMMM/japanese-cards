import {html, LitElement} from '@polymer/lit-element';

import { SimpleCardDisplay } from './simple-card-display.js';
import { CardsCollection } from './cards-collection.js';

import '../../node_modules/@ibm/plex/scss/ibm-plex.scss';

class JapaneseCardsApp extends LitElement {
  constructor() {
    super();
    this.dataElement = [
      {front: 'か', back: 'NA'}, 
      {front: 'あ', back: 'A'}, 
      {front: 'さ', back: 'SA'}, 
      {front: 'た', back: 'TA'}, 
    ];
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
        <simple-card-display dataElement = "${this.dataElement[0]}"></simple-card-display>
        <!-- <flip-test></flip-test> -->
        <!-- <cards-collection></cards-collection> -->
      </div>
    `
  }

  _firstRendered() {}
}

customElements.define("japanese-cards-app", JapaneseCardsApp);