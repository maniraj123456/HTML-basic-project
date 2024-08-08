class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `<p>my custom element</p>`;
  }
}
customElements.define("my-element", MyElement);
