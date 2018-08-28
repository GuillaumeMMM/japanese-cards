import { html, LitElement } from '@polymer/lit-element';
import '@polymer/paper-card';
import '@polymer/iron-icons/iron-icons';
import '@polymer/iron-icons/communication-icons';
import '@polymer/paper-button';

export class SmallCard extends LitElement {
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
         paper-card{
             width: 100%;
         } 

        .japanese-character{
          font-size: 7em;
          padding: 20px;
          font-weight: 100;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-content{
          height: 90%;
          padding: 0;
        }
      </style>
    <paper-card>
      <div class="card-content">
        <div class="japanese-character">${this.text}</div>
      </div>
    </paper-card>
    `
  }

  _firstRendered() { }
}

customElements.define("small-card", SmallCard);