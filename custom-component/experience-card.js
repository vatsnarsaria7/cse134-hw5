import { getExpCardCss } from './experience-card.css.js';

class experienceCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        const style = document.createElement("style");

        style.textContent = getExpCardCss();

        const exp_title = getAttribute("exp-title") || "";
        const organization = getAttribute("organization") || "";
        const dates = getAttributes("dates") || "";
        const responsibilites = getAttributes("responsibilites") || "";

        this.shadowRoot.innerHTML = `

        <div class="experience-card">
            <h3>${exp_title}</h3>
            <p>${organizaiton}</p>
            <p>${dates}</p>
            <dl>
                ${responsibilities.map(res => `<dt>${res.title}</dt><dd>${res.description}</dd>`).join('')}
            </dl>
        </div>
        `;


        this.shadowRoom.appendChild(style);
    }
}

customElements.define('experience-card', ExperienceCard);