import { html, LitElement } from "../../../node_modules/@polymer/lit-element/lit-element.js";
export default class CollectionsList extends LitElement {
  constructor() {
    super();
  }

  _render() {
    return html`
        <style>
        </style>
        This is the collections list.
    `;
  }

  _firstRendered() {}

}
customElements.define("collections-list", CollectionsList);