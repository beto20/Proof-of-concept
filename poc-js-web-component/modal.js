class Modal extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.isOpen = false;
        // Cuando se tiene varios slot se le puede agregar name a cada uno para identificarlos ejm: slot name="title"
        //
        this.shadowRoot.innerHTML = `
            <style>
                #backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background: rgba(0, 0, 0, 0.75);
                    z-index: 100;
                    opacity: 0;
                    pointer-events: none;
                }

                :host([opened]) #backdrop, 
                :host([opened]) #modal {
                    opacity: 1;
                    pointer-events: all;
                }

                :host([opened]) #modal {
                    top: 15vh;
                }

                #modal {
                    position: fixed;
                    top: 10vh;
                    left: 25%;
                    width: 50%;
                    z-index: 100;
                    background: white;
                    border-radius: 3px;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    opacity: 0;
                    pointer-events: none;
                    transition: all 0.3s ease-out;
                }
            
                header {
                    padding: 1rem;
                    border-bottom: 1px solid #ccc;
                }

                ::slotted(h1) {
                    font-size: 1.25rem;
                    margin: 0;
                }

                #main {
                    padding: 1rem;
                }

                #actions {
                    border-top: 1px solid #ccc;
                    padding: 1rem
                    display: flex;
                    justify-content: flex-end;
                }

                #actions button {
                    margin: 0 0.25rem;
                }

            </style>
        
            <div id="backdrop"></div>
            <div id="modal">
                <header>
                    <slot name="title"></slot>
                </header>
                <section id="main">
                    <slot></slot>
                </section>
                <section id="actions">
                    <button id="cancel-btn">Cancel</button>
                    <button id="confirm-btn">Okay</button>
                </section>
            </div>
        `;

        const slots = this.shadowRoot.querySelectorAll('slot');
        slots[1].addEventListener('slotchange', event => {
            console.dir(slots[1].assignedNodes());
        });

        const cancelButton = this.shadowRoot.querySelector('#cancel-btn');
        const confirmButton = this.shadowRoot.querySelector('#confirm-btn');
        const backdrop = this.shadowRoot.querySelector('#backdrop');

        cancelButton.addEventListener('click', this._cancel.bind(this));
        confirmButton.addEventListener('click', this._confirm.bind(this));
        backdrop.addEventListener('click', this._cancel.bind(this));

        // Se crear un evento que lance el custom event
        // cancelButton.addEventListener('cancel', () => {
        //     console.log('Cancel inside wc');
        // });
    }

    attributeChangedCallback(name, oldValue, newValue) {
            
        if (this.hasAttribute('opened')) {
            this.isOpen = true;
            //Este comportamiento para abrir el modal tambie se puede realiza con CSS, ya que solo es un cambio en los estilos
            this.shadowRoot.setAttribute('#backdrop').style.opacity = 1;
            this.shadowRoot.setAttribute('#backdrop').style.pointerEvents = 'all';
            this.shadowRoot.setAttribute('#modal').style.opacity = 1;
            this.shadowRoot.setAttribute('#modal').style.pointerEvents = 'all';
        } else {
            this.isOpen = false;
        }
    }

    static get observedAttribute() {
        return ['opened'];
    }

    open() {
        this.setAttribute('opened', '');
        this.isOpen = true;
    }

    hide() {
        if (this.hasAttribute('opened')) {
            this.removeAttribute('opened');            
        }
        this.isOpen = false;
    }

    // El parametro event se recibe automaticamente, ya que JS interpreta que debe enviar el evento indicando con .addEventListener() y recibe metadata
    _cancel(event) {
        this.hide();
        // Con new Event() estamos creando un evento custom
        // Con bubbles en true lo que realiza es que va subiendo en el root(tree) del html (tag)
        // Con composed en true te saca del shadowDOM para que se pueda ejecutar bubbles
        // Esto nos sirve para poder interactuar con triggers de eventos que estan fuera del contexto del WC
        const cancelEvent = new Event('cancel', { bubbles: true, composed: true});
        // NOTA: El evento custom se esta gatillando desde el ShadowDOM
        event.target.dispatchEvent(cancelEvent);
    }

    _confirm() {
        this.hide();
        const confirmEvent = new Event('confirm');
        // NOTA: El evento custom se esta gatillando desde el mismo elemento
        this.dispatchEvent(confirmEvent);
    }

}

customElements.define('alfa-modal', Modal);