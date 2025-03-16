import { getExperienceCardCSS } from './experience-card-css.js';

class experienceCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        const style = document.createElement("style");

        style.textContent = getExperienceCardCSS();

        const title = this.getAttribute("title") || "Untitled Experience";
        const company = this.getAttribute("company") || "Unknown Company";
        const dates = this.getAttribute("dates") || "No Dates Provided";
        const description = this.getAttribute("description") || "No description available.";
        const imgSrc = this.getAttribute("img-src") || "placeholder.jpg";
        const imgAlt = this.getAttribute("img-alt") || `Image of ${title}`;
        const link = this.getAttribute("link") || "#";
        const linkText = this.getAttribute("link-text") || "Learn More";

        this.shadowRoot.innerHTML = `

        <div class="experience-card">
            <h2>${title}</h2>
            
            <picture>
                <img src="${imgSrc}" alt="${imgAlt}">
            </picture>

            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Dates:</strong> ${dates}</p>
            <p class="description">${description}</p>

            <a href="${link}" target="_blank" class="learn-more">${linkText}</a>
        </div>
        `;


        this.shadowRoot.appendChild(style);
    }
}

customElements.define('experience-card', experienceCard);