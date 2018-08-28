import { html, LitElement } from '@polymer/lit-element';

import { SmallCard } from '../card/small-card.js';
import { SimpleCard } from "../card/simple-card.js";

export class CardsCollection extends LitElement {
    constructor() {
        super();
        this.characters = ['か', 'あ', 'さ', 'た', 'な', 'は', 'ま', 'や', 'ら', 'わ'];
    }

    _render() {
        return html`
        <style>
            .collection{
                height: 100%;
                width: 80%;
                margin-left: 10%;
                margin-top: 5%;
                display: flex;
                flex-wrap: wrap;
            }
            simple-card, small-card{
                margin: 10px;
            }
        </style>
        <div class="collection">
            <!-- <simple-card text="${this.characters[0]}"></simple-card>
            <simple-card text="${this.characters[1]}"></simple-card>
            <simple-card text="${this.characters[2]}"></simple-card>
            <simple-card text="${this.characters[3]}"></simple-card> -->
            <small-card text="${this.characters[0]}"></small-card>
            <small-card text="${this.characters[1]}"></small-card>
            <small-card text="${this.characters[2]}"></small-card>
            <small-card text="${this.characters[3]}"></small-card>
            <small-card text="${this.characters[4]}"></small-card>
            <small-card text="${this.characters[5]}"></small-card>
            <small-card text="${this.characters[6]}"></small-card>
            <small-card text="${this.characters[7]}"></small-card>
            <small-card text="${this.characters[8]}"></small-card>
            <small-card text="${this.characters[9]}"></small-card>
            <small-card text="${this.characters[2]}"></small-card>
            <small-card text="${this.characters[3]}"></small-card>
        </div>
    `
    }

    _firstRendered() { }
}

customElements.define("cards-collection", CardsCollection);