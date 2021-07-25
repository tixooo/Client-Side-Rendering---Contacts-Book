import {html} from '../node_modules/lit-html/lit-html.js';
const cardTemplate = (data) => html`

<div class="contact card">
            <div>
                <i class="far fa-user-circle gravatar"></i>
            </div>
            <div class="info">
                <h2>Name: ${data.name}</h2>
                <button class="detailsBtn" @click=${onClick}>Details</button>
                <div class="details" id="1">
                    <p>Phone number: ${data.phoneNumber}</p>
                    <p>Email: ${data.email}</p>
                </div>
            </div>
        </div>
        `;
        
        function onClick(event) {
            const element = event.target.parentNode;
            if(element.querySelector(`.details`).style.display === `inline-block`){
                element.querySelector(`.details`).style.display = `none`;
            } else {
                element.querySelector(`.details`).style.display = `inline-block`
            }
            
        }

        export default cardTemplate;