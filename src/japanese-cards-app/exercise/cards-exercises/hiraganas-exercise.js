import { html, LitElement } from '@polymer/lit-element';
import '@polymer/paper-button';
import * as data from '../../data/data.js';

export default class HiraganasExercise extends LitElement {
  constructor() {
    super();
    this.cards = [
      {front:'front', back:'back'}
    ];
    this.currentIndex = 0;
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

        @media screen and (max-width: 700px) {
          #previous, #next{
            display: none;
          }

          #previous-smallscreen, #next-smallscreen{
            display: flex;
            flex-direction: row;
          }
          .content{
            flex-direction: column;
          }
          /* .content{
            display: block;
          }
          #previous, #next{
            position: relative;
            bottom: 0;
          } */
        }
      </style>
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
    // this.shadowRoot.getElementById('previous').setAttribute("disabled", "false");
    // this.shadowRoot.getElementById('next').setAttribute("disabled", "false");
    // if (this.cards.length < 2) {
    //   this.shadowRoot.getElementById('previous').setAttribute("disabled", "true");
    //   this.shadowRoot.getElementById('next').setAttribute("disabled", "true");
    // }
    // if (this.currentIndex === 0) {
    //   this.shadowRoot.getElementById('previous').setAttribute("disabled", "true");
    // } else {
    //   this.shadowRoot.getElementById('previous').setAttribute("disabled", "none");
    // }
    // if (this.currentIndex === this.cards.length - 1) {
    //   this.shadowRoot.getElementById('next').setAttribute("disabled", "true");
    // }
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
}

customElements.define("hiraganas-exercise", HiraganasExercise);