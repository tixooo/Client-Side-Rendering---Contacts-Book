import {render} from '../node_modules/lit-html/lit-html.js';
import cardTemplate from './contactCard.js';
import {contacts} from "./contacts.js"

let container = document.querySelector(`#contacts`);

const result = contacts.map(cardTemplate);

render(result, container)
