function surnameSorter(e,t){return e[0]<t[0]?-1:e[0]>t[0]?1:0}window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||window;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),document.querySelectorAll("ul.shuffle").forEach(function(e){for(var t=e.children.length;0<=t;t--)e.appendChild(e.children[Math.random()*t|0])}),document.querySelectorAll("ul.sort").forEach(function(e){var t=[];len=e.children.length;for(var n=0;n<len;n++){var o=e.children[n].innerText.split(/\s+/).slice(2,4);if("de"==o[0]||"van"==o[0])var i=o[1];else i=o[0];t.push([i,n])}t.sort(surnameSorter);var r=e.childNodes,u=[];for(var a in r)1==r[a].nodeType&&u.push(r[a]);for(a=0;a<u.length;++a)e.appendChild(u[t[a][1]])});var Konami$1=function(e){var n={addEvent:function(e,t,n,o){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&(e["e"+t+n]=n,e[t+n]=function(){e["e"+t+n](window.event,o)},e.attachEvent("on"+t,e[t+n]))},removeEvent:function(e,t,n){e.removeEventListener?e.removeEventListener(t,n):e.attachEvent&&e.detachEvent(t)},input:"",pattern:"38384040373937396665",keydownHandler:function(e,t){if(t&&(n=t),n.input+=e?e.keyCode:event.keyCode,n.input.length>n.pattern.length&&(n.input=n.input.substr(n.input.length-n.pattern.length)),n.input===n.pattern)return n.code(n._currentLink),n.input="",e.preventDefault(),!1},load:function(e){this._currentLink=e,this.addEvent(document,"keydown",this.keydownHandler,this),this.iphone.load(e)},unload:function(){this.removeEvent(document,"keydown",this.keydownHandler),this.iphone.unload()},code:function(e){window.location=e},iphone:{start_x:0,start_y:0,stop_x:0,stop_y:0,tap:!1,capture:!1,orig_keys:"",keys:["UP","UP","DOWN","DOWN","LEFT","RIGHT","LEFT","RIGHT","TAP","TAP"],input:[],code:function(e){n.code(e)},touchmoveHandler:function(e){if(1===e.touches.length&&!0===n.iphone.capture){var t=e.touches[0];n.iphone.stop_x=t.pageX,n.iphone.stop_y=t.pageY,n.iphone.tap=!1,n.iphone.capture=!1,n.iphone.check_direction()}},touchendHandler:function(){if(n.iphone.input.push(n.iphone.check_direction()),n.iphone.input.length>n.iphone.keys.length&&n.iphone.input.shift(),n.iphone.input.length===n.iphone.keys.length){for(var e=!0,t=0;t<n.iphone.keys.length;t++)n.iphone.input[t]!==n.iphone.keys[t]&&(e=!1);e&&n.iphone.code(n._currentLink)}},touchstartHandler:function(e){n.iphone.start_x=e.changedTouches[0].pageX,n.iphone.start_y=e.changedTouches[0].pageY,n.iphone.tap=!0,n.iphone.capture=!0},load:function(){this.orig_keys=this.keys,n.addEvent(document,"touchmove",this.touchmoveHandler),n.addEvent(document,"touchend",this.touchendHandler,!1),n.addEvent(document,"touchstart",this.touchstartHandler)},unload:function(){n.removeEvent(document,"touchmove",this.touchmoveHandler),n.removeEvent(document,"touchend",this.touchendHandler),n.removeEvent(document,"touchstart",this.touchstartHandler)},check_direction:function(){return x_magnitude=Math.abs(this.start_x-this.stop_x),y_magnitude=Math.abs(this.start_y-this.stop_y),x=this.start_x-this.stop_x<0?"RIGHT":"LEFT",y=this.start_y-this.stop_y<0?"DOWN":"UP",result=x_magnitude>y_magnitude?x:y,result=!0===this.tap?"TAP":result,result}}};return"string"==typeof e&&n.load(e),"function"==typeof e&&(n.code=e,n.load()),n};"undefined"!=typeof module&&void 0!==module.exports?module.exports=Konami$1:"function"==typeof define&&define.amd?define([],function(){return Konami$1}):window.Konami=Konami$1,new Konami(function(){var e=document.querySelector(".jumbo");e&&(e.style.backgroundImage="url(/images/wtf/serious.jpg)")}),setTimeout(function(){var e=document.querySelector("#jumbo-overlay");e&&e.classList.add("show")},500);
