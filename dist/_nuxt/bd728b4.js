(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{309:function(t,e,o){t.exports=o.p+"img/grads.9bda568.jpg"},318:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{firstColumnItems:[{icon:"mdi-language-javascript",iconColor:"yellow",text:"Javascript"},{icon:"mdi-vuejs",iconColor:"green",text:"Vues"},{icon:"mdi-vuetify",iconColor:"blue",text:"Vuetify"}],secondColumnItems:[{icon:"mdi-circle",iconColor:"green",text:"MongoDB"},{icon:"mdi-language-css3",iconColor:"blue",text:"CSS"},{icon:"mdi-language-html5",iconColor:"orange",text:"HTML"}],observer:null}},mounted:function(){this.observer=new IntersectionObserver(this.staggering,{rootMargin:"0px",threshold:.1}),this.observer.observe(this.$el)},beforeDestroy:function(){this.observer.unobserve(this.$el)},methods:{staggering:function(t){if(t[0].isIntersecting){var e=this.$gsap;e.from(".content-About",{x:-50,opacity:0,stagger:.2,duration:1,delay:.3}),e.from(".content-image",{scale:.8,opacity:0,stagger:.2,duration:1,delay:.3}),this.observer.disconnect()}}}},r=o(37),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("v-container",{staticClass:"home-title"},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"pa-5 content-About",attrs:{cols:"12",lg:"6"}},[e("h1",{staticClass:"font-weight-black"},[t._v("Who am I?")]),t._v(" "),e("p",{staticClass:"text-justify"},[t._v("\n        I am a recent graduate of Mariano Marcos State University, holding a\n        Bachelor of Science degree in Information Technology. As a self-taught\n        developer, I have passionately honed my skills to complement my formal\n        education. My e-portfolio showcases my passion for technology and my\n        commitment to continuous learning. I am eager to leverage my skills as\n        a developer to contribute innovative projects and the tech industry.\n        Thank you for visiting my e-portfolio!\n      ")]),t._v(" "),e("v-row",[e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"6\n        "}},[e("v-list",[e("v-list-item-group",t._l(t.firstColumnItems,(function(o,n){return e("v-list-item",{key:n},[e("v-list-item-icon",[e("v-icon",{attrs:{color:o.iconColor}},[t._v(t._s(o.icon))])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(o.text))])],1)],1)})),1)],1)],1),t._v(" "),e("v-col",{attrs:{cols:"12",sm:"6",md:"6",lg:"6\n        "}},[e("v-list",[e("v-list-item-group",t._l(t.secondColumnItems,(function(o,n){return e("v-list-item",{key:n},[e("v-list-item-icon",[e("v-icon",{attrs:{color:o.iconColor}},[t._v(t._s(o.icon))])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(o.text))])],1)],1)})),1)],1)],1)],1),t._v(" "),e("v-row",{attrs:{"no-gutters":""}},[e("a",{attrs:{href:"https://www.facebook.com/profile.php?id=100085329710121",target:"_blank",rel:"noopener noreferrer"}},[e("v-icon",{staticClass:"pl-4"},[t._v("mdi-facebook")])],1),t._v(" "),e("a",{attrs:{href:"https://www.instagram.com/lawre_nceval/?theme=dark",target:"_blank",rel:"noopener noreferrer"}},[e("v-icon",{staticClass:"pl-2"},[t._v("mdi-instagram")])],1),t._v(" "),e("a",{attrs:{href:"https://www.linkedin.com/in/lawrencevaldez/",target:"_blank",rel:"noopener noreferrer"}},[e("v-icon",{staticClass:"pl-2"},[t._v("mdi-linkedin")])],1),t._v(" "),e("a",{attrs:{href:"https://github.com/lawrence-V",target:"_blank",rel:"noopener noreferrer"}},[e("v-icon",{staticClass:"pl-2"},[t._v("mdi-github")])],1)])],1),t._v(" "),e("v-col",{staticClass:"d-flex justify-center align-center content-image",attrs:{cols:"12",lg:"6"}},[e("v-card",{staticClass:"my-12 pa-2",style:{"border-radius":"50%",width:t.$vuetify.breakpoint.mdAndDown?"60%":"90%",height:t.$vuetify.breakpoint.mdAndDown?"80%":"90%","object-fit":"contain"},attrs:{"max-width":"680"}},[e("v-img",{style:{"border-radius":"50%",width:(t.$vuetify.breakpoint.mdAndDown,"100%"),height:(t.$vuetify.breakpoint.mdAndDown,"100%"),"object-fit":"contain"},attrs:{src:o(309)}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);