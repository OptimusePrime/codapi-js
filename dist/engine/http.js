async function d(t,e={}){let{timeout:n=1e4}=e,o=new AbortController,s=setTimeout(()=>o.abort(),n),c=await fetch(t,{...e,signal:o.signal});return clearTimeout(s),c}var a="---";function T(t,e){let n=t.indexOf(e);return n>=0?[t.slice(0,n),t.slice(n+e.length)]:[t,""]}function g(t){if(t.endsWith(a))return"";let e=t.lastIndexOf(`
${a}
`);return e!==-1?t.slice(e+a.length+2):t.startsWith(a)?t.slice(a.length+1):t}var f={cut:T,tail:g,HORIZONTAL_RULE:a};async function p(t){try{let e=w(t.files[""]),[n,o]=await y(e);return{ok:!0,duration:o,stdout:n,stderr:""}}catch(e){return{ok:!1,duration:0,stdout:"",stderr:e.toString()}}}function w(t){let e=t.split(`
`),n=0,o=e[0].split(" ").filter(r=>r),[s,c]=o.length>=2?o:["GET",o[0]];n+=1;let u=[];for(let r=n;r<e.length;r++){let i=e[r].trim();if(i.startsWith("?")||i.startsWith("&"))u.push(i),n+=1;else break}let l={};for(let r=n;r<e.length;r++){let i=e[r].trim();if(i==="")break;let[m,x]=f.cut(i,":");l[m.trim()]=x.trim(),n+=1}let h=e.slice(n+1).join(`
`);return{method:s,url:c+u.join(""),headers:l,body:h}}async function y(t){let e=new Date,n=await b(t),o=await $(n),s=new Date-e;return[o,s]}async function b(t){let e={method:t.method,headers:t.headers,body:t.body||void 0};return await d(t.url,e)}async function $(t){let e="HTTP/1.1",n=await t.text(),o=[`${e} ${t.status} ${t.statusText}`];for(let s of t.headers.entries())o.push(`${s[0]}: ${s[1]}`);return n&&o.push("",n),o.join(`
`)}var I={exec:p};export{I as default};
