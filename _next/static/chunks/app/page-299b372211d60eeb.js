(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2746:(e,s,i)=>{Promise.resolve().then(i.bind(i,3430))},3430:(e,s,i)=>{"use strict";i.r(s),i.d(s,{default:()=>c});var a=i(5155);i(3388),i(2115);let n=["Nominative","Genitive","Dative","Accusative","Ablative","Nominative","Genitive","Dative","Accusative","Ablative"],t={secondMas:["us","i","o","um","o","i","orum","is","os","is"],firstFem:["a","ae","ae","am","ā","ae","arum","is","as","is"],secondNeut:["um","i","o","um","o","a","orum","is","a","is"]},o=e=>{let{enabledDeclensions:s,onDeclensionPressed:i=()=>{}}=e;return(0,a.jsx)("div",{className:"grid p-4",style:{gridTemplateColumns:"repeat(".concat(s.length,", 1fr)"),gridTemplateRows:"auto"},children:s.map((e,o)=>(0,a.jsx)("div",{children:n.map((n,c)=>(0,a.jsx)("div",{className:"tile",onClick:()=>i({declension:e,isPlural:c>4,case:n}),style:{borderRight:o===s.length-1?"none":"",borderTop:0===c?"none":""},children:(0,a.jsx)("p",{children:t[e][c]})},"case-".concat(o,"-").concat(c)))},"declension-".concat(o)))})};function c(){return(0,a.jsx)("div",{className:"grid grid-rows-auto items-center justify-items-center overflow-auto min-h-screen",children:(0,a.jsx)(o,{enabledDeclensions:["secondMas","firstFem","secondNeut"],onDeclensionPressed:e=>{console.log(e)}})})}},3388:()=>{}},e=>{var s=s=>e(e.s=s);e.O(0,[821,441,517,358],()=>s(2746)),_N_E=e.O()}]);