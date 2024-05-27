var n={running:"Running...",failed:"\u2718 Failed",done:"\u2713 Done"},i=class extends HTMLElement{showRunning(){let e=this.getAttribute("running")||n.running;this.innerHTML=`
            <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"><animateTransform attributeName="transform" type="rotate" dur="0.75s" values="0 12 12;360 12 12" repeatCount="indefinite"/></path></svg>
            ${e}
        `}showFinished(e){if(!e.ok){this.innerText=this.getAttribute("failed")||n.failed;return}let t=this.getAttribute("done")||n.done;t=t.replace("$DURATION",e.duration),this.innerHTML=`
            ${t}
            <codapi-ref>by <a href="https://codapi.org/">codapi</a></codapi-ref>`}showMessage(e){this.innerText=e}};window.customElements.get("codapi-status")||customElements.define("codapi-status",i);export{i as CodapiStatus};
