// Todos los elementos custom deben heredar de HTMLElement o una clase en especifico del DOM
class Tooltip extends HTMLElement {
    constructor() {
        super();
        // console.log('is working');
        // this._tooltipContainer;
        this._tooltipIcon;
        this._tooltipVisible = false;
        this._tooltipText = 'DEFAULT TEXT';
        // Es parte del shadowDOM
        this.attachShadow({ mode: 'open' });
        const template = document.querySelector('#tooltip-template');
        // this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        // Con :host se puede agregar estilos al componente custom, sin embargo aplica para todos los WC
        // Con :host(.important) se selecciona un tag, puede ser con class o id
        // Con :host-context(.important p) para acceder a un tag en especifico dentro de otro tag, puede ser con class, id o tag
        // Con var(--color-primary, green) nos sirve para asignar por variable alguna propiedad, ademas el segundo parametro es cuando el primero no tiene un valor asignado
        this.shadowRoot.innerHTML = `
            <style>
                div {
                    font-weight: normal;
                    background-color: black;
                    color: white;
                    position: absolute;
                    top: 1.5rem;
                    left: 0.75rem;
                    zIndex: 10;
                    padding: 0.15rem;
                    border-radius: 3px;
                    box-shadow: 1px 1px 6px rgba(0,0,0,0.26);
                }

                :host {
                    position: relative;
                }

                :host(.important) {
                    background: var(--color-primary, green);
                    padding: 0.1;
                }

                :host-context(p) {
                    font-weight: bold;
                }

                .highlight {
                    background-color: red;
                }

                ::slotted(.highlight) {
                    border-bottom: 1px dotted red;
                }

                .icon {
                    background-color: black;
                    color: white;
                    padding: 0.15rem 0.5rem;
                    text-align: center;
                    border-radius: 50%;
                }
            </style>
            <slot>DEFAULT TEXT</slot>
            <span class="icon">?</span>
        `;
    }

    connectedCallback() {
        if (this.hasAttribute('text')) {
            this._tooltipText = this.getAttribute('text');
        }
        // const tooltipIcon = document.createElement('span');
        // tooltipIcon.textContent = ' (?)';

        this._tooltipIcon = this.shadowRoot.querySelector('span')
        this._tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        this._tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
        // this.shadowRoot.appendChild(this._tooltipIcon);
        this._render();
    }

    // Metodo reservado parte del ciclo de vida de un WC
    attributeChangedCallback(name, oldValue, newValue) {
        // console.log(name, '| '+oldValue, '| '+newValue);
        if (oldValue === newValue) {
            return;
        }
        if (name === 'text') {
            this._tooltipText = newValue;
        }
    }

    // Funciona como un getter que obtiene el valor de forma activa apartir del nombre de un atributo del HTML
    // Es un metodo reservado -> static get observedAttributes()...
    static get observedAttributes() {
        // return ['text', 'class'];
        return ['text'];
    }

    // Metodo reservado parte del ciclo de vida de un WC
    disconnectedCallback() {
        console.log('Desconexion');
        this._tooltipIcon.removeEventListener('mouseenter', this._showTooltip);
        this._tooltipIcon.removeEventListener('mouseleave', this._hideTooltip);
    }

    // Este metodo privado es para centraliza logica para el renderizado es una practica tener un metodo _render
    _render() {
        let tooltipContainer = this.shadowRoot.querySelector('div');
        if (this._tooltipVisible) {
            tooltipContainer = document.createElement('div');
            tooltipContainer.textContent = this._tooltipText;
            this.shadowRoot.appendChild(tooltipContainer);
        } else {
            if (tooltipContainer) {
                this.shadowRoot.removeChild(tooltipContainer);                 
            }
        }
    }

    // Se inicia esta funcion con _ porque en JS no se puede saber si una funcion es privada o publica (no tiene modificadores de acceso)
    // Entonces para este caso que es una funcion que solo se utilizara para un caso particular y es "privada" se inicia con _
    _showTooltip() {
        // Nota 1: esta es una forma crear html template, sin embargo no es la mas optima
        // this._tooltipContainer = document.createElement('div');
        // this._tooltipContainer.textContent = this._tooltipText;
        // Nota 2: esta es una forma de agregar estilos a los componentes, sin embargo no es la mas optima
        // this._tooltipContainer.style.backgroundColor = 'red';
        // this._tooltipContainer.style.color = 'blue';
        // this._tooltipContainer.style.position = 'absolute';
        // this._tooltipContainer.style.zIndex = 10;
        // this.shadowRoot.appendChild(this._tooltipContainer);

        ////// mejora //////
        this._tooltipVisible = true;
        this._render();
    }
    // Nota 3: para mejorar estos aspecto existe Shadow DOM y templates, ambos permiten crear, reutilizar y encapsular componentes

    _hideTooltip() {
        // this.shadowRoot.removeChild(this._tooltipContainer);
        ////// mejora //////
        this._tooltipVisible = false;
        this._render();
    }
}

// Con customElements es un objecto que permite registrar el tag - HTML del elemento custom
// Todo elemento custom por lo menos debe estar separado por un guion y deben ser 2 palabras o mas
// nota: debe iniciar con iniciales del dev o nombre de la empresa u org.
customElements.define('alfa-tooltip', Tooltip);