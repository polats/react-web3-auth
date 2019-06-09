(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{292:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return f});var r,a=n(39),i=n(40),o=n(42),c=n(41),s=n(93),u=n(43),l=n(5),d=n(775),p=window.web3,b=d.bufferToHex(new e("Some message","utf8")),f=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(c.a)(t).call(this,e))).handleSignature=n.handleSignature.bind(Object(s.a)(n)),n.web3Login=n.web3Login.bind(Object(s.a)(n)),e.web3Wrapper&&(r=e.web3Wrapper.selectedAccount),n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleSignature",value:function(e,t){if(!e){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:r,msg:b,signed:t})};fetch("/login",n).then(function(e){if(e.status>=200&&e.status<=300)return e.json();throw Error(e.statusText)}).then(function(e){console.log("login success: ",e)}).catch(function(e){console.log("login failed: ",e)})}}},{key:"web3Login",value:function(){r=p.eth.accounts[0],p.personal.sign(b,r,this.handleSignature)}},{key:"render",value:function(){return l.createElement("div",null,l.createElement("button",{onClick:this.web3Login},"Login via Web3"))}}]),t}(l.Component)}).call(this,n(2).Buffer)},294:function(e,t,n){e.exports=n(777)},360:function(e,t){},362:function(e,t){},383:function(e,t){},387:function(e,t){},699:function(e,t){},700:function(e,t){},752:function(e,t){},777:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n.n(r),i=n(293),o=n.n(i),c=n(39),s=n(40),u=n(42),l=n(41),d=n(43),p=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.createElement("div",null,r.createElement("h1",null," Please install Metamask "),r.createElement("a",{href:"https://metamask.io/",target:"_blank",rel:"noopener noreferrer",title:"Metamask is required. Click to download."},r.createElement("img",{src:"https://github.com/MetaMask/faq/raw/master/images/download-metamask-dark.png",width:"200px",alt:"Download Metamask"})),r.createElement("p",null," Once metamask is installed, please refresh this page "))}}]),t}(r.Component),b=n(44),f=n.n(b),h=n(94),w=n(95),m=n(6),k=n(162),v=n(75),g=n(58),O="Mainnet",j="Unknown",y={1:O,3:"Ropsten",4:"Rinkeby",42:"Kovan",50:j},E=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={networkId:void 0},n.fetchNetworkDetailsAsync(),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"fetchNetworkDetailsAsync",value:function(){var e=Object(h.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.props.web3Wrapper)){e.next=6;break}return e.next=4,t.getNetworkIdAsync();case 4:(n=e.sent)!==this.state.networkId&&this.setState({networkId:n});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderNetworkIndicator",value:function(){var e=this.state.networkId;if(e){var t=y[e]||j;return t===j||t===O?r.createElement(g.Tag,{isColor:"warning"},t," - Please connect to a test network"):r.createElement(g.Tag,{isColor:"primary"},t)}return r.createElement(g.Tag,{isColor:"danger"},"Disconnected")}},{key:"render",value:function(){var e=this.renderNetworkIndicator();return r.createElement(g.Navbar,{style:{zIndex:-1}},r.createElement(g.NavbarBrand,null,r.createElement(g.NavbarItem,null,r.createElement("strong",null," Network Status "),r.createElement(g.NavbarItem,null,e))))}}]),t}(r.Component),x=n(292),W={1:"https://mainnet.infura.io",3:"https://ropsten.infura.io",4:"https://rinkeby.infura.io",42:"https://kovan.infura.io",50:"http://localhost:8545"},I=function(e){function t(e){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state&&this.state.contractWrappers&&this.state.web3Wrapper?a.a.createElement("div",{style:{paddingLeft:30,paddingRight:30,paddingBottom:30}},a.a.createElement(E,{web3Wrapper:this.state.web3Wrapper}),a.a.createElement(x.a,{web3Wrapper:this.state.web3Wrapper})):a.a.createElement("div",null,a.a.createElement(p,null))}}]),t}(function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).initializeWeb3Async(),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"initializeWeb3Async",value:function(){var e=Object(h.a)(f.a.mark(function e(){var t,n,r,a,i,o,c;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.ethereum,v.isUndefined(t)){e.next=13;break}if(v.isUndefined(t.enable)){e.next=11;break}return e.prev=3,e.next=6,t.enable();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),console.log(e.t0);case 11:e.next=19;break;case 13:if(n=window.web3,v.isUndefined(n)||v.isUndefined(n.currentProvider)){e.next=18;break}t=n.currentProvider,e.next=19;break;case 18:return e.abrupt("return",void 0);case 19:if(!t){e.next=32;break}return e.next=22,new m.Web3Wrapper(t).getNetworkIdAsync();case 22:r=e.sent,a=t.isMetaMask||t.isToshi?new w.MetamaskSubprovider(t):new k.SignerSubprovider(t),(i=new w.Web3ProviderEngine).addProvider(a),i.addProvider(new w.RPCSubprovider(W[r])),i.start(),o=new m.Web3Wrapper(i),c=new w.ContractWrappers(i,{networkId:r}),v.map([c.exchange.abi,c.erc20Token.abi,c.etherToken.abi,c.forwarder.abi],function(e){return o.abiDecoder.addABI(e)}),this.setState({web3Wrapper:o,contractWrappers:c,web3:t});case 32:case"end":return e.stop()}},e,this,[[3,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){console.log(this.state)}},{key:"componentDidMount",value:function(){var e=Object(h.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(this.constructor.name+" componentDidMount");case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return null}}]),t}(r.Component));n(776);o.a.render(a.a.createElement(I,null),document.getElementById("root"))}},[[294,1,2]]]);
//# sourceMappingURL=main.c15b3a79.chunk.js.map