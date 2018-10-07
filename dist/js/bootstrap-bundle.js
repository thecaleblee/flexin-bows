function changeImage(t,e){var a=t.getElementsByTagName("img")[0],i=splitPath(a.getAttribute("srcset"),l=e.targetData.target.imageName),n=t.getElementsByTagName("source");a.srcset=i+".jpg";for(var r=0;r<n.length;r++){var s=n[r],o=s.getAttribute("media");if(o.includes("1200")){var l=e.targetData.target.imageName+"-lg.jpg",c=splitPath(s.getAttribute("srcset"),l);s.srcset=c}if(o.includes("992")){l=e.targetData.target.imageName+"-md.jpg",c=splitPath(s.getAttribute("srcset"),l);s.srcset=c}}}function splitPath(t,e){var a=t.split("/");return a.pop(),a.push(e),a.join("/")}function getTargets(){return document.getElementById("main-table").getElementsByTagName("a")}function bindOnClick(t){for(var e=document.getElementsByClassName("workout-image")[0],a=0;a<t.length;a++){t[a].addEventListener("click",function(){var t={currentImageData:getImageInfo(e),targetData:getTargetInfo(this)};changeImage(e,t)})}}function getImageInfo(t){var e=t.getElementsByTagName("img")[0],a=e.getAttribute("alt"),i=e.getAttribute("srcset"),n=t.getElementsByTagName("source"),r={};r.image={alt:a,srcset:i};for(var s=0;s<n.length;s++){var o=n[s];r["source"+s]={srcset:o.getAttribute("srcset"),media:o.getAttribute("media")}}return r}function getTargetInfo(t){var e={},a=t.getAttribute("data-exercise");return e.target={imageName:a},e}function initExerciseProgram(){bindOnClick(getTargets())}!function(t,e){var a=function(i,u){"use strict";if(!u.getElementsByClassName)return;var d,f,g=u.documentElement,r=i.Date,n=i.HTMLPictureElement,s="addEventListener",m="getAttribute",e=i[s],v=i.setTimeout,a=i.requestAnimationFrame||v,o=i.requestIdleCallback,h=/^picture$/i,l=["load","error","lazyincluded","_lazyloaded"],c={},y=Array.prototype.forEach,z=function(t,e){return c[e]||(c[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),c[e].test(t[m]("class")||"")&&c[e]},p=function(t,e){z(t,e)||t.setAttribute("class",(t[m]("class")||"").trim()+" "+e)},b=function(t,e){var a;(a=z(t,e))&&t.setAttribute("class",(t[m]("class")||"").replace(a," "))},A=function(e,a,t){var i=t?s:"removeEventListener";t&&A(e,a),l.forEach(function(t){e[i](t,a)})},C=function(t,e,a,i,n){var r=u.createEvent("Event");return a||(a={}),a.instance=d,r.initEvent(e,!i,!n),r.detail=a,t.dispatchEvent(r),r},E=function(t,e){var a;!n&&(a=i.picturefill||f.pf)?(e&&e.src&&!t[m]("srcset")&&t.setAttribute("srcset",e.src),a({reevaluate:!0,elements:[t]})):e&&e.src&&(t.src=e.src)},N=function(t,e){return(getComputedStyle(t,null)||{})[e]},T=function(t,e,a){for(a=a||t.offsetWidth;a<f.minSize&&e&&!t._lazysizesWidth;)a=e.offsetWidth,e=e.parentNode;return a},w=(x=[],I=[],D=x,P=function(){var t=D;for(D=x.length?I:x,_=!(B=!0);t.length;)t.shift()();B=!1},W=function(t,e){B&&!e?t.apply(this,arguments):(D.push(t),_||(_=!0,(u.hidden?v:a)(P)))},W._lsFlush=P,W),t=function(a,t){return t?function(){w(a)}:function(){var t=this,e=arguments;w(function(){a.apply(t,e)})}},M=function(t){var e,a,i=function(){e=null,t()},n=function(){var t=r.now()-a;t<99?v(n,99-t):(o||i)(i)};return function(){a=r.now(),e||(e=v(n,99))}};var B,_,x,I,D,P,W;!function(){var t,e={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in f=i.lazySizesConfig||i.lazysizesConfig||{},e)t in f||(f[t]=e[t]);i.lazySizesConfig=f,v(function(){f.init&&F()})}();var k=(ct=/^img$/i,ut=/^iframe$/i,dt="onscroll"in i&&!/(gle|ing)bot/.test(navigator.userAgent),ft=0,gt=0,mt=-1,vt=function(t){gt--,t&&t.target&&A(t.target,vt),(!t||gt<0||!t.target)&&(gt=0)},ht=function(t,e){var a,i=t,n="hidden"==N(u.body,"visibility")||"hidden"!=N(t.parentNode,"visibility")&&"hidden"!=N(t,"visibility");for(U-=e,Y+=e,V-=e,X+=e;n&&(i=i.offsetParent)&&i!=u.body&&i!=g;)(n=0<(N(i,"opacity")||1))&&"visible"!=N(i,"overflow")&&(a=i.getBoundingClientRect(),n=X>a.left&&V<a.right&&Y>a.top-1&&U<a.bottom+1);return n},yt=function(){var t,e,a,i,n,r,s,o,l,c=d.elements;if((G=f.loadMode)&&gt<8&&(t=c.length)){e=0,mt++,null==tt&&("expand"in f||(f.expand=500<g.clientHeight&&500<g.clientWidth?500:370),Z=f.expand,tt=Z*f.expFactor),ft<tt&&gt<1&&2<mt&&2<G&&!u.hidden?(ft=tt,mt=0):ft=1<G&&1<mt&&gt<6?Z:0;for(;e<t;e++)if(c[e]&&!c[e]._lazyRace)if(dt)if((o=c[e][m]("data-expand"))&&(r=1*o)||(r=ft),l!==r&&(K=innerWidth+r*et,Q=innerHeight+r,s=-1*r,l=r),a=c[e].getBoundingClientRect(),(Y=a.bottom)>=s&&(U=a.top)<=Q&&(X=a.right)>=s*et&&(V=a.left)<=K&&(Y||X||V||U)&&(f.loadHidden||"hidden"!=N(c[e],"visibility"))&&($&&gt<3&&!o&&(G<3||mt<4)||ht(c[e],r))){if(Nt(c[e]),n=!0,9<gt)break}else!n&&$&&!i&&gt<4&&mt<4&&2<G&&(H[0]||f.preloadAfterLoad)&&(H[0]||!o&&(Y||X||V||U||"auto"!=c[e][m](f.sizesAttr)))&&(i=H[0]||c[e]);else Nt(c[e]);i&&!n&&Nt(i)}},at=yt,nt=0,rt=f.throttleDelay,st=f.ricTimeout,ot=function(){it=!1,nt=r.now(),at()},lt=o&&49<st?function(){o(ot,{timeout:st}),st!==f.ricTimeout&&(st=f.ricTimeout)}:t(function(){v(ot)},!0),zt=function(t){var e;(t=!0===t)&&(st=33),it||(it=!0,(e=rt-(r.now()-nt))<0&&(e=0),t||e<9?lt():v(lt,e))},pt=function(t){p(t.target,f.loadedClass),b(t.target,f.loadingClass),A(t.target,At),C(t.target,"lazyloaded")},bt=t(pt),At=function(t){bt({target:t.target})},Ct=function(t){var e,a=t[m](f.srcsetAttr);(e=f.customMedia[t[m]("data-media")||t[m]("media")])&&t.setAttribute("media",e),a&&t.setAttribute("srcset",a)},Et=t(function(t,e,a,i,n){var r,s,o,l,c,u;(c=C(t,"lazybeforeunveil",e)).defaultPrevented||(i&&(a?p(t,f.autosizesClass):t.setAttribute("sizes",i)),s=t[m](f.srcsetAttr),r=t[m](f.srcAttr),n&&(o=t.parentNode,l=o&&h.test(o.nodeName||"")),u=e.firesLoad||"src"in t&&(s||r||l),c={target:t},u&&(A(t,vt,!0),clearTimeout(q),q=v(vt,2500),p(t,f.loadingClass),A(t,At,!0)),l&&y.call(o.getElementsByTagName("source"),Ct),s?t.setAttribute("srcset",s):r&&!l&&(ut.test(t.nodeName)?function(e,a){try{e.contentWindow.location.replace(a)}catch(t){e.src=a}}(t,r):t.src=r),n&&(s||l)&&E(t,{src:r})),t._lazyRace&&delete t._lazyRace,b(t,f.lazyClass),w(function(){(!u||t.complete&&1<t.naturalWidth)&&(u?vt(c):gt--,pt(c))},!0)}),Nt=function(t){var e,a=ct.test(t.nodeName),i=a&&(t[m](f.sizesAttr)||t[m]("sizes")),n="auto"==i;(!n&&$||!a||!t[m]("src")&&!t.srcset||t.complete||z(t,f.errorClass)||!z(t,f.lazyClass))&&(e=C(t,"lazyunveilread").detail,n&&L.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,gt++,Et(t,e,n,i,a))},Tt=function(){if(!$)if(r.now()-J<999)v(Tt,999);else{var t=M(function(){f.loadMode=3,zt()});$=!0,f.loadMode=3,zt(),e("scroll",function(){3==f.loadMode&&(f.loadMode=2),t()},!0)}},{_:function(){J=r.now(),d.elements=u.getElementsByClassName(f.lazyClass),H=u.getElementsByClassName(f.lazyClass+" "+f.preloadClass),et=f.hFac,e("scroll",zt,!0),e("resize",zt,!0),i.MutationObserver?new MutationObserver(zt).observe(g,{childList:!0,subtree:!0,attributes:!0}):(g[s]("DOMNodeInserted",zt,!0),g[s]("DOMAttrModified",zt,!0),setInterval(zt,999)),e("hashchange",zt,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(t){u[s](t,zt,!0)}),/d$|^c/.test(u.readyState)?Tt():(e("load",Tt),u[s]("DOMContentLoaded",zt),v(Tt,2e4)),d.elements.length?(yt(),w._lsFlush()):zt()},checkElems:zt,unveil:Nt}),L=(S=t(function(t,e,a,i){var n,r,s;if(t._lazysizesWidth=i,i+="px",t.setAttribute("sizes",i),h.test(e.nodeName||""))for(n=e.getElementsByTagName("source"),r=0,s=n.length;r<s;r++)n[r].setAttribute("sizes",i);a.detail.dataAttr||E(t,a.detail)}),R=function(t,e,a){var i,n=t.parentNode;n&&(a=T(t,n,a),(i=C(t,"lazybeforesizes",{width:a,dataAttr:!!e})).defaultPrevented||(a=i.detail.width)&&a!==t._lazysizesWidth&&S(t,n,i,a))},j=M(function(){var t,e=O.length;if(e)for(t=0;t<e;t++)R(O[t])}),{_:function(){O=u.getElementsByClassName(f.autosizesClass),e("resize",j)},checkElems:j,updateElem:R}),F=function(){F.i||(F.i=!0,L._(),k._())};var O,S,R,j;var H,$,q,G,J,K,Q,U,V,X,Y,Z,tt,et,at,it,nt,rt,st,ot,lt,ct,ut,dt,ft,gt,mt,vt,ht,yt,zt,pt,bt,At,Ct,Et,Nt,Tt;return d={cfg:f,autoSizer:L,loader:k,init:F,uP:E,aC:p,rC:b,hC:z,fire:C,gW:T,rAF:w}}(t,t.document);t.lazySizes=a,"object"==typeof module&&module.exports&&(module.exports=a)}(window),document.addEventListener("DOMContentLoaded",function(t){initExerciseProgram()});