(this.webpackJsonpwhiteglove=this.webpackJsonpwhiteglove||[]).push([[0],{27:function(e,t,n){e.exports=n(63)},32:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),c=n.n(l),o=(n(32),n(1)),i=(n(38),n(39),n(5)),u=n(18),m=n.n(u),s=n(20),d=n.n(s),f=function(e){return fetch("https://mnrwefss2q-dsn.algolia.net/1/indexes/Listing_production/query?x-algolia-agent=Algolia%20for%20JavaScript%20(3.33.0)%3B%20Browser&x-algolia-application-id=MNRWEFSS2Q&x-algolia-api-key=a3a4de2e05d9e9b463911705fb6323ad",{method:"post",body:JSON.stringify({params:"query=&filters=objectID:".concat(e)})}).then((function(e){return e.json()})).then((function(e){var t=e.hits[0];if(!t)throw new Error("No listing found");return t}))},g=function(e){return d()(e,f)},E=n(2),b=n(3);function p(){var e=Object(E.a)(["\n  padding: 0 10px;\n"]);return p=function(){return e},e}function h(){var e=Object(E.a)([""]);return h=function(){return e},e}function v(){var e=Object(E.a)([""]);return v=function(){return e},e}function w(){var e=Object(E.a)([""]);return w=function(){return e},e}function O(){var e=Object(E.a)(["\n  max-width: 100%;\n"]);return O=function(){return e},e}var j=b.a.img(O()),k=b.a.h2(w()),y=b.a.h5(v()),S=b.a.h4(h()),C=b.a.span(p()),x=function(e){var t,n=e.listing;return r.a.createElement(o.Card,null,r.a.createElement(j,{src:n.cover_photo.url}),r.a.createElement(k,null,n.title),r.a.createElement(y,null,n.user.username),r.a.createElement(S,null,(t=n.price,new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t))),r.a.createElement(o.Button,{modifier:"large--cta",onClick:function(){return window.open(function(e){return"https://www.grailed.com/listings/".concat(e.id)}(n),"_blank")}},r.a.createElement("span",null,"Open in Grailed"),r.a.createElement(C,null),r.a.createElement(o.Icon,{icon:"fa-external-link-alt"})))},B=function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],l=t[1],c=g(n),u=c.data,s=c.error;return r.a.createElement(o.Page,null,s&&r.a.createElement(o.AlertDialog,{isCancelable:!0},r.a.createElement("div",{className:"alert-dialog-title"},"Warning!"),r.a.createElement("div",{className:"alert-dialog-content"},"An error has occurred!"),r.a.createElement("div",{className:"alert-dialog-footer"},r.a.createElement(o.Button,{className:"alert-dialog-button"},"Ok"))),!u&&r.a.createElement(m.a,{delay:300,onError:console.error,onScan:function(e){console.log(e),l(e)},style:{width:"100%"}}),n&&u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(o.Card,null,r.a.createElement(o.Button,{modifier:"large--cta",onClick:function(){return l(null)}},"Back to Scanner")),r.a.createElement(x,{listing:u})))},N=n(23),I=n.n(N),T=n(24),q=n.n(T);function D(){var e=Object(E.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-gap: 10px;\n  border: 2px dashed black;\n  padding: 20px;\n"]);return D=function(){return e},e}var J=b.a.div(D()),P=function(e){var t=e.listing,n=Object(a.useRef)();return r.a.createElement(o.Card,null,r.a.createElement(q.a,{trigger:function(){return r.a.createElement(o.Button,null,"Print this out!")},content:function(){return n.current}}),r.a.createElement(J,{ref:n},r.a.createElement(I.a,{value:"".concat(t.id)}),r.a.createElement("div",null,r.a.createElement("p",null,t.title),r.a.createElement("p",null,t.user.username),r.a.createElement("p",null,new Date(t.created_at).toUTCString()))))},W=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(null),u=Object(i.a)(c,2),m=u[0],s=u[1],d=g(m),f=d.data,E=d.error;return r.a.createElement(o.Page,null,r.a.createElement(o.Card,null,r.a.createElement("h1",null,"Enter Listing Id"),r.a.createElement(o.Input,{value:n,onChange:function(e){return l(e.target.value)},modifier:"underbar",placeholder:"Listing Id"}),r.a.createElement(o.Button,{modifier:"large--cta",onClick:function(){return s(n)}},"Create QR code")),E&&r.a.createElement(o.Card,null,r.a.createElement("p",null,E.message)),f&&r.a.createElement(P,{listing:f}))},_=function(){return r.a.createElement(o.Page,null,r.a.createElement(o.Tabbar,{position:"bottom",tabBorder:!0,renderTabs:function(){return[{content:r.a.createElement(B,null),tab:r.a.createElement(o.Tab,{label:"Scan",icon:"fa-qrcode"})},{content:r.a.createElement(W,null),tab:r.a.createElement(o.Tab,{label:"Tag",icon:"fa-tag"})}]}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.7dae2f1f.chunk.js.map