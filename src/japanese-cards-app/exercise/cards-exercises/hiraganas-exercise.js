import { html, LitElement } from '@polymer/lit-element';
import '@polymer/paper-button';

export default class HiraganasExercise extends LitElement {
  constructor() {
    super();
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
          padding: 0 40px 20px 40px;
          display: flex;
          justify-content: center;
        }
        .cards{
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
          margin: 0 50px;
        }

      </style>
      <div class="title">
        ${this.data.name}
      </div>
      <div class="global-content">
        <div class="content">
          <paper-button raised id="previous">Previous</paper-button>
          <div class="cards">
            <simple-card dataElement="${{'front': 'a', 'back': 'b'}}"></simple-card>
          </div>
          <paper-button raised id="next">Next</paper-button>
        </div>
      </div>
    `
  }

  _firstRendered() { 
  }
}

customElements.define("hiraganas-exercise", HiraganasExercise);