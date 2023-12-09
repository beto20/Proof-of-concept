class CustomInput extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.innerHTML = `
            <style>
                #input-username {
                    border: 1px solid rgb(211, 210, 210);
                    font-size: 16px;
                    border-radius: 7px;
                    background: grey;
                    color: rgb(46, 48, 48);
                }
                #input-username:focus {
                    outline: none;
                }
            </style>
            <input type="text" id="input-username">
        `;
    }

}

customElements.define('alfa-input', CustomInput);