(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{rZCR:function(n,t,e){"use strict";e.r(t);var l=e("LoAr"),o=function(){return function(){}}(),u=e("C9Ky"),r=function(){function n(){this.squareSelection=new l.l}return n.prototype.ngOnInit=function(){},n}(),a=l.mb({encapsulation:0,styles:[[".square[_ngcontent-%COMP%]{background:#fff;border:1px solid #999;float:left;font-size:24px;font-weight:700;line-height:34px;height:34px;margin-right:-1px;margin-top:-1px;padding:0;text-align:center;width:34px}.square[_ngcontent-%COMP%]:focus{outline:0;background:#ddd}.square.disabled[_ngcontent-%COMP%]{opacity:.65;cursor:not-allowed}"]],data:{}});function i(n){return l.Cb(2,[(n()(),l.ob(0,0,null,null,1,"button",[["class","square"]],[[2,"disabled",null],[8,"disabled",0]],[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.squareSelection.emit()&&l),l},null,null)),(n()(),l.Ab(1,null,["",""]))],null,function(n,t){var e=t.component;n(t,0,0,e.disabled,e.disabled),n(t,1,0,e.value)})}var c=e("WT9V"),s=new l.p("board"),b=[[0,1,2],[3,4,5],[6,7,8]],d=function(){function n(n){this.rows=n,this.coinPlacement=new l.l,this.reset=new l.l}return n.prototype.ngOnInit=function(){},n}(),p=l.mb({encapsulation:0,styles:[['.board-row[_ngcontent-%COMP%]:after{clear:both;content:"";display:table}.status[_ngcontent-%COMP%]{margin-bottom:10px}.action-button-container[_ngcontent-%COMP%]{text-align:center;margin-top:5px}.action-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#f3f3f3;border:1px solid #3c3c3c;padding:8px;cursor:pointer;opacity:.6;transition:.3s;text-decoration:none}.action-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{opacity:1;text-decoration:underline}']],data:{}});function f(n){return l.Cb(0,[(n()(),l.ob(0,0,null,null,1,"app-square",[],null,[[null,"squareSelection"]],function(n,t,e){var l=!0;return"squareSelection"===t&&(l=!1!==n.component.coinPlacement.emit(n.context.$implicit)&&l),l},i,a)),l.nb(1,114688,null,0,r,[],{value:[0,"value"],disabled:[1,"disabled"]},{squareSelection:"squareSelection"})],function(n,t){var e=t.component;n(t,1,0,e.squares[t.context.$implicit],e.stopPlay)},null)}function g(n){return l.Cb(0,[(n()(),l.ob(0,0,null,null,2,"div",[["class","board-row"]],null,null,null,null,null)),(n()(),l.fb(16777216,null,null,1,null,f)),l.nb(2,278528,null,0,c.i,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null)],function(n,t){n(t,2,0,t.context.$implicit)},null)}function m(n){return l.Cb(2,[(n()(),l.ob(0,0,null,null,5,"div",[],null,null,null,null,null)),(n()(),l.fb(16777216,null,null,1,null,g)),l.nb(2,278528,null,0,c.i,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null),(n()(),l.ob(3,0,null,null,2,"div",[["class","action-button-container"]],null,null,null,null,null)),(n()(),l.ob(4,0,null,null,1,"button",[],null,[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.reset.emit()&&l),l},null,null)),(n()(),l.Ab(-1,null,["Reset Game"]))],function(n,t){n(t,2,0,t.component.rows)},null)}var h=function(){function n(){this.handlePreview=new l.l}return n.prototype.ngOnInit=function(){},n}(),x=function(){return function(){}}(),C=l.mb({encapsulation:0,styles:[".breadcrumb[_ngcontent-%COMP%]{display:inline-block;box-shadow:0 0 15px 1px rgba(0,0,0,.35);overflow:hidden;border-radius:5px;counter-reset:flag}.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;outline:0;display:block;float:left;font-size:12px;line-height:36px;color:#fff;padding:0 10px 0 60px;background:#666;background:linear-gradient(#666,#333);position:relative}.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{padding-left:46px;border-radius:5px 0 0 5px}.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child:before{left:14px}.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{border-radius:0 5px 5px 0;padding-right:20px}.breadcrumb[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#333;background:linear-gradient(#333,#000)}.breadcrumb[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:after, .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{background:#333;background:linear-gradient(135deg,#333,#000)}.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:'';position:absolute;top:0;right:-18px;width:36px;height:36px;-webkit-transform:scale(.707) rotate(45deg);transform:scale(.707) rotate(45deg);z-index:1;background:#666;background:linear-gradient(135deg,#666,#333);box-shadow:2px -2px 0 2px rgba(0,0,0,.4),3px -3px 0 2px rgba(255,255,255,.1);border-radius:0 5px 0 50px}.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child:after{content:none}.breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{content:counter(flag);counter-increment:flag;text-align:center;border-radius:100%;width:20px;height:20px;line-height:20px;margin:8px 0;position:absolute;top:0;left:30px;background:#444;background:linear-gradient(#444,#222);font-weight:700}.flat[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .flat[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{background:#fff;color:#000;transition:.5s;cursor:pointer}.flat[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before{background:#fff;box-shadow:0 0 0 1px #ccc}.flat[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .flat[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:after, .flat[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .flat[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{background:#9eeb62}legend[_ngcontent-%COMP%]{margin:4px;color:#3c3c3c;opacity:.8}fieldset[_ngcontent-%COMP%]{border:.5px solid #ccc}"],data:{}});function O(n){return l.Cb(0,[(n()(),l.ob(0,0,null,null,1,"a",[],[[2,"active",null]],[[null,"click"]],function(n,t,e){var l=!0;return"click"===t&&(l=!1!==n.component.handlePreview.emit(n.context.index)&&l),l},null,null)),(n()(),l.Ab(1,null,[" "," "]))],null,function(n,t){n(t,0,0,t.component.currentPreview===t.context.index),n(t,1,0,t.context.index?"Move #"+t.context.index:"Game start")})}function P(n){return l.Cb(2,[(n()(),l.ob(0,0,null,null,5,"fieldset",[],null,null,null,null,null)),(n()(),l.ob(1,0,null,null,1,"legend",[],null,null,null,null,null)),(n()(),l.Ab(-1,null,["Game Preview"])),(n()(),l.ob(3,0,null,null,2,"div",[["class","breadcrumb flat"]],null,null,null,null,null)),(n()(),l.fb(16777216,null,null,1,null,O)),l.nb(5,278528,null,0,c.i,[l.O,l.L,l.s],{ngForOf:[0,"ngForOf"]},null)],function(n,t){n(t,5,0,t.component.history)},null)}var v,M=e("GovN"),y=Object(M.A)("gameFeature"),_=Object(M.C)(y,function(n){return n.game}),w=Object(M.C)(_,function(n){return n.history}),k=Object(M.C)(_,function(n){return n.stepNumber}),q=Object(M.C)(_,function(n){return!!n.winner}),j=Object(M.C)(_,function(n){return n.history[n.stepNumber].squares}),N=Object(M.C)(_,function(n){var t=n.winner;return t?"Winner: "+t:"Next Player: "+(n.xIsNext?"X":"O")});!function(n){n.Reset="[GAME] Reset",n.HandleCoinPlacement="[GAME] Handle Coin Placement",n.CalculateWinner="[GAME] Calculate Winner",n.JumpTo="[GAME] Jump To"}(v||(v={}));var F=function(){return function(){this.type=v.Reset}}(),$=function(){return function(n){this.payload=n,this.type=v.HandleCoinPlacement}}(),A=function(){return function(n){this.payload=n,this.type=v.JumpTo}}(),G=function(){function n(n){this.store=n,this.history$=this.store.pipe(Object(M.D)(w)),this.squares$=this.store.pipe(Object(M.D)(j)),this.status$=this.store.pipe(Object(M.D)(N)),this.stopPlay$=this.store.pipe(Object(M.D)(q)),this.stepNumber$=this.store.pipe(Object(M.D)(k))}return n.prototype.handleReset=function(){this.store.dispatch(new F)},n.prototype.jumpTo=function(n){this.store.dispatch(new A({index:n}))},n.prototype.handleCoinMovement=function(n){this.store.dispatch(new $({index:n}))},n}(),R=l.mb({encapsulation:0,styles:[['body[_ngcontent-%COMP%]{font:14px "Century Gothic",Futura,sans-serif;margin:20px}.game[_ngcontent-%COMP%]{display:flex;flex-direction:row}.game-info[_ngcontent-%COMP%]{margin-left:20px}button[_ngcontent-%COMP%]:disabled{opacity:.65;cursor:not-allowed}']],data:{}});function I(n){return l.Cb(2,[(n()(),l.ob(0,0,null,null,11,"div",[["class","game"]],null,null,null,null,null)),(n()(),l.ob(1,0,null,null,5,"div",[["class","game-board"]],null,null,null,null,null)),(n()(),l.ob(2,0,null,null,4,"app-board",[],null,[[null,"reset"],[null,"coinPlacement"]],function(n,t,e){var l=!0,o=n.component;return"reset"===t&&(l=!1!==o.handleReset()&&l),"coinPlacement"===t&&(l=!1!==o.handleCoinMovement(e)&&l),l},m,p)),l.yb(256,null,s,b,[]),l.nb(4,114688,null,0,d,[s],{squares:[0,"squares"],stopPlay:[1,"stopPlay"]},{coinPlacement:"coinPlacement",reset:"reset"}),l.xb(131072,c.b,[l.h]),l.xb(131072,c.b,[l.h]),(n()(),l.ob(7,0,null,null,4,"div",[["class","game-info"]],null,null,null,null,null)),(n()(),l.ob(8,0,null,null,3,"div",[],null,null,null,null,null)),(n()(),l.ob(9,0,null,null,2,"div",[["class","status"]],null,null,null,null,null)),(n()(),l.Ab(10,null,["",""])),l.xb(131072,c.b,[l.h]),(n()(),l.ob(12,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),l.ob(13,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),l.ob(14,0,null,null,3,"lib-game-preview",[],null,[[null,"handlePreview"]],function(n,t,e){var l=!0;return"handlePreview"===t&&(l=!1!==n.component.jumpTo(e)&&l),l},P,C)),l.nb(15,114688,null,0,h,[],{currentPreview:[0,"currentPreview"],history:[1,"history"]},{handlePreview:"handlePreview"}),l.xb(131072,c.b,[l.h]),l.xb(131072,c.b,[l.h])],function(n,t){var e=t.component;n(t,4,0,l.Bb(t,4,0,l.vb(t,5).transform(e.squares$)),l.Bb(t,4,1,l.vb(t,6).transform(e.stopPlay$))),n(t,15,0,l.Bb(t,15,0,l.vb(t,16).transform(e.stepNumber$)),l.Bb(t,15,1,l.vb(t,17).transform(e.history$)))},function(n,t){var e=t.component;n(t,10,0,l.Bb(t,10,0,l.vb(t,11).transform(e.status$)))})}function E(n){return l.Cb(0,[(n()(),l.ob(0,0,null,null,1,"app-game",[],null,null,null,I,R)),l.nb(1,49152,null,0,G,[M.n],null,null)],null,null)}var S=l.kb("app-game",G,E,{},{},[]),T=function(){return function(){}}(),D=e("981U"),J=function(){return function(){}}(),B=e("D57K"),W={history:[{squares:Array(9).fill(null)}],stepNumber:0,winner:null,xIsNext:!0},z=function(n){var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],e=null;return t.forEach(function(l,o){var u=t[o],r=u[0];n[r]&&n[r]===n[u[1]]&&n[r]===n[u[2]]&&(e=n[r])}),e},H=function(n,t){var e=n.history,l=n.stepNumber,o=n.winner,u=n.xIsNext,r=(e=e.slice(0,l+1))[e.length-1].squares.slice();return o||r[t]?B.a({},n):(r[t]=u?"X":"O",l=e.length,{history:e=e.concat({squares:r}),xIsNext:u=!u,stepNumber:l,winner:o=z(r)})};function L(n,t){switch(void 0===n&&(n=W),t.type){case v.Reset:return B.a({},W);case v.CalculateWinner:return B.a({},n,{winner:z(t.payload.squares)});case v.HandleCoinPlacement:var e=H(n,t.payload.index);return B.a({},n,e);case v.JumpTo:var l=t.payload.index;return B.a({},n,{stepNumber:l,xIsNext:l%2==0,winner:z(n.history[l].squares)});default:return B.a({},n)}}e.d(t,"GameModuleNgFactory",function(){return K});var K=l.lb(o,[],function(n){return l.tb([l.ub(512,l.j,l.ab,[[8,[u.a,S]],[3,l.j],l.y]),l.ub(4608,c.k,c.j,[l.u,[2,c.q]]),l.ub(1073742336,c.c,c.c,[]),l.ub(1073742336,x,x,[]),l.ub(1073742336,T,T,[]),l.ub(1073742336,D.m,D.m,[[2,D.s],[2,D.k]]),l.ub(1073742336,J,J,[]),l.ub(1024,M.E,function(){return[{}]},[]),l.ub(1024,M.j,function(){return[{key:"gameFeature",reducerFactory:M.z,metaReducers:[],initialState:void 0}]},[]),l.ub(1024,M.F,M.G,[l.q,M.E,M.j]),l.ub(1024,M.q,function(){return[{game:L}]},[]),l.ub(1024,M.r,function(n){return[n]},[M.q]),l.ub(1024,M.b,function(n,t,e){return[M.w(n,t,e)]},[l.q,M.q,M.r]),l.ub(1073873408,M.o,M.o,[M.F,M.b,M.g,M.p]),l.ub(1073742336,o,o,[]),l.ub(1024,D.i,function(){return[[{path:"",component:G}]]},[])])})}}]);