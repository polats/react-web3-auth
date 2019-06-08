(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{293:function(e,t,n){"use strict";(function(e){var a,r=n(32),i=n.n(r),o=n(75),c=n(54),s=n(55),u=n(57),l=n(56),d=n(94),f=n(58),p=n(5),b=n.n(p),h=n(95),m=n(6),w=n(162),k=n(33),v=n(294),g=n(295),y=n(76),O=n(296),j=n(779),E=window.web3,x={1:"https://mainnet.infura.io",3:"https://ropsten.infura.io",4:"https://rinkeby.infura.io",42:"https://kovan.infura.io",50:"http://localhost:8545"},W=j.bufferToHex(new e("Some message","utf8")),I=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).handleSignature=n.handleSignature.bind(Object(d.a)(n)),n.web3Login=n.web3Login.bind(Object(d.a)(n)),n.initializeWeb3Async(),n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"initializeWeb3Async",value:function(){var e=Object(o.a)(i.a.mark(function e(){var t,n,a,r,o,c,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.ethereum,y.isUndefined(t)){e.next=13;break}if(y.isUndefined(t.enable)){e.next=11;break}return e.prev=3,e.next=6,t.enable();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),console.log(e.t0);case 11:e.next=19;break;case 13:if(n=window.web3,y.isUndefined(n)||y.isUndefined(n.currentProvider)){e.next=18;break}t=n.currentProvider,e.next=19;break;case 18:return e.abrupt("return",void 0);case 19:if(!t){e.next=32;break}return e.next=22,new m.Web3Wrapper(t).getNetworkIdAsync();case 22:a=e.sent,r=t.isMetaMask||t.isToshi?new h.MetamaskSubprovider(t):new w.SignerSubprovider(t),(o=new h.Web3ProviderEngine).addProvider(r),o.addProvider(new h.RPCSubprovider(x[a])),o.start(),c=new m.Web3Wrapper(o),s=new h.ContractWrappers(o,{networkId:a}),y.map([s.exchange.abi,s.erc20Token.abi,s.etherToken.abi,s.forwarder.abi],function(e){return c.abiDecoder.addABI(e)}),this.setState({web3Wrapper:c,contractWrappers:s,web3:t});case 32:case"end":return e.stop()}},e,this,[[3,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"handleSignature",value:function(e,t){if(!e){console.log("address",a),console.log("msg",W),console.log("signed",t);var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:a,msg:W,signed:t})};fetch("/login",n).then(function(e){if(e.status>=200&&e.status<=300)return e.json();throw Error(e.statusText)}).then(function(e){console.log("succeed",e)}).catch(function(e){console.log("failed",e)})}}},{key:"web3Login",value:function(){a=E.eth.accounts[0],E.personal.sign(W,a,this.handleSignature)}},{key:"render",value:function(){return this.state&&this.state.contractWrappers&&this.state.web3Wrapper?b.a.createElement("div",{style:{paddingLeft:30,paddingRight:30,paddingBottom:30}},b.a.createElement(g.a,{web3Wrapper:this.state.web3Wrapper}),b.a.createElement(k.Content,{className:"container"},this.state.web3&&b.a.createElement("div",null,b.a.createElement("h1",null,"react-web3-auth demo"),b.a.createElement("button",{onClick:this.web3Login},"Login via Web3")),!this.state.web3&&b.a.createElement(v.a,null)),b.a.createElement(k.Footer,null)):b.a.createElement("div",null)}}]),t}(O.a);t.a=I}).call(this,n(2).Buffer)},294:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(54),r=n(55),i=n(57),o=n(56),c=n(58),s=n(5),u=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.createElement("div",null,s.createElement("h1",null," Please install Metamask "),s.createElement("a",{href:"https://metamask.io/",target:"_blank",rel:"noopener noreferrer",title:"Metamask is required. Click to download."},s.createElement("img",{src:"https://github.com/MetaMask/faq/raw/master/images/download-metamask-dark.png",width:"200px",alt:"Download Metamask"})),s.createElement("p",null," Once metamask is installed, please refresh this page "))}}]),t}(s.Component)},295:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(32),r=n.n(a),i=n(75),o=n(54),c=n(55),s=n(57),u=n(56),l=n(58),d=n(33),f=n(5),p="Mainnet",b="Unknown",h={1:p,3:"Ropsten",4:"Rinkeby",42:"Kovan",50:b},m=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={networkId:void 0},n.fetchNetworkDetailsAsync(),n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"fetchNetworkDetailsAsync",value:function(){var e=Object(i.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.props.web3Wrapper)){e.next=6;break}return e.next=4,t.getNetworkIdAsync();case 4:(n=e.sent)!==this.state.networkId&&this.setState({networkId:n});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderNetworkIndicator",value:function(){var e=this.state.networkId;if(e){var t=h[e]||b;return t===b||t===p?f.createElement(d.Tag,{isColor:"warning"},t," - Please connect to a test network"):f.createElement(d.Tag,{isColor:"primary"},t)}return f.createElement(d.Tag,{isColor:"danger"},"Disconnected")}},{key:"render",value:function(){var e=this.renderNetworkIndicator();return f.createElement(d.Navbar,{style:{zIndex:-1}},f.createElement(d.NavbarBrand,null,f.createElement(d.NavbarItem,null,f.createElement("strong",null," Network Status "),f.createElement(d.NavbarItem,null,e))))}}]),t}(f.Component)},296:function(e,t,n){"use strict";var a=n(32),r=n.n(a),i=n(75),o=n(54),c=n(55),s=n(57),u=n(56),l=n(58),d=n(5),f=function(e){function t(e){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).call(this,e))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(this.constructor.name+" componentDidMount");case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return null}}]),t}(d.Component);t.a=f},297:function(e,t,n){e.exports=n(298)},298:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),i=n(292),o=n.n(i),c=n(293);n(780);o.a.render(r.a.createElement(c.a,null),document.getElementById("root"))},364:function(e,t){},366:function(e,t){},387:function(e,t){},391:function(e,t){},703:function(e,t){},704:function(e,t){},756:function(e,t){}},[[297,1,2]]]);
//# sourceMappingURL=main.af07b8fd.chunk.js.map