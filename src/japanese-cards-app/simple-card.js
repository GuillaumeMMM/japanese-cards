import { html, LitElement } from '@polymer/lit-element';
import '@polymer/paper-card';
import '@polymer/iron-icons/iron-icons';
import '@polymer/iron-icons/communication-icons';
import '@polymer/paper-button';

export default class SimpleCard extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      dataElement: Object,
    };
  };

  _render() {
    return html`
      <style>
        .japanese-character{
          font-size: 10vw;
          font-weight: 300;
        }

        paper-card{
          height: 100%;
          padding: 20px;
          width: 100%;
        }

        .card-content{
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* entire container, keeps perspective */
        .flip-container {
          perspective: 1000px;
        }
        /* flip the pane when hovered */
        .flip-container:hover .flipper, .flip-container.hover .flipper {
          transform: rotateY(180deg);
        }

        .flip-container, .front, .back {
          width: 320px;
          height: 480px;
        }

        /* flip speed goes here */
        .flipper {
          transition: 0.6s;
          transform-style: preserve-3d;
          position: relative;
        }

        /* hide back of pane during swap */
        .front, .back {
          backface-visibility: hidden;
          position: absolute;
          top: 0;
          left: 0;
        }

        /* front pane, placed above back */
        .front {
          z-index: 2;
          /* for firefox 31 */
          transform: rotateY(0deg);
        }

        /* back, initially hidden pane */
        .back {
          transform: rotateY(180deg);
        }
      </style>
      <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
        <div class="flipper">
          <div class="front">
            <paper-card>
              <div class="card-content">
                <div class="japanese-character">${this.dataElement.front}</div>
              </div>
            </paper-card>
          </div>
          <div class="back">
            <paper-card>
              <div class="card-content">
                <div class="japanese-character">${this.dataElement.back}</div>
              </div>
            </paper-card>
          </div>
        </div>
      </div>
    `
  }

  _firstRendered() {
  }
}

customElements.define("simple-card", SimpleCard);