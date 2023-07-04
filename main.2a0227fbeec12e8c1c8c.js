!function(){"use strict";var e={183:function(e,t,l){l.r(t)},476:function(e,t,l){l.r(t)},303:function(e,t,l){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),l(476),l(183);const i=s(l(508));Number(localStorage.getItem("levelNumber"));new i.default(0).start()},508:function(e,t,l){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=s(l(959));t.default=class{constructor(e){this.inputState=()=>{var e,t,l;(null===(e=this.input)||void 0===e?void 0:e.value)?null===(t=this.input)||void 0===t||t.classList.remove("css-diner__input_strobe"):null===(l=this.input)||void 0===l||l.classList.add("css-diner__input_strobe")},this.isCorrectAnswer=()=>{var e,t;(null===(e=this.input)||void 0===e?void 0:e.value.trim())===this.levels[this.levelNumber].correctAnswer?(null===(t=this.levelState)||void 0===t||t.classList.add("_done"),this.levels[this.levelNumber].isDone=!0,this.textEditor.classList.add("win"),this.textEditor.addEventListener("animationend",(()=>{this.textEditor.classList.remove("win"),this.renderNextLevel(),this.renderLevel(this.levelNumber)}))):(this.textEditor.classList.add("shake"),this.textEditor.addEventListener("animationend",(()=>{this.textEditor.classList.remove("shake")})))},this.renderPrevLevel=()=>{var e,t,l,s;(null===(e=this.prevLvlButton)||void 0===e?void 0:e.classList.contains("_active"))&&((null===(t=this.nextLvlButton)||void 0===t?void 0:t.classList.contains("_active"))||null===(l=this.nextLvlButton)||void 0===l||l.classList.add("_active"),this.levelNumber-=1,this.renderLevel(this.levelNumber),0===this.levelNumber&&(null===(s=this.prevLvlButton)||void 0===s||s.classList.remove("_active")))},this.renderNextLevel=()=>{var e,t,l,s;(null===(e=this.nextLvlButton)||void 0===e?void 0:e.classList.contains("_active"))&&((null===(t=this.prevLvlButton)||void 0===t?void 0:t.classList.contains("_active"))||null===(l=this.prevLvlButton)||void 0===l||l.classList.add("_active"),this.levelNumber+=1,this.renderLevel(this.levelNumber),this.levelNumber+1>=this.levels.length&&(null===(s=this.nextLvlButton)||void 0===s||s.classList.remove("_active")))},this.printAnswer=e=>{let t=e;t.length>0&&(this.input.value+=t[0],setTimeout((()=>{this.printAnswer(t.slice(1))}),200))},this.game=document.querySelector(".css-diner__game"),this.levelNumber=e,this.levels=i.default,this.title=document.querySelector(".css-diner__task"),this.helpButton=document.querySelector(".css-diner__help-btn"),this.table=document.querySelector(".css-diner__table"),this.textEditor=document.querySelector(".css-diner__text-editor"),this.input=document.querySelector(".css-diner__input"),this.enterButton=document.querySelector(".css-diner__enter-btn"),this.htmlField=document.querySelector(".css-diner__html-field"),this.curentLevel=document.querySelector(".help__curent-level"),this.maxLevels=document.querySelector(".help__max-levels"),this.levelState=document.querySelector(".help__level-state"),this.prevLvlButton=document.querySelector(".help__prev-level"),this.nextLvlButton=document.querySelector(".help__next-level"),this.helpTitle=document.querySelector(".help__title"),this.helpSubTitle=document.querySelector(".help__subtitle"),this.helpSyntax=document.querySelector(".help__syntax"),this.helpPromt=document.querySelector(".help__promt"),this.helpList=document.querySelector(".help__list")}start(){var e,t,l,s,i,n;this.renderLevel(this.levelNumber),null===(e=this.game)||void 0===e||e.addEventListener("mouseover",this.hover),null===(t=this.input)||void 0===t||t.addEventListener("input",this.inputState),null===(l=this.helpButton)||void 0===l||l.addEventListener("click",(()=>{this.input.value="",this.input.classList.remove("css-diner__input_strobe"),this.printAnswer(this.levels[this.levelNumber].correctAnswer)})),null===(s=this.enterButton)||void 0===s||s.addEventListener("click",this.isCorrectAnswer),document.addEventListener("keydown",(e=>{"Enter"!==e.code&&"NumpadEnter"!==e.code||(e.preventDefault(),this.isCorrectAnswer())})),null===(i=this.prevLvlButton)||void 0===i||i.addEventListener("click",this.renderPrevLevel),null===(n=this.nextLvlButton)||void 0===n||n.addEventListener("click",this.renderNextLevel)}renderLevel(e){this.title.textContent=this.levels[e].title,this.input.value="",this.input.classList.add("css-diner__input_strobe"),this.table.innerHTML=this.levels[e].table,this.htmlField.innerHTML=this.levels[e].htmlField,this.curentLevel.textContent=`${this.levels[e].curentLevel}`,this.maxLevels.textContent=`${this.levels.length}`,this.renderLevelState(),this.helpTitle.textContent=this.levels[e].helpTitle,this.helpSubTitle.textContent=this.levels[e].helpSubTitle,this.helpSyntax.textContent=this.levels[e].helpSyntax,this.helpPromt.innerHTML=this.levels[e].helpPromt,this.renderHelpList(this.levels[e].helpList)}renderLevelState(){var e,t;!0===this.levels[this.levelNumber].isDone?null===(e=this.levelState)||void 0===e||e.classList.add("_done"):null===(t=this.levelState)||void 0===t||t.classList.remove("_done")}renderHelpList(e){this.helpList.innerHTML="",e.forEach((e=>{const t=document.createElement("li");t.classList.add("help__example"),t.innerHTML=e,this.helpList.append(t)}))}hover(e){const t=e.target;if(t.hasAttribute("data-tag")){const e=t.getAttribute("data-tag");document.querySelectorAll(`[data-tag = ${e} ]`).forEach((e=>{e.classList.add("_hover")}))}if(!t.hasAttribute("data-tag")){t.getAttribute("data-tag");document.querySelectorAll("[data-tag]").forEach((e=>{e.classList.remove("_hover")}))}}}},959:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.default=[{title:"Select the plates",table:'<div data-tag="plate1" class="plate strobe"></div> <div data-tag="plate2" class="plate strobe"></div>',htmlField:'<div data-tag="plate1">&nbsp;&nbsp;&lt;plate/&gt;</div> <div data-tag="plate2">&nbsp;&nbsp;&lt;plate/&gt;</div>',curentLevel:1,isDone:!1,helpTitle:"Type Selector",helpSubTitle:"Select elements by their type",helpSyntax:"A",helpPromt:"Selects all elements of type <strong>A</strong>.Type refers to the type of tag, so <tag>div</tag>, <tag> p</tag> and <tag>ul</tag> are all different element types.",helpList:["<strong>div</strong> selects all <tag>div</tag> elements.","<strong>p</strong> selects all <tag>p</tag> elements."],correctAnswer:"plate"},{title:"Select the bento boxes",table:'<div data-tag="bento1" class="bento strobe"></div> <div data-tag="plate1" class="plate"></div> <div data-tag="bento2" class="bento strobe"></div>',htmlField:'<div data-tag="bento1">&nbsp;&nbsp;&lt;bento/&gt;</div> <div data-tag="plate1">&nbsp;&nbsp;&lt;plate/&gt;</div> <div data-tag="bento2">&nbsp;&nbsp;&lt;bento/&gt;</div>',curentLevel:2,isDone:!1,helpTitle:"Type Selector",helpSubTitle:"Select elements by their type",helpSyntax:"A",helpPromt:"Selects all elements of type <strong>A</strong>.Type refers to the type of tag, so <tag>div</tag>, <tag> p</tag> and <tag>ul</tag> are all different element types.",helpList:["<strong>div</strong> selects all <tag>div</tag> elements.","<strong>p</strong> selects all <tag>p</tag> elements."],correctAnswer:"bento"},{title:"Select the fancy plate",table:'<div data-tag="fancy1" class="fancy strobe"></div> <div data-tag="plate1" class="plate"></div> <div data-tag="bento1" class="bento"></div>',htmlField:'<div data-tag="fancy1">&nbsp;&nbsp;&lt;plate id="fancy" /&gt;</div> <div data-tag="plate1">&nbsp;&nbsp;&lt;plate/&gt;</div> <div data-tag="bento1">&nbsp;&nbsp;&lt;bento/&gt;</div>',curentLevel:3,isDone:!1,helpTitle:"ID Selector",helpSubTitle:"Select elements with an ID",helpSyntax:"#id",helpPromt:"Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.",helpList:['<strong>#cool</strong> selects any element with <strong>id="cool"</strong>','<strong>ul#long</strong> selects <strong>ul id="long"</strong>'],correctAnswer:"#fancy"},{title:"Select the apple on the plate",table:'<div data-tag="bento1" class="bento"></div><div data-tag="plate1" class="plate"><div data-tag="apple1" class="apple strobe"></div></div><div data-tag="apple2" class="apple"></div>',htmlField:'<div data-tag="bento1">&nbsp;&nbsp;&lt;bento /&gt;</div> <div data-tag="plate1">&nbsp;&nbsp;&lt;plate&gt;</div> <div data-tag=" apple1">&nbsp;&nbsp;&nbsp;&nbsp;&lt;apple /&gt;</div> <div data-tag="plate1">&nbsp;&nbsp;&lt;plate /&gt;</div> <div data-tag="apple2">&nbsp;&nbsp;&lt;apple /&gt;</div>',curentLevel:4,isDone:!1,helpTitle:"Descendant Selector",helpSubTitle:"Select an element inside another element",helpSyntax:"A  B",helpPromt:"Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.",helpList:["<strong>p</strong><strong>strong</strong>selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>",'<strong>#fancy</strong><strong>span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>'],correctAnswer:"plate apple"}]}},t={};function l(s){var i=t[s];if(void 0!==i)return i.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,l),n.exports}l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};l(303)}();