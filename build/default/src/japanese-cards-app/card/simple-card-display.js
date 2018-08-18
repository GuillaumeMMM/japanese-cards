import { html, LitElement } from "../../../node_modules/@polymer/lit-element/lit-element.js";
import { SimpleCard } from './simple-card.js';
import * as data from '../data/data.js';
export default class SimpleCardDisplay extends LitElement {
  constructor() {
    super();
    this.dataElement = data.data[0];
  }

  static get properties() {
    return {};
  }

  _render() {
    return html`
      <style>
        .card-container{
          width: 100%;
          height: 94%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>
      <div class="card-container">
        <simple-card dataElement="${this.dataElement}"></simple-card>
      </div>
    `;
  }

  _firstRendered() {}

}
customElements.define("simple-card-display", SimpleCardDisplay);