import { html, LitElement } from "../../../../node_modules/@polymer/lit-element/lit-element.js";
export default class KatakanasExercise extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      urlName: String,
      data: String
    };
  }

  _render() {
    return html`
      <style>

      </style>
      this.data.name Exercise Page
    `;
  }

  _firstRendered() {
    console.log(this.data);
  }

}
customElements.define("katakanas-exercise", KatakanasExercise);