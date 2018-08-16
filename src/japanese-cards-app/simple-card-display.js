import { html, LitElement } from '@polymer/lit-element';

import { SimpleCard } from './simple-card.js';

export default class SimpleCardDisplay extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      dataElement: String,
    };
  };

  _render() {
    return html`
      <style>
        .card-container{
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>
      <div class="card-container">
        <simple-card dataElement="${this.dataElement}"></simple-card>
      </div>
    `
  }

  _firstRendered() {
    console.log(this.dataElement);
   }
}

customElements.define("simple-card-display", SimpleCardDisplay);