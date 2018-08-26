import { html, LitElement } from '@polymer/lit-element';

import * as data from '../data/data.js';
import { HiraganasExercise } from './cards-exercises/hiraganas-exercise.js';
import { KatakanasExercise } from './cards-exercises/katakanas-exercise.js';
import { Navbar } from '../meta/navbar.js';

export default class ExercisesList extends LitElement {
  constructor() {
    super();
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
                    <a href="/hiraganas" id="summary-hiragana">
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
                    <a href="/katakanas" id="summary-katakanas">
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
    `
  }

  _firstRendered() {
      localStorage.setItem('hiragana-tags', JSON.stringify(['hiragana', '(han)dakuten']));
      localStorage.setItem('katakana-tags', 'katakana');
  }
}

customElements.define("exercises-list", ExercisesList);