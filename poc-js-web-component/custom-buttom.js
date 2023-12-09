class CustomButtom extends HTMLElement {
    constructor() {
        super();
        this._isHidden = false;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                #info-box {
                    display: none;
                }
            </style>
        
            <button>Show</button>
            <p id="info-box"><slot></slot></p>
        `;

        this._btnel = this.shadowRoot.querySelector('button');
        this._paragraph = this.shadowRoot.querySelector('#info-box');
        this._btnel.addEventListener('click', this._open.bind(this));

    }

    connectedCallback() {
        if (this.hasAttribute('is-visible')) {
            if (this.getAttribute('is-visible') === 'true') {
                this._isHidden = true;
                this._paragraph.style.display = 'block';
                this._btnel.textContent = 'Hide';
            }
        }
    }

    _open() {
        this._isHidden = !this._isHidden;
        this._paragraph.style.display = this._isHidden ? 'block': 'none';
        this._btnel.textContent = this._isHidden ? 'Hide': 'Show';
    }

}

customElements.define('alfa-button', CustomButtom)