import { html, LitElement } from "../../../node_modules/@polymer/lit-element/lit-element.js";
import "../../../node_modules/@polymer/paper-card/paper-card.js";
import "../../../node_modules/@polymer/iron-icons/iron-icons.js";
import "../../../node_modules/@polymer/iron-icons/communication-icons.js";
import "../../../node_modules/@polymer/paper-button/paper-button.js";
export default class SimpleCard extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      dataElement: Object
    };
  }

  _render() {
    return html`
      <style>
        .content{
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
          height: 100%;
        }
        /* flip the pane when hovered */
        .flip-container:hover .flipper, .flip-container.hover .flipper {
          transform: rotateY(180deg);
        }

        .flip-container, .front, .back {
          width: 320px;
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

        .flipper, .front, .back{
          height: 100%;
        }

        @media screen and (max-width: 700px) {
          .content{
            font-size: 30vw;
          }
        }
      </style>
      <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
        <div class="flipper">
          <div class="front">
            <paper-card>
              <div class="card-content">
                <div class="content">${this.dataElement.front}</div>
              </div>
            </paper-card>
          </div>
          <div class="back">
            <paper-card>
              <div class="card-content">
                <div class="content">${this.dataElement.back}</div>
              </div>
            </paper-card>
          </div>
        </div>
      </div>
    `;
  }

  _firstRendered() {}

}
customElements.define("simple-card", SimpleCard);