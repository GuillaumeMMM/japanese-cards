import { html, LitElement } from '@polymer/lit-element';

export default class KatakanasExercise extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      urlName: String,
      data: String,
    };
  };

  _render() {
    return html`
      <style>

      </style>
      this.data.name Exercise Page
    `
  }

  _firstRendered() { 
    console.log(this.data);
  }
}

customElements.define("katakanas-exercise", KatakanasExercise);