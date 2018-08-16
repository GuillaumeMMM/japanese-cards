import { html, LitElement } from '@polymer/lit-element';

import * as data from '../data/data.js';
import { HiraganasExercise } from './cards-exercises/hiraganas-exercise.js';
import { KatakanasExercise } from './cards-exercises/katakanas-exercise.js';

export default class ExercisesList extends LitElement {
  constructor() {
    super();
    this.exercise = this.getExercises(data);
    this.hiraganas = this.exercise.filter((ex) => {
        return ex['name'] === 'Hiraganas';
    })[0];
    this.katakanas = this.exercise.filter((ex) => {
        return ex['name'] === 'Katakanas';
    })[0];
  }

  static get properties() {
    return {
      text: String,
    };
  };

  _render() {
    return html`
      <style>
        .title{
            text-align: center;
            font-weight: 800;
            margin-top: 10%;
        }
        .invisible{
            display: none;
        }
        .visible{
            display: block;
        }
        .content{
          width: 100%;
        }
        .content{
          height: 6%;       
        }
        .content a {
          text-decoration: none;
          color: #333;
        }
        .content a:active{
            color: Tomato;
        }
        .content a:hover{
          border-bottom: 1px solid currentColor;
        }
      </style>

        <div class="summary" id="summary">
            <div class='title'>
                Exercises List 
            </div>
            <div class="content">
                <div class="summary-element"><a href="#" id="summary-hiragana" on-click="${(e) => this.hiraganaSelected(e)}">Cards Exercise Page : Hiraganas</a></div>
                <div class="summary-element"> <a href="#" id="summary-katakanas" on-click="${(e) => this.katakanaSelected(e)}">Cards Exercise Page : Katakanas</a></div>
            </div>
        </div>
        <div class="detail">
            <hiraganas-exercise id="hiraganas" class="invisible" data="${this.hiraganas}"></hiraganas-exercise>
            <katakanas-exercise id="katakanas"  class="invisible" data="${this.katakanas}"></katakanas-exercise>
        </div>
    `
  }

  _firstRendered() {}

  hiraganaSelected(e) {
    this.shadowRoot.getElementById('summary').classList.add("invisible");
    this.shadowRoot.getElementById('hiraganas').classList.add("visible");
  }
  katakanaSelected(e) {
    this.shadowRoot.getElementById('summary').classList.add("invisible");
    this.shadowRoot.getElementById('katakanas').classList.add("visible");
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

customElements.define("exercises-list", ExercisesList);