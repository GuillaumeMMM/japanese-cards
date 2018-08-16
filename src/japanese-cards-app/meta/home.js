import { html, LitElement } from '@polymer/lit-element';

export default class Home extends LitElement {
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
      Home page
    `
  }

  _firstRendered() { }
}

customElements.define("home-element", Home);