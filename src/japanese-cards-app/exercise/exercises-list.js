import { html, LitElement } from '@polymer/lit-element';

import * as data from '../data/data.js';

export default class ExercisesList extends LitElement {
  constructor() {
    super();
    this.exercises = this.getExercises(data);
  }

  static get properties() {
    return {
      text: String
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
        
        ul{
          margin: 0;
          padding: 13px 0;
          list-style: none;
          display: flex;
          justify-content: center;
        }
        ul li {
          margin-left: 20px;
        }
        ul li a {
          text-decoration: none;
          color: #333;
        }
        ul li a:hover{
          border-bottom: 1px solid currentColor;
        }
      </style>

    <div class='title'>
        Exercises List 
    </div>
    <ul id="exercises"></ul>
    `
  }

  _firstRendered() { 
    const ancre = this.shadowRoot.getElementById('exercises');
    for (let i = 0; i < Object.keys(this.exercises).length; i++) {
        const li = document.createElement("li");
        const a = li.appendChild(document.createElement("a"));
        a.setAttribute('href', '#');
        a.appendChild(document.createTextNode(this.exercises[Object.keys(this.exercises)[i]]['name']));
        ancre.appendChild(li);
    }
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