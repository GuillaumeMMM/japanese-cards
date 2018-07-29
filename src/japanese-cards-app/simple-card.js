import { html, LitElement } from '@polymer/lit-element/lit-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-icons/communication-icons.js';
import '@polymer/paper-button/paper-button.js';

export default class SimpleCard extends LitElement {
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
        .japanese-character{
          font-size: 18em;
          font-weight: 300;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-content{
          height: 90%;
          padding: 0;
        }
        .card-actions{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
      </style>
    <paper-card>
      <div class="card-content">
        <div class="japanese-character">${this.text}</div>
      </div>
      <div class="card-footer">
        <div class="card-actions">
            <paper-button>Action 1</paper-button>
            <paper-button>Action 2</paper-button>
            <paper-button>Action 3</paper-button>
        </div>
      </div>
    </paper-card>
    `
  }

  _firstRendered() { }
}

customElements.define("simple-card", SimpleCard);