(function(t,g){typeof exports=="object"&&typeof module!="undefined"?module.exports=g(require("vue")):typeof define=="function"&&define.amd?define(["vue"],g):(t=typeof globalThis!="undefined"?globalThis:t||self,t.vue3SlideVerify=g(t.Vue))})(this,function(t){"use strict";const g=Math.PI;function I(e,n){return e+n}function Y(e){return e*e}function D(e,n,o,s,r,u){e.beginPath(),e.moveTo(n,o),e.arc(n+s/2,o-r+2,r,.72*g,2.26*g),e.lineTo(n+s,o),e.arc(n+s+r-2,o+s/2,r,1.21*g,2.78*g),e.lineTo(n+s,o+s),e.lineTo(n,o+s),e.arc(n+r-2,o+s/2,r+.4,2.76*g,1.24*g,!0),e.lineTo(n,o),e.lineWidth=2,e.fillStyle="rgba(255, 255, 255, 0.7)",e.strokeStyle="rgba(255, 255, 255, 0.7)",e.stroke(),e[u](),e.globalCompositeOperation="destination-over"}function F(e,n){const o=document.createElement("img");return o.crossOrigin="Anonymous",o.onload=n,o.onerror=()=>{o.src=N(e)},o.src=N(e),o}function E(e,n){return Math.round(Math.random()*(n-e)+e)}function N(e){const n=e.length;return n>0?e[E(0,n-1)]:"https://picsum.photos/300/150/?image="+E(0,1084)}function R(){const e=t.reactive({x:0,y:0}),n=t.ref(!1),o=t.ref(!1),s=t.ref(0),r=t.ref([]);return{origin:e,success:n,isMouseDown:o,timestamp:s,trail:r,start:c=>{n.value||(c instanceof MouseEvent?(e.x=c.clientX,e.y=c.clientY):(e.x=c.changedTouches[0].pageX,e.y=c.changedTouches[0].pageY),o.value=!0,s.value=Date.now())},move:(c,d,h)=>{if(!o.value)return!1;let i=0,a=0;if(d instanceof MouseEvent?(i=d.clientX-e.x,a=d.clientY-e.y):(i=d.changedTouches[0].pageX-e.x,a=d.changedTouches[0].pageY-e.y),i<0||i+38>=c)return!1;h(i),r.value.push(a)},end:(c,d)=>{if(!o.value||(o.value=!1,(c instanceof MouseEvent?c.clientX:c.changedTouches[0].pageX)===e.x))return!1;s.value=Date.now()-s.value,d(s.value)},verify:(c,d,h)=>{const i=r.value,a=i.reduce(I)/i.length,m=i.map(b=>b-a),T=Math.sqrt(m.map(Y).reduce(I)/i.length),C=parseInt(c);return h=h<=1?1:h>10?10:h,{spliced:Math.abs(C-d)<=h,TuringTest:a!==T}}}}var ne="",$=(e,n)=>{const o=e.__vccOpts||e;for(const[s,r]of n)o[s]=r;return o};const P=t.defineComponent({name:"SlideVerify",props:{l:{type:Number,default:42},r:{type:Number,default:10},w:{type:Number,default:310},h:{type:Number,default:155},sliderText:{type:String,default:"Slide filled right"},accuracy:{type:Number,default:5},show:{type:Boolean,default:!0},imgs:{type:Array,default:()=>[]},interval:{type:Number,default:200}},emits:["success","again","fail","refresh"],setup(e,{emit:n}){const{imgs:o,l:s,r,w:u,h:l,accuracy:v,interval:w}=e,c=t.ref(!0),d=t.ref(0),h=t.ref(0),i=t.reactive({containerActive:!1,containerSuccess:!1,containerFail:!1}),a=t.reactive({iconCls:"arrow-right",width:"0",left:"0"}),m=t.ref(),T=t.ref(),C=t.ref(),b=t.ref();let k;const{success:V,start:X,move:J,end:K,verify:Q}=R(),A=()=>{var f,p;V.value=!1,i.containerActive=!1,i.containerSuccess=!1,i.containerFail=!1,a.iconCls="arrow-right",a.left="0",a.width="0",m.value.style.left="0",(f=b.value)==null||f.clearRect(0,0,u,l),(p=T.value)==null||p.clearRect(0,0,u,l),m.value.width=u,k.src=N(o)},Z=()=>{A(),n("refresh")};function x(f){a.left=f+"px";let p=(u-40-20)/(u-40)*f;m.value.style.left=p+"px",i.containerActive=!0,a.width=f+"px"}function ee(f){const{spliced:p,TuringTest:S}=Q(m.value.style.left,d.value,v);if(p){if(v===-1){i.containerSuccess=!0,a.iconCls="success",V.value=!0,n("success",f);return}S?(i.containerSuccess=!0,a.iconCls="success",V.value=!0,n("success",f)):(i.containerFail=!0,a.iconCls="fail",n("again"))}else i.containerFail=!0,a.iconCls="fail",n("fail"),setTimeout(()=>{A()},1e3)}const M=_(f=>{J(u,f,x)},w),B=f=>{K(f,ee)};return t.onMounted(()=>{var S,z;const f=(S=C.value)==null?void 0:S.getContext("2d"),p=(z=m.value)==null?void 0:z.getContext("2d");b.value=f,T.value=p,k=F(o,()=>{c.value=!1;const y=s+r*2+3;if(d.value=E(y+10,u-(y+10)),h.value=E(10+r*2,l-(y+10)),f&&p){D(f,d.value,h.value,s,r,"fill"),D(p,d.value,h.value,s,r,"clip"),f.drawImage(k,0,0,u,l),p.drawImage(k,0,0,u,l);const L=h.value-r*2-1,te=p.getImageData(d.value,L,y,y);m.value.width=y,p.putImageData(te,0,L)}}),document.addEventListener("mousemove",M),document.addEventListener("mouseup",B)}),t.onBeforeUnmount(()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",B)}),{block:m,canvas:C,loadBlock:c,containerCls:i,sliderBox:a,refresh:Z,sliderDown:X,touchStartEvent:X,touchMoveEvent:M,touchEndEvent:B}}});function _(e,n,o={leading:!0,trailing:!0}){const{leading:s,trailing:r,resultCallback:u}=o;let l=0,v=null;const w=function(...c){return new Promise((d,h)=>{const i=new Date().getTime();!l&&!s&&(l=i);const a=n-(i-l);if(a<=0){v&&(clearTimeout(v),v=null);const m=e.apply(this,c);u&&u(m),d(m),l=i;return}r&&!v&&(v=setTimeout(()=>{v=null,l=s?new Date().getTime():0;const m=e.apply(this,c);u&&u(m),d(m)},a))})};return w.cancel=function(){v&&clearTimeout(v),v=null,l=0},w}const q=e=>(t.pushScopeId("data-v-02c89212"),e=e(),t.popScopeId(),e),O=["width","height"],j=[q(()=>t.createElementVNode("i",{class:"iconfont icon-refresh"},null,-1))],U=["width","height"],W={class:"slide-verify-slider-text"};function G(e,n,o,s,r,u){return t.openBlock(),t.createElementBlock("div",{id:"slideVerify",class:"slide-verify",style:t.normalizeStyle({width:e.w+"px"}),onselectstart:"return false;"},[t.createElementVNode("div",{class:t.normalizeClass({"slider-verify-loading":e.loadBlock})},null,2),t.createElementVNode("canvas",{ref:"canvas",width:e.w,height:e.h},null,8,O),e.show?(t.openBlock(),t.createElementBlock("div",{key:0,class:"slide-verify-refresh-icon",onClick:n[0]||(n[0]=(...l)=>e.refresh&&e.refresh(...l))},j)):t.createCommentVNode("",!0),t.createElementVNode("canvas",{ref:"block",width:e.w,height:e.h,class:"slide-verify-block"},null,8,U),t.createElementVNode("div",{class:t.normalizeClass(["slide-verify-slider",{"container-active":e.containerCls.containerActive,"container-success":e.containerCls.containerSuccess,"container-fail":e.containerCls.containerFail}])},[t.createElementVNode("div",{class:"slide-verify-slider-mask",style:t.normalizeStyle({width:e.sliderBox.width})},[t.createElementVNode("div",{class:"slide-verify-slider-mask-item",style:t.normalizeStyle({left:e.sliderBox.left}),onMousedown:n[1]||(n[1]=(...l)=>e.sliderDown&&e.sliderDown(...l)),onTouchstart:n[2]||(n[2]=(...l)=>e.touchStartEvent&&e.touchStartEvent(...l)),onTouchmove:n[3]||(n[3]=(...l)=>e.touchMoveEvent&&e.touchMoveEvent(...l)),onTouchend:n[4]||(n[4]=(...l)=>e.touchEndEvent&&e.touchEndEvent(...l))},[t.createElementVNode("i",{class:t.normalizeClass(["slide-verify-slider-mask-item-icon","iconfont",`icon-${e.sliderBox.iconCls}`])},null,2)],36)],4),t.createElementVNode("span",W,t.toDisplayString(e.sliderText),1)],2)],4)}var H=$(P,[["render",G],["__scopeId","data-v-02c89212"]]);return H});
