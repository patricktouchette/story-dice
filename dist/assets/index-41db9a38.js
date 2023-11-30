var nt=Object.defineProperty;var st=(t,e,n)=>e in t?nt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var he=(t,e,n)=>(st(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function N(){}const We=t=>t;function it(t,e){for(const n in e)t[n]=e[n];return t}function Xe(t){return t()}function ke(){return Object.create(null)}function G(t){t.forEach(Xe)}function we(t){return typeof t=="function"}function Z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function lt(t){return Object.keys(t).length===0}function q(t,e,n,s){if(t){const i=Ke(t,e,n,s);return t[0](i)}}function Ke(t,e,n,s){return t[1]&&s?it(n.ctx.slice(),t[1](s(e))):n.ctx}function U(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const l=[],o=Math.max(e.dirty.length,i.length);for(let r=0;r<o;r+=1)l[r]=e.dirty[r]|i[r];return l}return e.dirty|i}return e.dirty}function V(t,e,n,s,i,l){if(i){const o=Ke(e,n,s,l);t.p(o,i)}}function W(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Fe(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const Ge=typeof window<"u";let ot=Ge?()=>window.performance.now():()=>Date.now(),$e=Ge?t=>requestAnimationFrame(t):N;const ne=new Set;function Je(t){ne.forEach(e=>{e.c(t)||(ne.delete(e),e.f())}),ne.size!==0&&$e(Je)}function rt(t){let e;return ne.size===0&&$e(Je),{promise:new Promise(n=>{ne.add(e={c:t,f:n})}),abort(){ne.delete(e)}}}function v(t,e){t.appendChild(e)}function Qe(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ct(t){const e=d("style");return e.textContent="/* empty */",ft(Qe(t),e),e.sheet}function ft(t,e){return v(t.head||t,e),e.sheet}function T(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode&&t.parentNode.removeChild(t)}function ut(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function J(t){return document.createTextNode(t)}function L(){return J(" ")}function be(){return J("")}function H(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function f(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function at(t){return Array.from(t.childNodes)}function ie(t,e){e=""+e,t.data!==e&&(t.data=e)}function de(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function Se(t,e,n){t.classList.toggle(e,!!n)}function dt(t,e,{bubbles:n=!1,cancelable:s=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:s})}const ve=new Map;let me=0;function _t(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function vt(t,e){const n={stylesheet:ct(e),rules:{}};return ve.set(t,n),n}function mt(t,e,n,s,i,l,o,r=0){const c=16.666/s;let u=`{
`;for(let p=0;p<=1;p+=c){const j=e+(n-e)*l(p);u+=p*100+`%{${o(j,1-j)}}
`}const _=u+`100% {${o(n,1-n)}}
}`,m=`__svelte_${_t(_)}_${r}`,k=Qe(t),{stylesheet:O,rules:F}=ve.get(k)||vt(k,t);F[m]||(F[m]=!0,O.insertRule(`@keyframes ${m} ${_}`,O.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${m} ${s}ms linear ${i}ms 1 both`,me+=1,m}function De(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),me-=i,me||pt())}function pt(){$e(()=>{me||(ve.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&$(e)}),ve.clear())})}let fe;function ce(t){fe=t}function ht(){if(!fe)throw new Error("Function called outside component initialization");return fe}function Te(t){ht().$$.on_mount.push(t)}const te=[],Ee=[];let se=[];const Me=[],gt=Promise.resolve();let ye=!1;function yt(){ye||(ye=!0,gt.then(Ze))}function X(t){se.push(t)}const ge=new Set;let ee=0;function Ze(){if(ee!==0)return;const t=fe;do{try{for(;ee<te.length;){const e=te[ee];ee++,ce(e),wt(e.$$)}}catch(e){throw te.length=0,ee=0,e}for(ce(null),te.length=0,ee=0;Ee.length;)Ee.pop()();for(let e=0;e<se.length;e+=1){const n=se[e];ge.has(n)||(ge.add(n),n())}se.length=0}while(te.length);for(;Me.length;)Me.pop()();ye=!1,ge.clear(),ce(t)}function wt(t){if(t.fragment!==null){t.update(),G(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(X)}}function $t(t){const e=[],n=[];se.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),se=e}let re;function bt(){return re||(re=Promise.resolve(),re.then(()=>{re=null})),re}function je(t,e,n){t.dispatchEvent(dt(`${e?"intro":"outro"}${n}`))}const _e=new Set;let Q;function ue(){Q={r:0,c:[],p:Q}}function ae(){Q.r||G(Q.c),Q=Q.p}function h(t,e){t&&t.i&&(_e.delete(t),t.i(e))}function w(t,e,n,s){if(t&&t.o){if(_e.has(t))return;_e.add(t),Q.c.push(()=>{_e.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const Tt={duration:0};function Oe(t,e,n){const s={direction:"in"};let i=e(t,n,s),l=!1,o,r,c=0;function u(){o&&De(t,o)}function _(){const{delay:k=0,duration:O=300,easing:F=We,tick:g=N,css:p}=i||Tt;p&&(o=mt(t,0,1,O,k,F,p,c++)),g(0,1);const j=ot()+k,I=j+O;r&&r.abort(),l=!0,X(()=>je(t,!0,"start")),r=rt(C=>{if(l){if(C>=I)return g(1,0),je(t,!0,"end"),u(),l=!1;if(C>=j){const S=F((C-j)/O);g(S,1-S)}}return l})}let m=!1;return{start(){m||(m=!0,De(t),we(i)?(i=i(s),bt().then(_)):_())},invalidate(){m=!1},end(){l&&(u(),l=!1)}}}function Le(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function K(t){t&&t.c()}function Y(t,e,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),X(()=>{const l=t.$$.on_mount.map(Xe).filter(we);t.$$.on_destroy?t.$$.on_destroy.push(...l):G(l),t.$$.on_mount=[]}),i.forEach(X)}function B(t,e){const n=t.$$;n.fragment!==null&&($t(n.after_update),G(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(te.push(t),yt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function le(t,e,n,s,i,l,o=null,r=[-1]){const c=fe;ce(t);const u=t.$$={fragment:null,ctx:[],props:l,update:N,not_equal:i,bound:ke(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ke(),dirty:r,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(m,k,...O)=>{const F=O.length?O[0]:k;return u.ctx&&i(u.ctx[m],u.ctx[m]=F)&&(!u.skip_bound&&u.bound[m]&&u.bound[m](F),_&&Ot(t,m)),k}):[],u.update(),_=!0,G(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const m=at(e.target);u.fragment&&u.fragment.l(m),m.forEach($)}else u.fragment&&u.fragment.c();e.intro&&h(t.$$.fragment),Y(t,e.target,e.anchor),Ze()}ce(c)}class oe{constructor(){he(this,"$$");he(this,"$$set")}$destroy(){B(this,1),this.$destroy=N}$on(e,n){if(!we(n))return N;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const kt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(kt);function Ft(t){let e,n,s,i;const l=t[7].default,o=q(l,t,t[6],null);return{c(){e=d("div"),o&&o.c(),de(e,"left",t[0]+"px"),de(e,"top",t[1]+"px"),f(e,"class","draggable svelte-17muao6"),f(e,"tabindex","0"),f(e,"role","button")},m(r,c){T(r,e,c),o&&o.m(e,null),n=!0,s||(i=[H(window,"mouseup",t[3]),H(window,"mousemove",t[4]),H(e,"mousedown",t[2]),H(e,"touchstart",t[2],{passive:!0}),H(e,"touchmove",t[5]),H(e,"touchend",t[3],{passive:!0})],s=!0)},p(r,[c]){o&&o.p&&(!n||c&64)&&V(o,l,r,r[6],n?U(l,r[6],c,null):W(r[6]),null),(!n||c&1)&&de(e,"left",r[0]+"px"),(!n||c&2)&&de(e,"top",r[1]+"px")},i(r){n||(h(o,r),n=!0)},o(r){w(o,r),n=!1},d(r){r&&$(e),o&&o.d(r),s=!1,G(i)}}}function St(t,e,n){let{$$slots:s={},$$scope:i}=e,{left:l=0}=e,{top:o=0}=e,r=!1,c=!0,u=0,_=0;function m(){r=!0}function k(){r=!1}function O(g){r&&(n(0,l+=g.movementX),n(1,o+=g.movementY))}function F(g){const p=g.targetTouches[0];c&&(u=p.pageX,_=p.pageY,c=!1),r&&(n(0,l=p.pageX-u),n(1,o=p.pageY-_))}return t.$$set=g=>{"left"in g&&n(0,l=g.left),"top"in g&&n(1,o=g.top),"$$scope"in g&&n(6,i=g.$$scope)},[l,o,m,k,O,F,i,s]}class Dt extends oe{constructor(e){super(),le(this,e,St,Ft,Z,{left:0,top:1})}}const Et=t=>({}),Ne=t=>({}),Mt=t=>({}),Ce=t=>({}),jt=t=>({}),Ae=t=>({}),Lt=t=>({}),Pe=t=>({}),Nt=t=>({}),He=t=>({}),Ct=t=>({}),Re=t=>({});function At(t){let e,n,s,i,l,o,r,c,u,_,m,k,O,F,g,p,j,I;const C=t[6].sideOne,S=q(C,t,t[7],Re),R=t[6].sideTwo,M=q(R,t,t[7],He),x=t[6].sideThree,b=q(x,t,t[7],Pe),D=t[6].sideFour,y=q(D,t,t[7],Ae),z=t[6].sideFive,A=q(z,t,t[7],Ce),pe=t[6].sideSix,P=q(pe,t,t[7],Ne);return{c(){e=d("div"),n=d("div"),s=d("div"),i=d("div"),S&&S.c(),l=L(),o=d("div"),M&&M.c(),r=L(),c=d("div"),b&&b.c(),u=L(),_=d("div"),y&&y.c(),m=L(),k=d("div"),A&&A.c(),O=L(),F=d("div"),P&&P.c(),f(i,"id","dice-one-side-one"),f(i,"class","side one svelte-1x8lee7"),f(o,"id","dice-one-side-two"),f(o,"class","side two svelte-1x8lee7"),f(c,"id","dice-one-side-three"),f(c,"class","side three svelte-1x8lee7"),f(_,"id","dice-one-side-four"),f(_,"class","side four svelte-1x8lee7"),f(k,"id","dice-one-side-five"),f(k,"class","side five svelte-1x8lee7"),f(F,"id","dice-one-side-six"),f(F,"class","side six svelte-1x8lee7"),f(s,"id","dice1"),f(s,"class",g="dice dice-one show-"+t[0]+" svelte-1x8lee7"),Se(s,"showSame",t[1]),f(n,"class","container"),f(n,"role","button"),f(n,"tabindex","0"),f(e,"class","dice-component svelte-1x8lee7"),f(e,"style",t[2])},m(a,E){T(a,e,E),v(e,n),v(n,s),v(s,i),S&&S.m(i,null),v(s,l),v(s,o),M&&M.m(o,null),v(s,r),v(s,c),b&&b.m(c,null),v(s,u),v(s,_),y&&y.m(_,null),v(s,m),v(s,k),A&&A.m(k,null),v(s,O),v(s,F),P&&P.m(F,null),p=!0,j||(I=[H(n,"dblclick",t[3]),H(n,"keypress",t[3])],j=!0)},p(a,E){S&&S.p&&(!p||E&128)&&V(S,C,a,a[7],p?U(C,a[7],E,Ct):W(a[7]),Re),M&&M.p&&(!p||E&128)&&V(M,R,a,a[7],p?U(R,a[7],E,Nt):W(a[7]),He),b&&b.p&&(!p||E&128)&&V(b,x,a,a[7],p?U(x,a[7],E,Lt):W(a[7]),Pe),y&&y.p&&(!p||E&128)&&V(y,D,a,a[7],p?U(D,a[7],E,jt):W(a[7]),Ae),A&&A.p&&(!p||E&128)&&V(A,z,a,a[7],p?U(z,a[7],E,Mt):W(a[7]),Ce),P&&P.p&&(!p||E&128)&&V(P,pe,a,a[7],p?U(pe,a[7],E,Et):W(a[7]),Ne),(!p||E&1&&g!==(g="dice dice-one show-"+a[0]+" svelte-1x8lee7"))&&f(s,"class",g),(!p||E&3)&&Se(s,"showSame",a[1]),(!p||E&4)&&f(e,"style",a[2])},i(a){p||(h(S,a),h(M,a),h(b,a),h(y,a),h(A,a),h(P,a),p=!0)},o(a){w(S,a),w(M,a),w(b,a),w(y,a),w(A,a),w(P,a),p=!1},d(a){a&&$(e),S&&S.d(a),M&&M.d(a),b&&b.d(a),y&&y.d(a),A&&A.d(a),P&&P.d(a),j=!1,G(I)}}}function Pt(t){let e,n;return e=new Dt({props:{$$slots:{default:[At]},$$scope:{ctx:t}}}),{c(){K(e.$$.fragment)},m(s,i){Y(e,s,i),n=!0},p(s,[i]){const l={};i&135&&(l.$$scope={dirty:i,ctx:s}),e.$set(l)},i(s){n||(h(e.$$.fragment,s),n=!0)},o(s){w(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function Ht(t,e,n){let{$$slots:s={},$$scope:i}=e,{rollOnMount:l=!0}=e,o=0,r=!1,{scale:c=1}=e,u=null;c!==1&&(u=`transform: scale(${c}) translate(-${c*100}%,-${c*100}%);`);function _(){let m=o;n(0,o=Math.floor(Math.random()*6+1)),o===m&&!r?n(1,r=!0):n(1,r=!1)}return Te(()=>{_(),l&&setTimeout(_,5)}),t.$$set=m=>{"rollOnMount"in m&&n(4,l=m.rollOnMount),"scale"in m&&n(5,c=m.scale),"$$scope"in m&&n(7,i=m.$$scope)},[o,r,u,_,l,c,s,i]}class xe extends oe{constructor(e){super(),le(this,e,Ht,Pt,Z,{rollOnMount:4,scale:5})}}function Rt(t){let e,n,s=t[0][0]+"",i;return{c(){e=d("div"),n=d("p"),i=J(s),f(n,"class","svelte-s81sov"),f(e,"slot","sideOne"),f(e,"class","svelte-s81sov")},m(l,o){T(l,e,o),v(e,n),v(n,i)},p(l,o){o&1&&s!==(s=l[0][0]+"")&&ie(i,s)},d(l){l&&$(e)}}}function zt(t){let e,n,s=t[0][1]+"",i;return{c(){e=d("div"),n=d("p"),i=J(s),f(n,"class","svelte-s81sov"),f(e,"slot","sideTwo"),f(e,"class","svelte-s81sov")},m(l,o){T(l,e,o),v(e,n),v(n,i)},p(l,o){o&1&&s!==(s=l[0][1]+"")&&ie(i,s)},d(l){l&&$(e)}}}function Yt(t){let e,n,s=t[0][2]+"",i;return{c(){e=d("div"),n=d("p"),i=J(s),f(n,"class","svelte-s81sov"),f(e,"slot","sideThree"),f(e,"class","svelte-s81sov")},m(l,o){T(l,e,o),v(e,n),v(n,i)},p(l,o){o&1&&s!==(s=l[0][2]+"")&&ie(i,s)},d(l){l&&$(e)}}}function Bt(t){let e,n,s=t[0][3]+"",i;return{c(){e=d("div"),n=d("p"),i=J(s),f(n,"class","svelte-s81sov"),f(e,"slot","sideFour"),f(e,"class","svelte-s81sov")},m(l,o){T(l,e,o),v(e,n),v(n,i)},p(l,o){o&1&&s!==(s=l[0][3]+"")&&ie(i,s)},d(l){l&&$(e)}}}function It(t){let e,n,s=t[0][4]+"",i;return{c(){e=d("div"),n=d("p"),i=J(s),f(n,"class","svelte-s81sov"),f(e,"slot","sideFive"),f(e,"class","svelte-s81sov")},m(l,o){T(l,e,o),v(e,n),v(n,i)},p(l,o){o&1&&s!==(s=l[0][4]+"")&&ie(i,s)},d(l){l&&$(e)}}}function qt(t){let e,n,s=t[0][5]+"",i;return{c(){e=d("div"),n=d("p"),i=J(s),f(n,"class","svelte-s81sov"),f(e,"slot","sideSix"),f(e,"class","svelte-s81sov")},m(l,o){T(l,e,o),v(e,n),v(n,i)},p(l,o){o&1&&s!==(s=l[0][5]+"")&&ie(i,s)},d(l){l&&$(e)}}}function Ut(t){let e,n;return e=new xe({props:{scale:t[1],$$slots:{sideSix:[qt],sideFive:[It],sideFour:[Bt],sideThree:[Yt],sideTwo:[zt],sideOne:[Rt]},$$scope:{ctx:t}}}),{c(){K(e.$$.fragment)},m(s,i){Y(e,s,i),n=!0},p(s,[i]){const l={};i&2&&(l.scale=s[1]),i&5&&(l.$$scope={dirty:i,ctx:s}),e.$set(l)},i(s){n||(h(e.$$.fragment,s),n=!0)},o(s){w(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function Vt(t,e,n){let{faces:s=["🏃‍♂️","🤔","🎭","🚀","🛌","🎉"]}=e,{scale:i=1}=e;return t.$$set=l=>{"faces"in l&&n(0,s=l.faces),"scale"in l&&n(1,i=l.scale)},[s,i]}class et extends oe{constructor(e){super(),le(this,e,Vt,Ut,Z,{faces:0,scale:1})}}function Wt(t){let e;return{c(){e=d("div"),e.innerHTML='<div class="dot one-1 svelte-15wcno"></div>',f(e,"slot","sideOne")},m(n,s){T(n,e,s)},p:N,d(n){n&&$(e)}}}function Xt(t){let e;return{c(){e=d("div"),e.innerHTML='<div class="dot two-1 svelte-15wcno"></div> <div class="dot two-2 svelte-15wcno"></div>',f(e,"slot","sideTwo")},m(n,s){T(n,e,s)},p:N,d(n){n&&$(e)}}}function Kt(t){let e;return{c(){e=d("div"),e.innerHTML='<div class="dot three-1 svelte-15wcno"></div> <div class="dot three-2 svelte-15wcno"></div> <div class="dot three-3 svelte-15wcno"></div>',f(e,"slot","sideThree")},m(n,s){T(n,e,s)},p:N,d(n){n&&$(e)}}}function Gt(t){let e;return{c(){e=d("div"),e.innerHTML='<div class="dot four-1 svelte-15wcno"></div> <div class="dot four-2 svelte-15wcno"></div> <div class="dot four-3 svelte-15wcno"></div> <div class="dot four-4 svelte-15wcno"></div>',f(e,"slot","sideFour")},m(n,s){T(n,e,s)},p:N,d(n){n&&$(e)}}}function Jt(t){let e;return{c(){e=d("div"),e.innerHTML='<div class="dot five-1 svelte-15wcno"></div> <div class="dot five-2 svelte-15wcno"></div> <div class="dot five-3 svelte-15wcno"></div> <div class="dot five-4 svelte-15wcno"></div> <div class="dot five-5 svelte-15wcno"></div>',f(e,"slot","sideFive")},m(n,s){T(n,e,s)},p:N,d(n){n&&$(e)}}}function Qt(t){let e;return{c(){e=d("div"),e.innerHTML='<div class="dot six-1 svelte-15wcno"></div> <div class="dot six-2 svelte-15wcno"></div> <div class="dot six-3 svelte-15wcno"></div> <div class="dot six-4 svelte-15wcno"></div> <div class="dot six-5 svelte-15wcno"></div> <div class="dot six-6 svelte-15wcno"></div>',f(e,"slot","sideSix")},m(n,s){T(n,e,s)},p:N,d(n){n&&$(e)}}}function Zt(t){let e,n;return e=new xe({props:{scale:t[0],$$slots:{sideSix:[Qt],sideFive:[Jt],sideFour:[Gt],sideThree:[Kt],sideTwo:[Xt],sideOne:[Wt]},$$scope:{ctx:t}}}),{c(){K(e.$$.fragment)},m(s,i){Y(e,s,i),n=!0},p(s,[i]){const l={};i&1&&(l.scale=s[0]),i&2&&(l.$$scope={dirty:i,ctx:s}),e.$set(l)},i(s){n||(h(e.$$.fragment,s),n=!0)},o(s){w(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function xt(t,e,n){let{scale:s=1}=e;return t.$$set=i=>{"scale"in i&&n(0,s=i.scale)},[s]}class ze extends oe{constructor(e){super(),le(this,e,xt,Zt,Z,{scale:0})}}const en=[{theme:"actions",faces:["🏃‍♂️","🤔","🎭","🚀","🛌","🤣"]},{theme:"objects",faces:["🗝️","📜","🚪","🎸","🕰️","🍌"]},{theme:"places",faces:["🏰","🏞️","🌊","🏙️","🌋","🌈"]},{theme:"emotions",faces:["😄","😢","😠","😱","😍","😜"]},{theme:"weather",faces:["☀️","🌧️","❄️","🌪️","🌈","🌞"]},{theme:"animals",faces:["🐉","🐻","🐦","🐢","🦄","🐉"]},{theme:"funnyActions",faces:["🕺","🤣","🤪","🍔","🙈","😜"]},{theme:"sillyObjects",faces:["🍌","🤡","🍭","🧦","🎈","🎈"]},{theme:"quirkyWeather",faces:["🌈","☔","🌋","🌞","🌧️","🍝"]},{theme:"comicalEmotions",faces:["😜","🤯","🤔","🥳","🤖","🤔"]}];function tn(t){const e=t-1;return e*e*e+1}function tt(t,{delay:e=0,duration:n=400,easing:s=We}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:s,css:l=>`opacity: ${l*i}`}}function nn(t,{delay:e=0,duration:n=400,easing:s=tn,x:i=0,y:l=0,opacity:o=0}={}){const r=getComputedStyle(t),c=+r.opacity,u=r.transform==="none"?"":r.transform,_=c*(1-o),[m,k]=Fe(i),[O,F]=Fe(l);return{delay:e,duration:n,easing:s,css:(g,p)=>`
			transform: ${u} translate(${(1-g)*m}${k}, ${(1-g)*O}${F});
			opacity: ${c-_*p}`}}function Ye(t){let e,n,s;const i=t[6].default,l=q(i,t,t[5],null);return{c(){e=d("div"),l&&l.c()},m(o,r){T(o,e,r),l&&l.m(e,null),s=!0},p(o,r){t=o,l&&l.p&&(!s||r&32)&&V(l,i,t,t[5],s?U(i,t[5],r,null):W(t[5]),null)},i(o){s||(h(l,o),o&&(n||X(()=>{n=Oe(e,nn,{x:t[0],y:t[1],duration:t[2],delay:t[3]}),n.start()})),s=!0)},o(o){w(l,o),s=!1},d(o){o&&$(e),l&&l.d(o)}}}function sn(t){let e,n,s=t[4]&&Ye(t);return{c(){s&&s.c(),e=be()},m(i,l){s&&s.m(i,l),T(i,e,l),n=!0},p(i,[l]){i[4]?s?(s.p(i,l),l&16&&h(s,1)):(s=Ye(i),s.c(),h(s,1),s.m(e.parentNode,e)):s&&(ue(),w(s,1,1,()=>{s=null}),ae())},i(i){n||(h(s),n=!0)},o(i){w(s),n=!1},d(i){i&&$(e),s&&s.d(i)}}}function ln(t,e,n){let{$$slots:s={},$$scope:i}=e,l=!1,{x:o=0}=e,{y:r=0}=e,{duration:c=1e3}=e,{delay:u=0}=e;return Te(()=>{n(4,l=!0)}),t.$$set=_=>{"x"in _&&n(0,o=_.x),"y"in _&&n(1,r=_.y),"duration"in _&&n(2,c=_.duration),"delay"in _&&n(3,u=_.delay),"$$scope"in _&&n(5,i=_.$$scope)},[o,r,c,u,l,i,s]}class on extends oe{constructor(e){super(),le(this,e,ln,sn,Z,{x:0,y:1,duration:2,delay:3})}}function Be(t,e,n){const s=t.slice();return s[7]=e[n].faces,s[9]=n,s}function Ie(t){let e,n,s=Le(t[0]),i=[];for(let o=0;o<s.length;o+=1)i[o]=qe(Be(t,s,o));const l=o=>w(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=be()},m(o,r){for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(o,r);T(o,e,r),n=!0},p(o,r){if(r&11){s=Le(o[0]);let c;for(c=0;c<s.length;c+=1){const u=Be(o,s,c);i[c]?(i[c].p(u,r),h(i[c],1)):(i[c]=qe(u),i[c].c(),h(i[c],1),i[c].m(e.parentNode,e))}for(ue(),c=s.length;c<i.length;c+=1)l(c);ae()}},i(o){if(!n){for(let r=0;r<s.length;r+=1)h(i[r]);n=!0}},o(o){i=i.filter(Boolean);for(let r=0;r<i.length;r+=1)w(i[r]);n=!1},d(o){o&&$(e),ut(i,o)}}}function rn(t){let e,n,s,i,l;return n=new et({props:{faces:t[7],scale:t[3]}}),{c(){e=d("div"),K(n.$$.fragment),f(e,"class","emojiDice svelte-1vcocr5"),f(e,"style",s=`position: relative; left: ${t[9]>2?(t[9]-3)*125*t[3]+12:t[9]*125*t[3]+12}px; top: ${t[9]>2?125*t[3]+12:12}px`)},m(o,r){T(o,e,r),Y(n,e,null),l=!0},p(o,r){const c={};r&1&&(c.faces=o[7]),r&8&&(c.scale=o[3]),n.$set(c),(!l||r&8&&s!==(s=`position: relative; left: ${o[9]>2?(o[9]-3)*125*o[3]+12:o[9]*125*o[3]+12}px; top: ${o[9]>2?125*o[3]+12:12}px`))&&f(e,"style",s)},i(o){l||(h(n.$$.fragment,o),o&&(i||X(()=>{i=Oe(e,tt,{duration:100,delay:t[9]*50}),i.start()})),l=!0)},o(o){w(n.$$.fragment,o),l=!1},d(o){o&&$(e),B(n)}}}function cn(t){let e,n,s,i,l;return n=new et({props:{faces:t[7],scale:t[3]}}),{c(){e=d("div"),K(n.$$.fragment),f(e,"class","emojiDice svelte-1vcocr5"),f(e,"style",s=`position: relative; left: ${t[9]*150*t[3]+25}px; top: 25px`)},m(o,r){T(o,e,r),Y(n,e,null),l=!0},p(o,r){const c={};r&1&&(c.faces=o[7]),r&8&&(c.scale=o[3]),n.$set(c),(!l||r&8&&s!==(s=`position: relative; left: ${o[9]*150*o[3]+25}px; top: 25px`))&&f(e,"style",s)},i(o){l||(h(n.$$.fragment,o),o&&(i||X(()=>{i=Oe(e,tt,{duration:100,delay:t[9]*50}),i.start()})),l=!0)},o(o){w(n.$$.fragment,o),l=!1},d(o){o&&$(e),B(n)}}}function fn(t){let e,n,s,i;const l=[cn,rn],o=[];function r(c,u){return c[1]>950?0:1}return e=r(t),n=o[e]=l[e](t),{c(){n.c(),s=L()},m(c,u){o[e].m(c,u),T(c,s,u),i=!0},p(c,u){let _=e;e=r(c),e===_?o[e].p(c,u):(ue(),w(o[_],1,1,()=>{o[_]=null}),ae(),n=o[e],n?n.p(c,u):(n=o[e]=l[e](c),n.c()),h(n,1),n.m(s.parentNode,s))},i(c){i||(h(n),i=!0)},o(c){w(n),i=!1},d(c){c&&$(s),o[e].d(c)}}}function qe(t){let e,n;return e=new on({props:{delay:t[9]*50,x:-250,y:-250,$$slots:{default:[fn]},$$scope:{ctx:t}}}),{c(){K(e.$$.fragment)},m(s,i){Y(e,s,i),n=!0},p(s,i){const l={};i&1035&&(l.$$scope={dirty:i,ctx:s}),e.$set(l)},i(s){n||(h(e.$$.fragment,s),n=!0)},o(s){w(e.$$.fragment,s),n=!1},d(s){B(e,s)}}}function Ue(t){let e,n,s=t[4]&&Ie(t);return{c(){s&&s.c(),e=be()},m(i,l){s&&s.m(i,l),T(i,e,l),n=!0},p(i,l){i[4]?s?(s.p(i,l),l&16&&h(s,1)):(s=Ie(i),s.c(),h(s,1),s.m(e.parentNode,e)):s&&(ue(),w(s,1,1,()=>{s=null}),ae())},i(i){n||(h(s),n=!0)},o(i){w(s),n=!1},d(i){i&&$(e),s&&s.d(i)}}}function Ve(t){let e;return{c(){e=d("p"),e.textContent=`Drag the dice here in any order you like to create a story. You can double
      click on a dice to re-roll it.`,f(e,"class","svelte-1vcocr5")},m(n,s){T(n,e,s)},d(n){n&&$(e)}}}function un(t){let e,n,s,i,l,o,r,c,u,_,m,k,O,F=t[4],g,p,j,I,C,S,R,M,x;X(t[6]),i=new ze({props:{scale:.5}}),u=new ze({props:{scale:.5}});let b=Ue(t),D=t[1]>950&&Ve();return{c(){e=d("main"),n=d("div"),s=d("div"),K(i.$$.fragment),l=L(),o=d("h1"),o.textContent="Story Dice",r=L(),c=d("div"),K(u.$$.fragment),_=L(),m=d("button"),m.textContent="New Story",k=L(),O=d("section"),b.c(),g=L(),p=d("h2"),p.textContent="Your Story",j=L(),D&&D.c(),I=L(),C=d("section"),f(s,"class","svelte-1vcocr5"),f(o,"class","svelte-1vcocr5"),f(c,"class","svelte-1vcocr5"),f(n,"class","regularDice svelte-1vcocr5"),f(m,"class","button-53 svelte-1vcocr5"),f(O,"class","svelte-1vcocr5"),f(p,"class","svelte-1vcocr5"),f(C,"class","svelte-1vcocr5"),f(e,"style",S=`height: ${t[2]}px`),f(e,"class","svelte-1vcocr5")},m(y,z){T(y,e,z),v(e,n),v(n,s),Y(i,s,null),v(n,l),v(n,o),v(n,r),v(n,c),Y(u,c,null),v(e,_),v(e,m),v(e,k),v(e,O),b.m(O,null),v(e,g),v(e,p),v(e,j),D&&D.m(e,null),v(e,I),v(e,C),R=!0,M||(x=[H(window,"resize",t[6]),H(m,"click",t[5])],M=!0)},p(y,[z]){z&16&&Z(F,F=y[4])?(ue(),w(b,1,1,N),ae(),b=Ue(y),b.c(),h(b,1),b.m(O,null)):b.p(y,z),y[1]>950?D||(D=Ve(),D.c(),D.m(e,I)):D&&(D.d(1),D=null),(!R||z&4&&S!==(S=`height: ${y[2]}px`))&&f(e,"style",S)},i(y){R||(h(i.$$.fragment,y),h(u.$$.fragment,y),h(b),R=!0)},o(y){w(i.$$.fragment,y),w(u.$$.fragment,y),w(b),R=!1},d(y){y&&$(e),B(i),B(u),b.d(y),D&&D.d(),M=!1,G(x)}}}let an=6;function dn(t,e,n){let s=en.slice(0,an),i=1e4,l=500,o=1;s.sort(()=>.5-Math.random());let r=!1;const c=()=>{n(4,r=!1),s.sort(()=>.5-Math.random()),n(0,s=[...s]),setTimeout(()=>n(4,r=!0),100)};Te(()=>{n(4,r=!0),n(3,o=i>950?1:.5)});function u(){n(1,i=window.innerWidth),n(2,l=window.innerHeight)}return[s,i,l,o,r,c,u]}class _n extends oe{constructor(e){super(),le(this,e,dn,un,Z,{})}}new _n({target:document.getElementById("app")});
