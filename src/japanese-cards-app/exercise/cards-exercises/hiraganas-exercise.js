import { html, LitElement } from '@polymer/lit-element';
import '@polymer/paper-button';
import * as data from '../../data/data.js';
import { SimpleCard } from "../../card/simple-card.js";
import '@polymer/iron-icons/av-icons';

export class HiraganasExercise extends LitElement {
  constructor() {
    super();
    this.cards = [
      {front:'front', back:'back'}
    ];
    this.currentIndex = 0;
    this.exercise = this.getExercises(data);
    this.data = this.exercise.filter((ex) => {
        return ex['name'] === 'Hiraganas';
    })[0];

    let tags = [];
    if (localStorage.getItem('hiragana-tags')) {
       tags = JSON.parse(localStorage.getItem('hiragana-tags'));
    } else {
      tags = ['hiragana']
    }
    this.data['cards'] = this.getTagData(tags, data.cards);
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
        #randomize{
          font-size: 1.5vw;
          position: absolute;
          left:0;
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
          #previous, #next, #randomize{
            display: none;
          }

          .buttons-smallscreen{
            width: 100%;
          }

          #previous-smallscreen, #next-smallscreen, #randomize-smallscreen{
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
        <paper-button raised on-click="${(e) => this.randomize(e)}" id="randomize"><iron-icon icon="av:shuffle"></iron-icon></paper-button>
      </div>
      <div class="global-content">
        <div class="content">
          <paper-button raised id="previous" class="visible" on-click="${(e) => this.previousCard(e)}">Previous</paper-button>
          <div class="cards">
            <a href="#"><simple-card dataElement="${this.cards[this.currentIndex]}" index="${this.currentIndex + 1}" exerciseLength="${this.data.cards.length}"></simple-card></a>
          </div>
          <paper-button raised id="next" class="visible" on-click="${(e) => this.nextCard(e)}">Next</paper-button>
          <div class="buttons-smallscreen">
            <paper-button raised id="next-smallscreen" class="hidden" on-click="${(e) => this.nextCard(e)}">Next</paper-button>
            <paper-button raised id="previous-smallscreen" class="hidden" on-click="${(e) => this.previousCard(e)}">Previous</paper-button>
            <paper-button raised on-click="${(e) => this.randomize(e)}" class="hidden" id="randomize-smallscreen">Randomize</paper-button>
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
    const componentCards = [];
    cardsIds.forEach((id) => {
      const cardToAdd = dataCards.filter((card) => {
        return (id === card['id']);
      })[0];
      componentCards.push(cardToAdd)
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

  getTagData(tags, dataTmp) {
    let tagData = [];
    for (let i = 0; i < Object.keys(dataTmp).length; i++) {
      if (dataTmp[i]['tags'].indexOf('hiragana') !== -1) {
        let tagged = true;
        dataTmp[i]['tags'].forEach((dataTag) => {
          if (dataTag !== 'hiragana' && tags.indexOf(dataTag) === -1) {
            tagged = false;
          }
        });
        if (tagged || tags.length === 0) {
          tagData.push(dataTmp[i]['id']);
        }
      }
    }
    return tagData;
  }

  randomize(event) {
    const currentCards = JSON.parse(JSON.stringify(this.data.cards));
    const newCards = [];

    while (currentCards.length > 0) {
      var randIndex = Math.round(Math.random() * (currentCards.length - 1));
      newCards.push(currentCards[randIndex]);
      currentCards.splice(randIndex, 1);
    }
    this.data.cards = newCards;
    this.cards = this.getCardsFromIds(this.data);
    this.currentIndex = 0;
    this.requestRender();
  }
}

customElements.define("hiraganas-exercise", HiraganasExercise);