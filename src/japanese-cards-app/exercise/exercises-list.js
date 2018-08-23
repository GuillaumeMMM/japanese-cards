import { html, LitElement } from '@polymer/lit-element';

import * as data from '../data/data.js';
import { HiraganasExercise } from './cards-exercises/hiraganas-exercise.js';
import { KatakanasExercise } from './cards-exercises/katakanas-exercise.js';
import { Navbar } from '../meta/navbar.js';

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
            font-size: 5.5vw;
            padding: 40px 40px 0 40px;
            display: flex;
            justify-content: center;
        }
        .summary-element{
            width: 70%;
            height: 15vh;
            margin: 4vh 0 4vh 15%;
            padding: 10px;
            overflow: hidden;
        }
        paper-card{
            width: 100%;
            height: 100%;
            background-color: #fafafa;
        }
        .invisible{
            display: none;
        }
        .visible{
            display: block;
        }
        .content{
            height: 80%; 
            width: 100%;
            margin-top: 7%;
        }
        .content a {
          text-decoration: none;
          color: #333;
        }
        .content a:active{
            color: Tomato;
        }
        .summary-title{
            padding: 5px 10px;
            font-weight: 200;
        }
        .summary-preview{
            margin-top:0;
            margin-left:10px;
            font-size: 8vh;
            color: #e4e4e4;
            font-weight: 200;
        }
        .detail{
            height: 100%
        }
        #hiraganas, #hatakanas{
            height: 100%
        }
      </style>
        <navbar-element text="exercises"></navbar-element>
        <div class="summary" id="summary">
            <div class='title'>
                Exercises List 
            </div>
            <div class="content">
                <div class="summary-element">
                    <a href="#" id="summary-hiragana" on-click="${(e) => this.hiraganaSelected(e)}">
                        <paper-card>
                            <div class='summary-title'>
                                Hiraganas
                            </div>
                            <div class='summary-preview'>
                                あ か さ た な は ま や ら わ い き し ち に ひ み り う
                            </div>
                        </paper-card>
                    </a>
                </div>
                <div class="summary-element"> 
                    <a href="#" id="summary-katakanas" on-click="${(e) => this.katakanaSelected(e)}">
                        <paper-card>
                            <div class='summary-title'>
                                Katakanas
                            </div>
                            <div class='summary-preview'>
                                カ サ タ ナ ハ マ ヤ ラ ワ キ シ チ ニ ヒ
                            </div>
                        </paper-card>
                    </a>
                </div>
            </div>
        </div>
        <div class="detail">
            <hiraganas-exercise id="hiraganas" class="invisible" data="${this.hiraganas}"></hiraganas-exercise>
            <katakanas-exercise id="katakanas"  class="invisible" data="${this.katakanas}"></katakanas-exercise>
        </div>
    `
  }

  _firstRendered() {
  }

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