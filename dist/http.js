async function i(o,t={}){let{timeout:n=1e4}=t,e=new AbortController,c=setTimeout(()=>e.abort(),n),r=await fetch(o,{...t,signal:e.signal});return clearTimeout(c),r}export{i as fetchTimeout};
