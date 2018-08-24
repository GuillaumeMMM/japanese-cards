import { html, LitElement } from '@polymer/lit-element';

import '@polymer/paper-button';
import * as data from '../../data/data.js';
import { SimpleCard } from "../../card/simple-card.js";

export default class KatakanasExercise extends LitElement {
  constructor() {
    super();
    this.cards = [
      {front:'front', back:'back'}
    ];
    this.currentIndex = 0;
    this.exercise = this.getExercises(data);
    this.data = this.exercise.filter((ex) => {
        return ex['name'] === 'Katakanas';
    })[0];
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

        .title{
          font-size: 5.5vw;
          padding: 20px 40px 20px 40px;
          display: flex;
          justify-content: center;
        }
        .cards{
          height: 100%;
          display: flex;
          justify-content: center;
        }
        .global-content{
          height: 80%;
          display: flex;
          justify-content: center;
        }
        .content{
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        paper-button{
          background-color: white;
          margin: 10px 50px;
          text-align: center;
        }
        .cards a {
          color: black;
        }
        .visible{
          display: block;
        }
        .hidden{
          display:none;
        }
        .disabled{
          background-color: lightgray;
          color: #333;
          cursor: not-allowed;
        }

        @media screen and (max-width: 700px) {
          #previous, #next{
            display: none;
          }

          .buttons-smallscreen{
            width: 100%;
          }

          #previous-smallscreen, #next-smallscreen{
            display: flex;
            flex-direction: row;
          }
          .content{
            flex-direction: column;
          }
        }
      </style>
      <navbar-element text="exercises"></navbar-element>
      <div class="title">
        ${this.data.name}
      </div>
      <div class="global-content">
        <div class="content">
          <paper-button raised id="previous" class="visible" on-click="${(e) => this.previousCard(e)}">Previous</paper-button>
          <div class="cards">
            <a href="#"><simple-card dataElement="${this.cards[this.currentIndex]}"></simple-card></a>
          </div>
          <paper-button raised id="next" class="visible" on-click="${(e) => this.nextCard(e)}">Next</paper-button>
          <div class="buttons-smallscreen">
            <paper-button raised id="next-smallscreen" class="hidden" on-click="${(e) => this.nextCard(e)}">Next</paper-button>
            <paper-button raised id="previous-smallscreen" class="hidden" on-click="${(e) => this.previousCard(e)}">Previous</paper-button>
          </div>
        </div>
      </div>
    `
  }

  _firstRendered() { 
    this.cards = this.getCardsFromIds(this.data);
    this.requestRender();
  }

  _didRender() {
    if (this.currentIndex === 0) {
      this.shadowRoot.getElementById('previous').classList.add('disabled');
      this.shadowRoot.getElementById('previous-smallscreen').classList.add('disabled');
    } else {
      this.shadowRoot.getElementById('previous').classList.remove('disabled');
      this.shadowRoot.getElementById('previous-smallscreen').classList.remove('disabled');
    }
    if (this.currentIndex === this.cards.length - 1) {
      this.shadowRoot.getElementById('next').classList.add('disabled');
      this.shadowRoot.getElementById('next-smallscreen').classList.add('disabled');
    } else {
      this.shadowRoot.getElementById('next').classList.remove('disabled');
      this.shadowRoot.getElementById('next-smallscreen').classList.remove('disabled');
    }
  }

  getCardsFromIds(componentData) {
    const cardsIds = componentData['cards'];
    const dataCards = data['cards'];
    const componentCards = dataCards.filter((card) => {
      let inExercise = false;
      cardsIds.forEach((cardId) => {
        if (cardId === card['id']) {
          inExercise = true;
        }
      });
      return inExercise;
    });
    return componentCards;
  }

  previousCard(e) {
    (this.currentIndex === 0) ? this.currentIndex = 0 : this.currentIndex--;
    this.requestRender();
  }
  nextCard(e) {
    (this.currentIndex === this.cards.length - 1) ? this.currentIndex = this.cards.length - 1 : this.currentIndex++;
    this.requestRender();
  }

  getExercises(dataTmp) {
    let exercises = [];
    for (let i = 0; i < Object.keys(dataTmp).length; i++) {
        if (dataTmp[Object.keys(dataTmp)[i]]['type'] === 'exercise') {
            exercises.unshift(dataTmp[Object.keys(dataTmp)[i]]);
        }
    }
    return exercises;
  }
}

customElements.define("katakanas-exercise", KatakanasExercise);