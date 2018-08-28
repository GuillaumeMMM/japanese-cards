import { html, LitElement } from '@polymer/lit-element';
import { Navbar } from './navbar.js';

export class Home extends LitElement {
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
        .content{
            height: 100%;
        }
        .title{
            font-size: 5.5vw;
            padding: 0 40px 20px 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }

        /* #home-image{
            width: 20%;
        } */
      </style>
      <navbar-element text="home"></navbar-element>
      <div class="content">
        <div class="title">
            Japanese Cards
        </div>
        <!-- <img id="home-image" src="src/img/japan.png" alt="Fuji Mount"> -->
      </div>
    `
  }
}

customElements.define("home-element", Home);