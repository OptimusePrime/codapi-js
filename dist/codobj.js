var e=window.codapi??{};e.version=typeof VERSION<"u"?VERSION:"main";e.engines=e.engines??{};e.settings=e.settings??{};window.codapi=e;var t=class extends HTMLElement{connectedCallback(){this.ready||(e.settings.url=this.getAttribute("url"),this.ready=!0)}attributeChangedCallback(n,d,s){e.settings[n]=s}};window.customElements.get("codapi-settings")||customElements.define("codapi-settings",t);export{t as CodapiSettings,e as codobj};
