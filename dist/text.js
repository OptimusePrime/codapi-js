var t="---";function r(n,e){let i=n.indexOf(e);return i>=0?[n.slice(0,i),n.slice(i+e.length)]:[n,""]}function c(n){if(n.endsWith(t))return"";let e=n.lastIndexOf(`
${t}
`);return e!==-1?n.slice(e+t.length+2):n.startsWith(t)?n.slice(t.length+1):n}var l={cut:r,tail:c,HORIZONTAL_RULE:t};export{l as default};
