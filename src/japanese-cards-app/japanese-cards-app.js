import {html, LitElement} from '@polymer/lit-element/lit-element.js';

import { SimpleCard } from './simple-card.js';

import '../../node_modules/@ibm/plex/scss/ibm-plex.scss';

class JapaneseCardsApp extends LitElement {
  constructor() {
    super();
    this.characters = ['か', 'あ', 'さ', 'た'];
  }
  
  _render() {
    return html`
      <style>
        *{
          font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
        }
        simple-card{
          width: 30%;
          height: 60%;
        }
        .main-page{
          height: 100%;
          display: flex;
          flex-wrap: wrap;
        }
      </style>
      <div class="main-page">
        <simple-card text="${this.characters[0]}"></simple-card>
        <simple-card text="${this.characters[1]}"></simple-card>
        <simple-card text="${this.characters[2]}"></simple-card>
        <simple-card text="${this.characters[3]}"></simple-card>
      </div>
    `
  }

  _firstRendered() {}
}

customElements.define("japanese-cards-app", JapaneseCardsApp);