(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{188:function(e,t,n){e.exports=n(318)},193:function(e,t,n){},318:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(16),s=n.n(r),i=(n(193),n(15)),c=function(e){return o.a.createElement("div",null,o.a.createElement(i.a,null,o.a.createElement(i.g,null,o.a.createElement(i.h,{variant:"title"},"Countries"))))},l=n(106),u=n(107),h=n(109),m=n(108),d=n(110),g=n(17),f=Object(g.withStyles)({card:{maxWidth:345},media:{height:140}})(function(e){var t=e.classes;return o.a.createElement("div",null,o.a.createElement(i.b,{className:t.card},o.a.createElement(i.c,null,o.a.createElement(i.e,{className:t.media,image:e.flag,title:"Contemplative Reptile"})),o.a.createElement(i.d,null,o.a.createElement(i.h,{variant:"h5",component:"h2"},e.name),o.a.createElement(i.h,{component:"p"},"More text about the texting text of a text"))))}),p=function(e){var t=[];return console.log(e.data,"props data inside cou ntries list"),e.data instanceof Array||e.data instanceof Object&&"404"!=e.data.status?(console.log(e.data,"props data"),e.data.map(function(e){t.push(o.a.createElement(f,{name:e.name,flag:e.flag}))})):t.push(o.a.createElement("div",null,"Man there's no such counry")),o.a.createElement("div",null,t)},v=["All","Africa","Americas","Asia","Europe","Oceania"],E=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={regions:"all"},n.handleChange=function(e){n.setState({regions:e.target.value.toLocaleLowerCase()}),console.log(n.state.regions)},n.onSearchChange=function(e){fetch("https://restcountries.eu/rest/v2/name/".concat(e.target.value)).then(function(e){return e.json()}).then(function(e){n.setState({regions:e})}).catch(function(e){return console.log(e)})},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.eu/rest/v2/all").then(function(e){return e.json()}).then(function(t){return e.setState({regions:t})}).then(function(t){return console.log(e.state.regions,"inside the res")}),console.log("Component Did Mount",this.state.regions)}},{key:"componentDidUpdate",value:function(){var e=this;"all"===this.state.regions&&this.state.regions!=Object?(console.log("Wohooooo I got updated IF STATEMENT"),fetch("https://restcountries.eu/rest/v2/all").then(function(e){return e.json()}).then(function(t){return e.setState({regions:t})})):"africa"!==this.state.regions&&"asia"!==this.state.regions&&"americas"!==this.state.regions&&"europe"!==this.state.regions&&"oceania"!==this.state.regions||(console.log("Wohooooo I got updated ELSE statement"),fetch("https://restcountries.eu/rest/v2/region/".concat(this.state.regions)).then(function(e){return e.json()}).then(function(t){return e.setState({regions:t})}))}},{key:"render",value:function(){console.log(this.state.regions,"render method");var e=this.props.classes;return o.a.createElement("div",{className:e.form},o.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},o.a.createElement(i.f,{id:"outlined-search",label:"Search for a Country",type:"search",className:e.textField,margin:"normal",variant:"outlined",onChange:this.onSearchChange}),o.a.createElement(i.f,{id:"outlined-select-currency-native",select:!0,label:"Native select",onChange:this.handleChange,SelectProps:{native:!0},helperText:"Please select your currency",margin:"normal",variant:"outlined"},v.map(function(e){return o.a.createElement("option",{key:e,value:e},e)}))),o.a.createElement(p,{data:this.state.regions}))}}]),t}(a.Component),y=Object(g.withStyles)({form:{paddingTop:"75px"},outLinedSearch:{paddingLeft:"50px"}})(E),b=function(){return o.a.createElement("div",null,o.a.createElement(c,null),o.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[188,1,2]]]);
//# sourceMappingURL=main.af431c9b.chunk.js.map