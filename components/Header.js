class Header extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });
        const HEIGHT=512;
        const WIDTH=1024;
        const header = document.createElement('header');
        header.innerHTML = `
          <link rel="stylesheet" href="styles/header.css">
          <nav>
            <img src="assets/logo_square.png" height="${HEIGHT}" width="${WIDTH}"/>
            <a href="/">Home</a>
            <a href="/about.html">About</a>
            <a href="/support.html">Support</a>
          </nav>
        `;

        shadow.appendChild(header);
    }
}

customElements.define('page-header', Header);