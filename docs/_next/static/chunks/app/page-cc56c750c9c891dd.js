(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{62250:function(e,n,t){Promise.resolve().then(t.bind(t,56614))},56614:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return j}});var a=t(9268),l=t(15627),r=t.n(l),s=t(69786),i=t(86006);t(60668);var o=t(26842),d=t(22388),c=t(66779),g=t(35632),p=t(69022),u=t(51198),h=t(16802),m=t(76394),f=t.n(m),x=t(28317),w=t(53633);function j(){let[e,n]=(0,i.useState)({loggedIn:null,addr:null}),[t,l]=(0,i.useState)([{name:"123",addr:"123"},{name:"123",addr:"123"},{name:"123",addr:"123"},{name:"123",addr:"123"}]),[m,j]=(0,i.useState)({name:"123",addr:"123"}),[_,y]=(0,i.useState)(null),[v,b]=(0,i.useState)(!1),[N,S]=(0,i.useState)(""),[F,k]=(0,i.useState)(""),[T,I]=(0,i.useState)(!1),[C,O]=(0,i.useState)("https://dummyimage.com/250/ffffff/000000"),[R,Z]=(0,i.useState)([]),[E,z]=(0,i.useState)(null),[P,V]=(0,i.useState)(0);(0,i.useEffect)(()=>{if(E){let e=setInterval(()=>{s.tx(E).onceSealed().then(()=>{z(null),b(!1)})},1e3);return()=>clearInterval(e)}},[E]);let W=async()=>{b(!0),console.log("start inference",F,m.addr,e.addr);let n=await s.JG({cadence:'\n      import FlowNet from 0xd868d023029053e1\n      import FlowNetToken from 0xd868d023029053e1\n      import FungibleToken from 0x9a0766d93b6608b7\n\n\n      transaction(){\n          let sender: @FlowNetToken.Vault\n          let vault: Capability\n          let address: Address\n\n          prepare(signer: AuthAccount){\n\n              self.sender <- signer.borrow<&FlowNetToken.Vault>(from: FlowNetToken.VaultStoragePath)!.withdraw(amount: UFix64(1.0)) as! @FlowNetToken.Vault\n\n              self.vault = signer.getCapability(FlowNetToken.ReceiverPublicPath)\n\n              self.address = signer.address\n          }\n\n          execute{\n              FlowNet.requestInference(\n                  prompt:  "'.concat(F,'", \n                  requestor: ').concat(e.addr,",\n                  responder: ").concat(m.addr,",\n                  offer: 1,\n                  requestorVault: <- self.sender\n              )\n\n          }\n      }           \n      "),args:(e,n)=>[]});console.log(n)},A=async()=>{let e=await s.IO({cadence:"\n        import FlowNet from 0xd868d023029053e1\n        pub fun main(): {UInt64: FlowNet.Response} {\n            return FlowNet.getResponses()\n        }\n      "});console.log("images",e);let n=Object.keys(e),t=Object.values(e),a=[];for(let e=0;e<n.length;e++){console.log(t[e].url,t[e].url.includes("http"));let n=t[e].url.includes("http")?t[e].url:"https://ipfs.io/ipfs/"+t[e].url,l=await (await fetch(n)).json(),r=l.image.includes("http")?l.image:"https://ipfs.io/ipfs/"+l.image,s=l.prompt;console.log(r),a.push({link:r,description:s})}return Z(a),a.length},B=async()=>{let e=await s.IO({cadence:"\n        import FlowNet from 0xd868d023029053e1\n\n        pub fun main(): {Address: FlowNet.Responder} {\n            return FlowNet.getResponders()\n        }\n      "});console.log(e);let n=Object.keys(e),t=Object.values(e),a=[];for(let e=0;e<n.length;e++)a.push({name:n[e],addr:n[e],data:t[e]});l(a)};(0,i.useEffect)(()=>{s.ar.subscribe(n)},[]),(0,i.useEffect)(()=>{B(),A()},[]);let L=t.map((e,n)=>(0,a.jsxs)(c.Z,{style:{width:"80vw"},icon:(0,a.jsx)(p.JO$,{as:u.$5e}),label:"".concat(e.name),value:"".concat(e.name,"-").concat(n),children:["Address: ",e.addr]},"node-list-".concat(n))),q=()=>{b(!1),k(""),S(""),y(null),j(""),I(!1)},D=async()=>{let e=await A();for(;;){let n=await A();if(n>e)break;await new Promise(e=>setTimeout(e,2e3))}await A(),console.log(R[R.length-1]),console.log(R),O(R[R.length-1].link)},J=async()=>{await D(),setTimeout(()=>{b(!1),I(!0)},2e3)};(0,i.useEffect)(()=>{e.loggedIn||q()},[e]);let G=R.map((e,n)=>(0,a.jsx)("div",{className:"responsive",children:(0,a.jsxs)("div",{className:"gallery",children:[(0,a.jsx)("a",{target:"_blank",href:"img_5terre.jpg",children:(0,a.jsx)(f(),{src:e.link,alt:"Cinque Terre",width:512,height:512})}),(0,a.jsx)("div",{className:"desc",children:e.description})]})},n));return(0,a.jsxs)("div",{children:[(0,a.jsxs)("main",{className:r().main,children:[(0,a.jsx)("div",{id:"globeViz",style:{maxWidth:200,maxHeight:200}}),e.loggedIn?(0,a.jsxs)(a.Fragment,{children:[v&&(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(h.Z,{style:{marginTop:200},size:"lg",content:"Processing"})}),!v&&(0,a.jsx)(a.Fragment,{children:""==F||_?(0,a.jsx)("h4",{style:{marginTop:100,fontSize:22,fontWeight:400,display:"flex",alignSelf:"start"}}):(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{style:{display:"flex",alignSelf:"start",flexDirection:"column"},children:[(0,a.jsx)("h4",{style:{margin:4,fontSize:18},children:"Select Node:"}),(0,a.jsx)(g.Z,{onChange:e=>{console.log("On Changed"),console.log("Data : ",e.toString().split("-")),j({name:"Node",addr:e.toString().split("-")[0]})},defaultValue:"private","aria-label":"Visibility Level",children:L}),(0,a.jsx)(o.Z,{className:"hover",appearance:"primary",color:"yellow",style:{padding:12,fontSize:20,marginTop:16,fontWeight:600,width:"100%",background:"#2F476B",borderRadius:42},onClick:()=>{b(!0),y(m),W(),J()},children:"Select"})]})})}),""==F&&!v&&e.loggedIn&&(0,a.jsxs)("div",{style:{marginTop:10,width:"100%"},children:[(0,a.jsx)("div",{style:{fontSize:24,marginBottom:12},children:"Please enter a prompt to create a AI generation"}),(0,a.jsx)(d.Z,{as:"textarea",rows:3,placeholder:"Please enter prompt...",onChange:e=>{S(e)}}),(0,a.jsx)(o.Z,{onClick:()=>{k(N)},className:"hover",appearance:"primary",color:"yellow",style:{fontSize:20,padding:12,marginTop:10,fontWeight:600,width:"100%",background:"#2F476B",borderRadius:42},children:"Submit"})]})]}):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o.Z,{className:"hover cta-button",style:{margin:4,marginTop:200,padding:12,paddingLeft:32,paddingRight:32},onClick:s.Ib,children:"LOG IN TO PROCEED"})}),T&&(0,a.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:100},children:[(0,a.jsx)(f(),{alt:"",width:"400",height:"400",src:C}),(0,a.jsx)("div",{style:{marginTop:10},children:"Rate the inference: "}),(0,a.jsx)(w.Z,{defaultValue:3,max:10}),(0,a.jsx)(o.Z,{onClick:()=>{b(!1),k(""),S(""),y(null),j(""),I(!1)},className:"hover",appearance:"primary",color:"yellow",style:{padding:12,fontSize:20,marginTop:10,fontWeight:600,width:"100%",background:"#2F476B",borderRadius:42},children:"Rate"})]})]}),R.length>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x.Z,{offset:"run-in",speed:5,children:e=>{let{index:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{style:{whiteSpace:"nowrap",display:"flex",margin:4},children:G})})}}),(0,a.jsx)("br",{}),(0,a.jsx)(x.Z,{offset:"run-in",speed:5,direction:"toRight",children:e=>{let{index:n}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{style:{whiteSpace:"nowrap",display:"flex",margin:4},children:G})})}})]})]})}},60668:function(e,n,t){"use strict";(0,t(69786).vc)({"accessNode.api":"https://rest-testnet.onflow.org","discovery.wallet":"https://fcl-discovery.onflow.org/testnet/authn"})},15627:function(e){e.exports={main:"page_main__nw1Wk",description:"page_description__lvaOp",code:"page_code__9AfUJ",grid:"page_grid__JZ9Cz",card:"page_card__Cf__u",center:"page_center__NcdcW",logo:"page_logo__ikIZE",content:"page_content___38fW",vercelLogo:"page_vercelLogo__YYFl1","rs-radio-tile":"page_rs-radio-tile__QBGs_",rotate:"page_rotate__xIioM"}}},function(e){e.O(0,[738,535,842,394,708,253,698,744],function(){return e(e.s=62250)}),_N_E=e.O()}]);