var e="---";function c(t,r){let i=t.indexOf(r);return i>=0?[t.slice(0,i),t.slice(i+r.length)]:[t,""]}function l(t){if(t.endsWith(e))return"";let r=t.lastIndexOf(`
${e}
`);return r!==-1?t.slice(r+e.length+2):t.startsWith(e)?t.slice(e.length+1):t}var o={cut:c,tail:l,HORIZONTAL_RULE:e};var n=o.HORIZONTAL_RULE,u={javascript:`console.log("${n}");`,lua:`print("${n}")`,php:`echo "${n}"`,python:`print("${n}")`,r:`cat("${n}
")`,ruby:`puts "${n}"`,typescript:`console.log("${n}");`,shell:`echo "${n}"`,sql:`select '${n}';`};function s(t){return u[t]||""}var p={hr:s};export{p as default};
