import { html, LitElement } from '@polymer/lit-element';

export class ColorsBar extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      difficulties: Object,
      mainDifficulty: Number,
    };
  };

  _render() {
    return html`
      <style>
        colors{
          height: 8%;
          width: 100%;
        }
        .box{
          height: 100%;
          width: 10%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }
        #container{
          height: 8%;
          width: 100%;
        }
      </style>
      <div id="container"></div>
    `
  }

  _firstRendered() {
    for (let i = 0; i < this.difficulties.length; i++) {
      const element = this.shadowRoot.getElementById('container');
      const className = this.difficulties[i].index;
      const colorElt = element.appendChild(document.createElement('div'));
      colorElt.classList.add('box-' + className);
      colorElt.classList.add('box');
      colorElt.setAttribute("style", "background-color: " + this.difficulties[i].color + ";");

      const textContent = colorElt.appendChild(document.createElement('div'));
      textContent.classList.add('text-' + className);
      const textElt = textContent.appendChild(document.createTextNode(this.difficulties[i].name));
    }
  }

  _didRender() {
    if (this.mainDifficulty) {
      const element = this.shadowRoot.getElementById('container');
      for (let i = 0; i < this.difficulties.length; i++) {
        if (this.difficulties[i].index === this.mainDifficulty) {
          const mainElt = element.getElementsByClassName('box-' + this.mainDifficulty);
          mainElt[0].setAttribute("style", "width: " + (100 - (this.difficulties.length - 1) * 10) + "%; background-color: " + this.difficulties[i].color + "; color: " + this.difficulties[i].textColor + ";");

          const mainText = element.getElementsByClassName('text-' + this.mainDifficulty);
          mainText[0].setAttribute("style", "visibility: visible;");
        } else {
          const otherElt = element.getElementsByClassName('box-' + this.difficulties[i].index);
          otherElt[0].setAttribute("style", "width: 10%; background-color: " + this.difficulties[i].color + "; color: " + this.difficulties[i].textColor + ";");

          const mainText = element.getElementsByClassName('text-' + this.difficulties[i].index);
          mainText[0].setAttribute("style", "visibility: hidden;");
        }
      }
    }
  }
}

customElements.define("colors-bar", ColorsBar);