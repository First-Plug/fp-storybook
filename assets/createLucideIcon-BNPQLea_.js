import{r as n}from"./index-D4lIrffr.js";function l(r){var t,o,e="";if(typeof r=="string"||typeof r=="number")e+=r;else if(typeof r=="object")if(Array.isArray(r)){var a=r.length;for(t=0;t<a;t++)r[t]&&(o=l(r[t]))&&(e&&(e+=" "),e+=o)}else for(o in r)r[o]&&(e&&(e+=" "),e+=o);return e}function b(){for(var r,t,o=0,e="",a=arguments.length;o<a;o++)(r=arguments[o])&&(t=l(r))&&(e&&(e+=" "),e+=t);return e}/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),C=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,o,e)=>e?e.toUpperCase():o.toLowerCase()),c=r=>{const t=C(r);return t.charAt(0).toUpperCase()+t.slice(1)},u=(...r)=>r.filter((t,o,e)=>!!t&&t.trim()!==""&&e.indexOf(t)===o).join(" ").trim(),h=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=n.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:e,className:a="",children:s,iconNode:f,...i},p)=>n.createElement("svg",{ref:p,...w,width:t,height:t,stroke:r,strokeWidth:e?Number(o)*24/Number(t):o,className:u("lucide",a),...!s&&!h(i)&&{"aria-hidden":"true"},...i},[...f.map(([m,d])=>n.createElement(m,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.503.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=(r,t)=>{const o=n.forwardRef(({className:e,...a},s)=>n.createElement(y,{ref:s,iconNode:t,className:u(`lucide-${g(c(r))}`,`lucide-${r}`,e),...a}));return o.displayName=c(r),o};export{b as a,v as c};
