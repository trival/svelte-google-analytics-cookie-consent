function w(){}function K(e){return e()}function W(){return Object.create(null)}function j(e){e.forEach(K)}function le(e){return typeof e=="function"}function O(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ue(e){return Object.keys(e).length===0}function d(e,t){e.appendChild(t)}function v(e,t,n){e.insertBefore(t,n||null)}function L(e){e.parentNode.removeChild(e)}function k(e){return document.createElement(e)}function y(e){return document.createTextNode(e)}function M(){return y(" ")}function R(){return y("")}function E(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function fe(e){return Array.from(e.childNodes)}function x(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}var T;function I(e){T=e}function de(){if(!T)throw new Error("Function called outside component initialization");return T}function q(e){de().$$.on_mount.push(e)}var B=[],X=[],S=[],Y=[],me=Promise.resolve(),D=!1;function ge(){D||(D=!0,me.then(Z))}function V(e){S.push(e)}var F=!1,Q=new Set;function Z(){if(!F){F=!0;do{for(let e=0;e<B.length;e+=1){let t=B[e];I(t),be(t.$$)}for(I(null),B.length=0;X.length;)X.pop()();for(let e=0;e<S.length;e+=1){let t=S[e];Q.has(t)||(Q.add(t),t())}S.length=0}while(B.length);for(;Y.length;)Y.pop()();D=!1,F=!1,Q.clear()}}function be(e){if(e.fragment!==null){e.update(),j(e.before_update);let t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}var pe=new Set;function he(e,t){e&&e.i&&(pe.delete(e),e.i(t))}function _e(e,t,n,o){let{fragment:r,on_mount:u,on_destroy:c,after_update:m}=e.$$;r&&r.m(t,n),o||V(()=>{let l=u.map(K).filter(le);c?c.push(...l):j(l),e.$$.on_mount=[]}),m.forEach(V)}function ke(e,t){let n=e.$$;n.fragment!==null&&(j(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(e,t){e.$$.dirty[0]===-1&&(B.push(e),ge(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function H(e,t,n,o,r,u,c,m=[-1]){let l=T;I(e);let a=e.$$={fragment:null,ctx:null,props:u,update:w,not_equal:r,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:t.context||[]),callbacks:W(),dirty:m,skip_bound:!1,root:t.target||l.$$.root};c&&c(a.root);let h=!1;if(a.ctx=n?n(e,t.props||{},(f,_,...C)=>{let i=C.length?C[0]:_;return a.ctx&&r(a.ctx[f],a.ctx[f]=i)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](i),h&&ye(e,f)),_}):[],a.update(),h=!0,j(a.before_update),a.fragment=o?o(a.ctx):!1,t.target){if(t.hydrate){let f=fe(t.target);a.fragment&&a.fragment.l(f),f.forEach(L)}else a.fragment&&a.fragment.c();t.intro&&he(e.$$.fragment),_e(e,t.target,t.anchor,t.customElement),Z()}I(l)}var z=class{$destroy(){ke(this,1),this.$destroy=w}$on(t,n){let o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{let r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!ue(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}};function G(e,t,n){var o="";if(n){var r=new Date;r.setTime(r.getTime()+n*24*60*60*1e3),o="; expires="+r.toUTCString()}document.cookie=e+"="+(t||"")+o+"; path=/; samesite=lax"}function P(e){for(var t=e+"=",n=document.cookie.split(";"),o=0;o<n.length;o++){for(var r=n[o];r.charAt(0)==" ";)r=r.substring(1,r.length);if(r.indexOf(t)==0)return r.substring(t.length,r.length)}return null}function $(){return document.cookie.split(";").map(t=>t.trim().split("=")[0]).filter(t=>t.indexOf("_g")===0)}function ee(e){G(e,"",-1)}function ne(e){let t,n,o,r,u,c,m,l,a,h,f,_,C,i=e[3]&&te(e);return{c(){t=k("div"),n=k("span"),o=y(e[0]),r=M(),u=k("span"),c=k("button"),m=y(e[1]),l=M(),a=k("button"),h=y(e[2]),f=M(),i&&i.c(),b(n,"class","ga-cookie-banner-text svelte-joir8h"),b(c,"type","button"),b(c,"class","ga-cookie-banner-accept-btn ga-cookie-banner-btn svelte-joir8h"),b(a,"type","button"),b(a,"class","ga-cookie-banner-reject-btn ga-cookie-banner-btn svelte-joir8h"),b(u,"class","ga-cookie-banner-btns svelte-joir8h"),b(t,"class","ga-cookie-banner svelte-joir8h")},m(g,p){v(g,t,p),d(t,n),d(n,o),d(t,r),d(t,u),d(u,c),d(c,m),d(u,l),d(u,a),d(a,h),d(t,f),i&&i.m(t,null),_||(C=[E(c,"click",e[6]),E(a,"click",e[7])],_=!0)},p(g,p){p&1&&x(o,g[0]),p&2&&x(m,g[1]),p&4&&x(h,g[2]),g[3]?i?i.p(g,p):(i=te(g),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},d(g){g&&L(t),i&&i.d(),_=!1,j(C)}}}function te(e){let t,n;return{c(){t=k("a"),n=y(e[4]),b(t,"href",e[3]),b(t,"class","ga-cookie-banner-read-more-link svelte-joir8h")},m(o,r){v(o,t,r),d(t,n)},p(o,r){r&16&&x(n,o[4]),r&8&&b(t,"href",o[3])},d(o){o&&L(t)}}}function Ce(e){let t,n=!e[5]&&ne(e);return{c(){n&&n.c(),t=R()},m(o,r){n&&n.m(o,r),v(o,t,r)},p(o,[r]){o[5]?n&&(n.d(1),n=null):n?n.p(o,r):(n=ne(o),n.c(),n.m(t.parentNode,t))},i:w,o:w,d(o){n&&n.d(o),o&&L(t)}}}var A="consent_given",oe="true",re="false";function je(e,t,n){let{gaMeasurementId:o=""}=t,{anonymizeIPs:r=!0}=t,{bannerText:u="This site uses cookies!"}=t,{acceptBtnLabel:c="Accept"}=t,{rejectBtnLabel:m="Reject"}=t,{readMoreLinkUrl:l=""}=t,{readMoreLinkLabel:a="read more"}=t;function h(){n(5,p=!1)}let f=U,_=N,C=()=>Boolean(P(A)),i=()=>P(A)===oe,g=()=>P(A)===re,p=C();function se(){G(A,oe,30),n(5,p=!0)}function ce(){G(A,re,30),n(5,p=!0)}function U(){if(o&&typeof window.dataLayer=="undefined"){window[`ga-disable-${o}`]=void 0;let s=document.createElement("script");s.onload=function(){window.dataLayer=window.dataLayer||[];function J(){window.dataLayer.push(arguments)}J("js",new Date),J("config",o,{anonymize_ip:r})},s.src=`https://www.googletagmanager.com/gtag/js?id=${o}`,document.body.appendChild(s)}se()}function N(){window[`ga-disable-${o}`]=!0,window.dataLayer=void 0,$().forEach(ee),ce()}return q(()=>{i()?U():g()&&N()}),e.$$set=s=>{"gaMeasurementId"in s&&n(8,o=s.gaMeasurementId),"anonymizeIPs"in s&&n(9,r=s.anonymizeIPs),"bannerText"in s&&n(0,u=s.bannerText),"acceptBtnLabel"in s&&n(1,c=s.acceptBtnLabel),"rejectBtnLabel"in s&&n(2,m=s.rejectBtnLabel),"readMoreLinkUrl"in s&&n(3,l=s.readMoreLinkUrl),"readMoreLinkLabel"in s&&n(4,a=s.readMoreLinkLabel)},[u,c,m,l,a,p,U,N,o,r,h,f,_]}var ae=class extends z{constructor(t){super();H(this,t,je,Ce,O,{gaMeasurementId:8,anonymizeIPs:9,bannerText:0,acceptBtnLabel:1,rejectBtnLabel:2,readMoreLinkUrl:3,readMoreLinkLabel:4,reopen:10,accept:11,reject:12})}get reopen(){return this.$$.ctx[10]}get accept(){return this.$$.ctx[11]}get reject(){return this.$$.ctx[12]}},ie=ae;function we(e,t={}){let{anonymizeIPs:n,bannerText:o,acceptBtnLabel:r,rejectBtnLabel:u,readMoreLinkUrl:c,readMoreLinkLabel:m}=t,l=document.createElement("div");document.body.appendChild(l);let a=new ie({target:l,props:{gaMeasurementId:e,anonymizeIPs:n,bannerText:o,acceptBtnLabel:r,rejectBtnLabel:u,readMoreLinkUrl:c,readMoreLinkLabel:m}});return{reopen:a.reopen,accept:a.accept,reject:a.reject}}var Le=we;export{Le as default};
//# sourceMappingURL=cookie-banner.js.map