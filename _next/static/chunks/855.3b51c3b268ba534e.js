"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[855],{1855:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var o=s(7437),n=s(2265),a=s(6154),r=s(5435),i=s(8252),l=s(732);let c=s(8034);function h(){return console.log("Rendering TrophyModel"),(0,o.jsxs)("group",{position:[0,-1,0],children:[(0,o.jsxs)("mesh",{position:[0,0,0],castShadow:!0,receiveShadow:!0,children:[(0,o.jsx)("cylinderGeometry",{args:[.6,.8,.2,32]}),(0,o.jsx)("meshStandardMaterial",{color:"#FFD700",metalness:.8,roughness:.2})]}),(0,o.jsxs)("mesh",{position:[0,.6,0],castShadow:!0,receiveShadow:!0,children:[(0,o.jsx)("cylinderGeometry",{args:[.2,.2,1,32]}),(0,o.jsx)("meshStandardMaterial",{color:"#FFD700",metalness:.8,roughness:.2})]}),(0,o.jsxs)("mesh",{position:[0,1.3,0],castShadow:!0,receiveShadow:!0,children:[(0,o.jsx)("cylinderGeometry",{args:[.4,.2,.8,32]}),(0,o.jsx)("meshStandardMaterial",{color:"#FFD700",metalness:.8,roughness:.2})]}),(0,o.jsxs)("group",{position:[0,1.3,0],children:[(0,o.jsxs)("mesh",{position:[-.5,0,0],rotation:[0,0,Math.PI/2],castShadow:!0,receiveShadow:!0,children:[(0,o.jsx)("torusGeometry",{args:[.2,.05,16,32,Math.PI]}),(0,o.jsx)("meshStandardMaterial",{color:"#FFD700",metalness:.8,roughness:.2})]}),(0,o.jsxs)("mesh",{position:[.5,0,0],rotation:[0,0,-Math.PI/2],castShadow:!0,receiveShadow:!0,children:[(0,o.jsx)("torusGeometry",{args:[.2,.05,16,32,Math.PI]}),(0,o.jsx)("meshStandardMaterial",{color:"#FFD700",metalness:.8,roughness:.2})]})]})]})}function d(){return(0,o.jsxs)(n.Suspense,{fallback:null,children:[(0,o.jsx)("ambientLight",{intensity:.5}),(0,o.jsx)("spotLight",{position:[10,10,10],angle:.15,penumbra:1,intensity:1,castShadow:!0}),(0,o.jsx)("pointLight",{position:[-10,-10,-10],intensity:.5}),(0,o.jsx)(r.qA,{preset:"sunset"}),(0,o.jsx)("group",{rotation:[.13,.1,0],children:(0,o.jsx)(h,{})}),(0,o.jsx)(i.z,{enableZoom:!1})]})}function u(){console.log("Rendering Trophy component");let[e,t]=(0,n.useState)(!0),s=()=>{console.log("Launching confetti");let e=Date.now()+15e3,t={startVelocity:30,spread:360,ticks:60,zIndex:0};function s(e,t){return Math.random()*(t-e)+e}let o=setInterval(function(){let n=e-Date.now();if(n<=0)return console.log("Confetti animation ended"),clearInterval(o);let a=50*(n/15e3);c(Object.assign({},t,{particleCount:a,origin:{x:s(.1,.3),y:Math.random()-.2}})),c(Object.assign({},t,{particleCount:a,origin:{x:s(.7,.9),y:Math.random()-.2}}))},250);return()=>{console.log("Cleaning up confetti interval"),clearInterval(o)}};return(0,o.jsxs)(l.E.div,{initial:{opacity:0},animate:{opacity:1},className:"h-screen w-full bg-gradient-to-b from-black to-purple-900 relative",children:[(0,o.jsxs)("div",{className:"absolute top-4 left-0 right-0 text-center z-10 space-y-4",children:[(0,o.jsx)("h1",{className:"text-6xl font-bold text-white animate-pulse",children:"\uD83C\uDFC6 Congratulations! \uD83C\uDFC6"}),(0,o.jsx)("h2",{className:"text-4xl font-bold text-white",style:{textShadow:"0 0 10px rgba(255,215,0,0.5)"},children:"David"}),e&&(0,o.jsx)("button",{onClick:()=>{console.log("Starting celebration"),t(!1),s()},className:"mt-4 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors",children:"Start Celebration! \uD83C\uDF89"})]}),(0,o.jsx)(a.Xz,{shadows:!0,camera:{position:[0,0,5],fov:75},gl:{antialias:!0,alpha:!1,preserveDrawingBuffer:!0},children:(0,o.jsx)(d,{})})]})}console.log("Trophy component loaded")}}]);