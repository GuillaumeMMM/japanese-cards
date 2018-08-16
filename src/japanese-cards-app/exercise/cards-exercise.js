import { html, LitElement } from '@polymer/lit-element';

export default class CardsExercise extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      text: String
    };
  };

  _render() {
    return html`
      <style>

      </style>
      Cards Exercise Page
    `
  }

  _firstRendered() { 
    console.log('rendered');
  }
}

customElements.define("cards-exercise", CardsExercise);