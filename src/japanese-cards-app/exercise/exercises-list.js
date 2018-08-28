import { html, LitElement } from '@polymer/lit-element';

import '@polymer/paper-button';
import * as data from '../data/data.js';
import { HiraganasExercise } from './cards-exercises/hiraganas-exercise.js';
import { KatakanasExercise } from './cards-exercises/katakanas-exercise.js';
import { Navbar } from '../meta/navbar.js';

export class ExercisesList extends LitElement {
  constructor() {
    super();
    this.hiraganaTags = [];
    this.katakanaTags = [];
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
            /* font-weight: 200; */
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
        #hiraganaTags, #katakanaTags{
            position: absolute;
            right: 10px;
            bottom: 10px;
            font-size: 1.5vw;
            background-color: white;
        }
      </style>
        <navbar-element text="exercises"></navbar-element>
        <div class="summary" id="summary">
            <div class='title'>
                Exercises List 
            </div>
            <div class="content">
                <div class="summary-element">
                        <paper-card>
                            <a href="/hiraganas" id="summary-hiragana">
                            <div class='summary-title'>
                                Hiraganas
                            </div>
                            <div class='summary-preview'>
                                あ か さ た な は ま や ら わ い き し ち に ひ み り う
                            </div>
                            </a>
                            <div id="hiraganaTags">
                                <paper-button id="selectButtonGojuonHira" raised on-click="${(e) => this.setHiraganaTags('gojūon')}">Gojūon</paper-button>
                                <paper-button id="selectButtonDakutenHira" raised on-click="${(e) => this.setHiraganaTags('(han)dakuten')}">(han) Dakuten</paper-button>
                                <paper-button id="selectButtonYoonHira" raised on-click="${(e) => this.setHiraganaTags('yōon')}">yōon</paper-button>
                            </div>
                        </paper-card>
                </div>
                <div class="summary-element"> 
                    <paper-card>
                        <a href="/katakanas" id="summary-katakanas">
                                <div class='summary-title'>
                                    Katakanas
                                </div>
                                <div class='summary-preview'>
                                    カ サ タ ナ ハ マ ヤ ラ ワ キ シ チ ニ ヒ
                                </div>
                        </a>
                        <div id="katakanaTags">
                                <paper-button id="selectButtonGojuonKata" raised on-click="${(e) => this.setKatakanaTags('gojūon')}">Gojūon</paper-button>
                                <paper-button id="selectButtonDakutenKata" raised on-click="${(e) => this.setKatakanaTags('(han)dakuten')}">(han) Dakuten</paper-button>
                                <paper-button id="selectButtonYoonKata" raised on-click="${(e) => this.setKatakanaTags('yōon')}">yōon</paper-button>
                        </div>
                    </paper-card>
                </div>
            </div>
        </div>
    `
  }

  _firstRendered() {
      localStorage.setItem('hiragana-tags', JSON.stringify(['gojūon', '(han)dakuten', 'yōon']));
      this.shadowRoot.getElementById('selectButtonGojuonHira').setAttribute('style', 'background-color: white');
      this.shadowRoot.getElementById('selectButtonDakutenHira').setAttribute('style', 'background-color: white');
      this.shadowRoot.getElementById('selectButtonYoonHira').setAttribute('style', 'background-color: white');

      localStorage.setItem('katakana-tags', JSON.stringify(['gojūon', '(han)dakuten', 'yōon']));
      this.shadowRoot.getElementById('selectButtonGojuonKata').setAttribute('style', 'background-color: white');
      this.shadowRoot.getElementById('selectButtonDakutenKata').setAttribute('style', 'background-color: white');
      this.shadowRoot.getElementById('selectButtonYoonKata').setAttribute('style', 'background-color: white');
  }

  setHiraganaTags(tag) {
      var tags = JSON.parse(localStorage.getItem('hiragana-tags'));
      if (tags.indexOf(tag) === -1) {
            tags.push(tag);
            localStorage.setItem('hiragana-tags', JSON.stringify(tags));
            switch (tag) {
            case 'gojūon':
                this.shadowRoot.getElementById('selectButtonGojuonHira').setAttribute('style', 'background-color: white');
                break;
            case '(han)dakuten':
                this.shadowRoot.getElementById('selectButtonDakutenHira').setAttribute('style', 'background-color: white');
                break;
            case 'yōon':
                this.shadowRoot.getElementById('selectButtonYoonHira').setAttribute('style', 'background-color: white');
                break;
            }
        } else {
            tags.splice(tags.indexOf(tag), 1);
            localStorage.setItem('hiragana-tags', JSON.stringify(tags));
            switch (tag) {
                case 'gojūon':
                    this.shadowRoot.getElementById('selectButtonGojuonHira').setAttribute('style', 'background-color: lightgrey');
                    break;
                case '(han)dakuten':
                    this.shadowRoot.getElementById('selectButtonDakutenHira').setAttribute('style', 'background-color: lightgrey');
                    break;
                case 'yōon':
                    this.shadowRoot.getElementById('selectButtonYoonHira').setAttribute('style', 'background-color: lightgrey');
                    break;
            }
        }
  }

  setKatakanaTags(tag) {
    var tags = JSON.parse(localStorage.getItem('katakana-tags'));
    if (tags.indexOf(tag) === -1) {
        tags.push(tag);
        localStorage.setItem('katakana-tags', JSON.stringify(tags));
        switch (tag) {
            case 'gojūon':
                this.shadowRoot.getElementById('selectButtonGojuonKata').setAttribute('style', 'background-color: white');
                break;
            case '(han)dakuten':
                this.shadowRoot.getElementById('selectButtonDakutenKata').setAttribute('style', 'background-color: white');
                break;
            case 'yōon':
                this.shadowRoot.getElementById('selectButtonYoonKata').setAttribute('style', 'background-color: white');
                break;
            }
    } else {
      tags.splice(tags.indexOf(tag), 1);
      localStorage.setItem('katakana-tags', JSON.stringify(tags));
      switch (tag) {
        case 'gojūon':
            this.shadowRoot.getElementById('selectButtonGojuonKata').setAttribute('style', 'background-color: lightgrey');
            break;
        case '(han)dakuten':
            this.shadowRoot.getElementById('selectButtonDakutenKata').setAttribute('style', 'background-color: lightgrey');
            break;
        case 'yōon':
            this.shadowRoot.getElementById('selectButtonYoonKata').setAttribute('style', 'background-color: lightgrey');
            break;
    }
    }
}
}

customElements.define("exercises-list", ExercisesList);