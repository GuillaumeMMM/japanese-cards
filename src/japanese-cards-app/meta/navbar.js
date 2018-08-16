import { html, LitElement } from '@polymer/lit-element';

import * as data from '../data/data.js';

export default class Navbar extends LitElement {
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
        .navbar{
          height: 6%;       
        }
        .navbar ul{
          margin: 0;
          padding: 13px 0;
          list-style: none;
          display: flex;
          justify-content: center;
        }
        .navbar ul li {
          margin-left: 20px;
          display: inline;
        }
        .navbar ul li a {
          text-decoration: none;
          color: #333;
        }
        .navbar ul li a:hover{
          border-bottom: 1px solid currentColor;
        }

        .navbar ul li a:focus {
          border-bottom: 1px solid currentColor;
        }

      </style>
      <div class="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/collections">Collections</a></li>
          <li><a href="/exercises">Exercises</a></li>
        </ul>
      </div>
    `
  }

  _firstRendered() {
   }
}

customElements.define("navbar-element", Navbar);