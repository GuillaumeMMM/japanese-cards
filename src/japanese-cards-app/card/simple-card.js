import { html, LitElement } from '@polymer/lit-element';
import '@polymer/paper-card';
import '@polymer/iron-icons/iron-icons';
import '@polymer/iron-icons/communication-icons';
import '@polymer/paper-button';

import * as data from '../data/data.js';
import { ColorsBar } from "./colors-bar.js";

export default class SimpleCard extends LitElement {
  constructor() {
    super();
    this.difficulties = data.difficulties;
  }

  static get properties() {
    return {
      dataElement: Object,
      index: Number,
      exerciseLength: Number,
    };
  };

  _render() {
    return html`
      <style>
        .content{
          font-size: 10vw;
          font-weight: 300;
        }

        .colors{
          height: 10%;
          width: 100%;
          background-color: grey;
        }

        paper-card{
          height: 100%;
          width: 100%;
        }

        .card-content{
          width: 100%;
          height: 92%;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 20px 0 20px;
          box-sizing: border-box;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
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

        .card-header{
          position: absolute;
          top: 10px;
          left: 10px;
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
              <div class="card-header">${this.index} / ${this.exerciseLength}</div>
                <div class="content">${this.dataElement.front}</div>
              </div>
              <colors-bar difficulties="${this.difficulties}" mainDifficulty="${this.getDifficulty()}"></colors-bar>
            </paper-card>
          </div>
          <div class="back">
            <paper-card>
              <div class="card-content">
              <div class="card-header">${this.index} / ${this.exerciseLength}</div>
                <div class="content">${this.dataElement.back}</div>
              </div>
              <colors-bar difficulties="${this.difficulties}" mainDifficulty="${this.getDifficulty()}"></colors-bar>
            </paper-card>
          </div>
        </div>
      </div>
    `
  }

  _firstRendered() {
  }

  getDifficulty() {
    return this.dataElement.difficulty;
  }

}

customElements.define("simple-card", SimpleCard);