(this.webpackJsonpbppv=this.webpackJsonpbppv||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t){e.exports=function(){var e=this;this.TREEROOT=null;var t=[],a=50,n=100,l=0,i=0,r=0;function s(e,t,a,n){this.data=e,this.left=t,this.right=a,this.father=n,this.space=0,this.height=0,this.theta=0,this.index=-99,this.circle=new h}function c(){var e=this;this.index=0,this.assign=function(t){t.index=e.index,t.circle.id=e.index,e.index++}}function h(){this.id=0,this.x=0,this.y=0}function o(e){var t=[];return function e(t,a){if(null!==t){var n=t;null!==n.left&&e(n.left,a),null!==n.right&&e(n.right,a),null===n.left&&null===n.right&&a.push(t.data)}}(e,t),t}this.tallestTreeScale=!1,this.useCladogram=!1,this.maxNameLength=0,this.circles=[],this.getMaxHeight=function(t,a){i=0;for(var n=0;n<t;n++){var l=e.getTreeHeight(a[n]);l>i&&(i=l)}},this.getTreeHeight=function(e){for(var t=e.replace(/(#\d.\d+)([eE](\+|-)?[0-9]+)?/g,""),a=0;"("===t[a];)a++;var n=(t=t.replace(/\(+/,"")).match(/((\+|-)?([0-9]+\.[0-9]*|\.[0-9]+)([eE](\+|-)?[0-9]+)?)|(\w+)|(\()|(\))|(,)/g),l=0;l+=Number(n[1]);for(var i=0,r=2;r<n.length;r++)"("===n[r]?i++:")"===n[r]&&0===i&&a>1?(l+=Number(n[r+1]),a--):")"===n[r]&&i>0&&i--;return l},this.makeEdge=function(e,t,a,n){n.lineWidth=3,n.lineJoin="round",n.beginPath(),n.moveTo(e,t),n.lineTo(e,a),n.stroke()},this.printNames=function(t,n){for(var l=40+a,i=15+e.maxNameLength-12,r=0;r<t.length;r++)n.textAlign="start",n.textBaseline="middle",n.save(),n.translate(l,i),n.rotate(1.5*Math.PI),n.fillText(t[r],0,0),n.restore(),l+=a},this.postOrder=function(t,i,r,s){if(r){if(r){if(null===t)return;null!=t.left&&e.postOrder(t.left,i,!0,s),null!=t.right&&e.postOrder(t.right,i,!0,s),null===t.left&&null===t.right?(l+=a,t.space=l,s&&e.printTheta(t.space+40,15+e.maxNameLength,t,i,!0),e.makeEdge(t.space+40,15+e.maxNameLength,t.height*n+15+e.maxNameLength,i)):(t.space=(t.left.space+t.right.space)/2,i.lineWidth=2,i.lineJoin="round",i.beginPath(),i.moveTo(t.left.space+40,t.right.height*n+15+e.maxNameLength),i.lineTo(t.right.space+40,t.right.height*n+15+e.maxNameLength),i.stroke(),null!=t.father?(s&&e.printTheta(t.space+40,t.right.height*n+15+e.maxNameLength,t,i),e.makeEdge(t.space+40,t.right.height*n+15+e.maxNameLength,t.height*n+15+e.maxNameLength,i)):s&&e.drawRootTheta(t,i,t.theta,!1))}}else{if(null===t)return;null!==t.left&&e.postOrder(t.left,i,!1,s),null!==t.right&&e.postOrder(t.right,i,!1,s),null==t.left&&null==t.right?(l+=a,t.space=l,s&&e.printTheta(t.space+40,t.height*n+15+e.maxNameLength,t,i),e.makeEdge(t.space+40,t.height*n+15+e.maxNameLength,t.father.height*n+15+e.maxNameLength,i)):(t.space=(t.left.space+t.right.space)/2,i.lineWidth=2,i.lineJoin="round",i.beginPath(),i.moveTo(t.left.space+40,t.height*n+15+e.maxNameLength),i.lineTo(t.right.space+40,t.height*n+15+e.maxNameLength),i.stroke(),null!=t.father?(s&&e.printTheta(t.space+40,t.height*n+15+e.maxNameLength,t,i),e.makeEdge(t.space+40,t.height*n+15+e.maxNameLength,t.father.height*n+15+e.maxNameLength,i)):s&&e.drawRootTheta(t,i,t.theta,!0))}},this.drawOneTree=function(s,c,h,o,g,d,u,f){s<c.length&&(h?e.treeFromNewick(c[s],!1,d):e.treeFromNewick(c[s],!0,d),a=.9*(g.width-40)/t.length,l=0,n=h?f/e.TREEROOT.height:u?f/i:f/e.TREEROOT.left.height,h||(r=30/n,e.makeEdge(0,15+e.maxNameLength,15+e.maxNameLength+r*n,d),d.fillText(r.toPrecision(1),5,15+e.maxNameLength+r*n)),d.font="italic bold 16px serif",e.printNames(t,d),h?e.postOrder(e.TREEROOT,d,!1,o):e.postOrder(e.TREEROOT,d,!0,o))},this.treeFromNewick=function(a,n,l){var i=0;if(n){if(n){t=a.replace(/(#\d+\.\d+)|(\d+\.\d+)/g,"").replace(/e-\d+/g,"").replace(/:/g,"").match(/(?=\D)(\w+)/g),e.getMaxLenSN(t,l);var r=(a=a.replace(/e-\d+/g,"").replace(/:/g,"")).match(/((\+|-)?([0-9]+\.[0-9]*|\.[0-9]+)([eE](\+|-)?[0-9]+)?)|(\w+)|(\()|(\))|(,)|([#]\d+\.\d+)/g),c=new s("root",null,null,null,null,null,null);e.TREEROOT=c;for(var h=e.TREEROOT,o=0,g=0;g<r.length;g++)switch("("!==r[g]&&","!==r[g]||(c=new s("empty",null,null,null,null,null,null)),r[g]){case"(":h.left=c,c.father=h,h=c;break;case",":(h=h.father).right=c,c.father=h,h=c;break;case")":o=h.height,h=h.father;break;case";":break;default:h.order=i,null!=r[g].match(/(\+|-)?([0-9]+\.[0-9]*|\.[0-9]+)([eE](\+|-)?[0-9]+)?/)&&null==r[g].match(/([#]\d+\.\d+)/)?h.height=parseFloat(r[g])+o:r[g].match(/([#]\d+\.\d+)/)?h.theta=r[g]:(h.data=r[g],o=0)}}}else{var d=a.match(/(,)/g).length;a=a.replace(/e-\d+/g,"").replace(/:/g,""),t=a.match(/(?=\D)(\w+)/g),e.getMaxLenSN(t,l);var u=a.match(/([A-Za-z]+)|(\()|(\))|(,)|([#]\d+\.\d+)/g),f=new s("root",null,null,null);f.height=d,e.TREEROOT=f;var p=e.TREEROOT;p.height=0;for(var m=0;m<u.length;m++){switch("("!==u[m]&&","!==u[m]||(f=new s("empty",null,null,null)),u[m]){case"(":p.left=f,f.father=p,p=f;break;case",":(p=p.father).right=f,f.father=p,p=f;break;case")":(p=p.father).height=Math.max(p.right.height,p.left.height)+1;break;default:u[m].match(/([#]\d+\.\d+)/g)?(p.theta=u[m],p.order=i):(p.data=u[m],p.height=0)}i+=1}e.TREEROOT.height=Math.max(p.right.height,p.left.height)+1}},this.getMaxLenSN=function(t,a){for(var n=0,l=0,i=0;i<t.length;i++)t[i].length>n&&(n=t[i].length,l=i),a.font="italic bold 16px serif",e.maxNameLength=a.measureText(t[l]).width},this.printTheta=function(e,t,a,n,l){if(a&&a.theta){n.textAlign="start",n.textBaseline="middle",n.save();var i=e-70,r=t+15;n.translate(i,r);var s=a.theta.replace(/[#]/,"");n.fillText(s,0,0),n.restore()}},this.drawRootTheta=function(t,a,l,i){if(l)if(i){var r=(t.left.space+t.right.space)/2+40,s=t.height*n+15+e.maxNameLength;a.save(),a.translate(r,s+10),l=l.replace(/[#]/,""),a.fillText(l,0,0),a.restore()}else{var c=(t.left.space+t.right.space)/2+40,h=t.right.height*n+15+e.maxNameLength;a.save(),a.translate(c,h+10),l=l.replace(/[#]/,""),a.fillText(l,0,0),a.restore()}else console.log("bad")},this.displayIndex=function(t,a){if(0===e.circles.length){if(e.TREEROOT){var n=new c;!function e(t,a){if(null===t)return;null!==t.left&&null!==t.right&&a.assign(t);null!==t.left&&e(t.left,a);null!==t.right&&e(t.right,a)}(e.TREEROOT,n),e.DrawIndex(e.TREEROOT,t,a,e.maxNameLength)}}else e.TREEROOT&&(e.circles=[],e.DrawIndex(e.TREEROOT,t,a,e.maxNameLength))},this.DrawIndex=function(t,a,l,i){null!==t&&(null!==t.left&&null!==t.right&&(a?e.drawIndexToCanvas(t.space+40,t.right.height*n+15,i,t,l,a):e.drawIndexToCanvas(t.space+40,t.height*n+15,i,t,l,a)),null!==t.left&&e.DrawIndex(t.left,a,l,i),null!==t.right&&e.DrawIndex(t.right,a,l,i))},this.createCircle=function(t,a,n,l){e.circles.push({x:t,y:a,radius:n,id:l})},this.drawIndexToCanvas=function(t,a,l,i,r,s){var c=0;if(!s&&i.theta?c=30:s||i.theta||(c=50),null===i.father)if(s){var h=(i.left.space+i.right.space)/2+40,o=i.right.height*n+15+l;r.save(),r.beginPath(),e.createCircle(h,o+c,15,i.index),r.arc(h,o+c,15,0,2*Math.PI,!1),r.fillStyle="#4a4a4a",r.fill(),r.lineWidth=3,r.strokeStyle="#000000",r.stroke(),r.translate(h-4,o),r.fillStyle="#ffffff",r.fillText(i.index,0,0),r.restore()}else r.save(),r.beginPath(),e.createCircle(t,a+c,15,i.index),r.arc(t,a+c,15,0,2*Math.PI,!1),r.fillStyle="#4a4a4a",r.fill(),r.lineWidth=3,r.strokeStyle="#000000",r.stroke(),r.translate(t-4,a+c),r.fillStyle="#ffffff",r.fillText(i.index,0,0),r.restore();else if(r.textAlign="start",r.textBaseline="middle",r.save(),r.beginPath(),e.useCladogram)e.createCircle(t,a+c,15,i.index),r.arc(t,a+c,15,0,2*Math.PI,!1),r.fillStyle="#4a4a4a",r.fill(),r.lineWidth=3,r.strokeStyle="#000000",r.stroke(),r.translate(t-4,a+c),r.fillStyle="#ffffff",r.fillText(i.index,0,0),r.restore();else{var g=(i.left.space+i.right.space)/2+40,d=i.right.height*n+15+l;e.createCircle(g,d+c,15,i.index),r.arc(g,d+c,15,0,2*Math.PI,!1),r.fillStyle="#4a4a4a",r.fill(),r.lineWidth=3,r.strokeStyle="#000000",r.stroke(),r.translate(g-4,d+c),r.fillStyle="#ffffff",r.fillText(i.index,0,0),r.restore()}},this.swapNodes=function(s,c,h,g,d,u,f){e.TREEROOT&&(!function e(t,a){if(null===t)return;if(t.index===a&&t.left&&t.right){var n=t.left;t.left=t.right,t.right=n}null!==t.left&&e(t.left,a);null!==t.right&&e(t.right,a)}(e.TREEROOT,s),a=.9*(g.width-40)/t.length,l=0,n=c?f/e.TREEROOT.height:u?f/i:f/e.TREEROOT.left.height,c||(r=30/n,e.makeEdge(0,15+e.maxNameLength,15+e.maxNameLength+r*n,d),d.fillText(r.toPrecision(1),5,15+e.maxNameLength+r*n)),d.font="italic bold 16px serif",e.printNames(o(e.TREEROOT),d),c?e.postOrder(e.TREEROOT,d,!1,h):e.postOrder(e.TREEROOT,d,!0,h))},this.redrawCurrentTree=function(s,c,h,g,d,u){e.TREEROOT&&(a=.9*(h.width-40)/t.length,l=0,n=s?u/e.TREEROOT.height:d?u/i:u/e.TREEROOT.left.height,s||(r=30/n,e.makeEdge(0,15+e.maxNameLength,15+e.maxNameLength+r*n,g),g.font="italic bold 16px serif",g.fillText(r.toPrecision(1),5,15+e.maxNameLength+r*n)),g.font="italic bold 16px serif",e.printNames(o(e.TREEROOT),g),s?e.postOrder(e.TREEROOT,g,!1,c):e.postOrder(e.TREEROOT,g,!0,c))}}},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(7),r=a.n(i),s=(a(14),a(15),a(1)),c=a(2),h=a(4),o=a(3),g=a(5),d=function(e){return n.createElement("label",{className:"check-label"},n.createElement("input",{type:"checkbox",checked:e.checked,onChange:e.onChange}),n.createElement("span",{className:"checkmark"}),n.createElement("span",{className:"check-custom"},e.text))},u=a(8),f=a.n(u),p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(o.a)(t).call(this,e))).handleChange=function(e){a.setState({value:parseInt(e.target.value,10)}),a.onChange(a.state.value)},a.onChange=function(e){a.props.onChange(e)},a.arrowKeyChange=function(e){a.setState({value:e})},a.state={value:e.currTree,maxLen:500},a.val=a.props.currTree,a.step=50,a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({value:0})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("label",null,l.a.createElement("div",{style:{textAlign:"right"}},this.state.value,"/",this.state.maxLen),l.a.createElement("input",{className:"slider",id:"typeinp",type:"range",min:"0",max:this.state.maxLen,value:this.state.value,onChange:this.handleChange,step:1})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{maxLen:e.treeLength}}}]),t}(l.a.Component),m=a(17),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(h.a)(this,Object(o.a)(t).call(this,e))).IntersectWithCircle=function(e,t){return Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)<Math.pow(t.radius,2)},a.init=function(){null===a.state.treeVec[a.state.treeVec.length-2].match(";")&&a.treeVec.pop();var e=a.state.treeVec.length-2;a.utils.getMaxHeight(e,a.state.treeVec),a.utils.drawOneTree(a.state.currTree,a.state.treeVec,a.state.Cladogram,a.DisplayTheta,a.canvas,a.ctx,a.state.RelScaling,.9*a.ctx.canvas.height-a.utils.maxNameLength)},a.onWindowResize=function(){a.ctx.canvas.width=window.innerWidth,a.ctx.canvas.height=.8*window.innerHeight,a.ctx.clearRect(0,0,a.ctx.canvas.width,a.ctx.canvas.height),a.utils.redrawCurrentTree(a.state.Cladogram,a.DisplayTheta,a.canvas,a.ctx,a.state.RelScaling,.9*a.ctx.canvas.height-a.utils.maxNameLength),a.DisplayIndex&&a.runDisplayIndex(a.state.Cladogram,a.state.RelScaling,a.ctx)},a.slideToNextTree=function(e){a.DisplayIndex=!1;var t=Math.round(e);a.setState({currTree:t}),a.ctx.clearRect(0,0,a.ctx.canvas.width,a.ctx.canvas.height),a.utils.drawOneTree(t,a.state.treeVec,a.state.Cladogram,a.DisplayTheta,a.canvas,a.ctx,a.state.RelScaling,.9*a.ctx.canvas.height-a.utils.maxNameLength)},a.toggleIndexDisplay=function(){a.swapCount=0,a.utils.circles=[],a.DisplayIndex=!a.DisplayIndex,a.ctx.clearRect(0,0,a.ctx.canvas.width,a.ctx.canvas.height),a.utils.redrawCurrentTree(a.state.Cladogram,a.DisplayTheta,a.canvas,a.ctx,a.state.RelScaling,.9*a.ctx.canvas.height-a.utils.maxNameLength),a.DisplayIndex&&(a.runDisplayIndex(a.state.Cladogram,a.state.RelScaling,a.ctx),a.showSwapInstructions(a.ctx))},a.showSwapInstructions=function(e){a.utils.circles.length>0&&(e.save(),e.translate(0,e.canvas.height-20),e.fillText("Instruction:\nClick on any node bubbles\non the screen to swap its associated branches ",0,0),e.restore())},a.runDisplayIndex=function(e,t,n){a.swapCount<3&&a.showSwapInstructions(a.ctx),e?a.utils.displayIndex(!1,n):a.utils.displayIndex(!0,n),a.swapCount++},a.saveAsPDF=function(){a.DisplayIndex&&a.toggleIndexDisplay();var e=a.canvas.toDataURL(),t=new f.a;t.addImage(e,"JPEG",10,-145,300,150,null,null,-90),t.save("download.pdf")},a.toggleTheta=function(){a.ctx.clearRect(0,0,a.ctx.canvas.width,a.ctx.canvas.height),a.setState({DisplayTheta:!a.state.DisplayTheta}),a.DisplayTheta=!a.DisplayTheta,a.utils.redrawCurrentTree(a.state.Cladogram,a.DisplayTheta,a.canvas,a.ctx,a.state.RelScaling,.9*a.ctx.canvas.height-a.utils.maxNameLength),a.DisplayIndex&&a.runDisplayIndex(a.state.Cladogram,a.state.RelScaling,a.ctx)},a.state={receivedData:a.props.received,treeVec:a.props.trees,tallestTreeScale:!1,useCladogram:!1,maxNameLength:0,RelScaling:a.props.relscal,Cladogram:a.props.clado,updateMe:!0,currTree:0,DisplayTheta:!1},a.currentTree=0,a.utils=new m,a.DisplayIndex=!1,a.swapCount=0,a.DisplayTheta=!1,a}return Object(g.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.canvas=this.refs.canvas,this.ctx=this.canvas.getContext("2d"),this.ctx.save(),this.ctx.font="italic 25px serif",this.ctx.fillText("Please select input file",(this.canvas.width-280)/2,this.canvas.height/2),this.ctx.restore(),window.addEventListener("resize",this.onWindowResize,!1),this.canvas.addEventListener("click",(function(t){if(e.utils.circles.length>0){var a={x:t.clientX-e.ctx.canvas.offsetLeft,y:t.clientY-e.ctx.canvas.offsetTop};e.utils.circles.forEach((function(t){e.IntersectWithCircle(a,t)&&(e.ctx.clearRect(0,0,e.ctx.canvas.width,e.ctx.canvas.height),e.utils.swapNodes(t.id,e.state.Cladogram,e.DisplayTheta,e.canvas,e.ctx,e.state.RelScaling,.9*e.ctx.canvas.height-e.utils.maxNameLength),e.DisplayIndex&&e.runDisplayIndex(e.state.Cladogram,e.state.RelScaling,e.ctx))}))}})),this.utils.tallestTreeScale=this.state.RelScaling,this.utils.useCladogram=this.state.Cladogram,window.addEventListener("keydown",(function(t){e.utils.TREEROOT&&(37===t.keyCode?(t.preventDefault(),e.state.currTree>0&&(e.setState({currTree:e.state.currTree-1}),e.ctx.clearRect(0,0,e.ctx.canvas.width,e.ctx.canvas.height),e.utils.drawOneTree(e.state.currTree,e.state.treeVec,e.state.Cladogram,e.DisplayTheta,e.canvas,e.ctx,e.state.RelScaling,.9*e.ctx.canvas.height-e.utils.maxNameLength),e.refs.slider.arrowKeyChange(e.state.currTree))):39===t.keyCode&&(t.preventDefault(),e.state.currTree<e.state.treeVec.length&&(e.setState({currTree:e.state.currTree+1}),e.ctx.clearRect(0,0,e.ctx.canvas.width,e.ctx.canvas.height),e.utils.drawOneTree(e.state.currTree,e.state.treeVec,e.state.Cladogram,e.DisplayTheta,e.canvas,e.ctx,e.state.RelScaling,.9*e.ctx.canvas.height-e.utils.maxNameLength),e.refs.slider.arrowKeyChange(e.state.currTree))))})),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&(this.refs.refresh.style.display="none")}},{key:"componentDidUpdate",value:function(){!0===this.state.receivedData&&(this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this.init()),this.DisplayIndex&&(this.DisplayIndex=!this.DisplayIndex,this.utils.circles=[]),this.utils.tallestTreeScale=this.state.RelScaling,this.utils.useCladogram=this.state.Cladogram}},{key:"render",value:function(){var e=this,t=this.state,a=t.currTree,n=t.treeVec;return l.a.createElement("div",null,l.a.createElement("canvas",{ref:"canvas",width:window.innerWidth,height:.75*window.innerHeight}),l.a.createElement(p,{ref:"slider",currTree:a,onChange:function(t){return e.slideToNextTree(t)},treeLength:n.length}),l.a.createElement("div",{className:"display-save-group"},l.a.createElement("button",{className:"display-btn",onClick:this.toggleIndexDisplay},"Swap Nodes"),"\xa0\xa0",l.a.createElement("button",{className:"save-btn",onClick:this.saveAsPDF},"Save as PDF"),"\xa0\xa0",l.a.createElement("button",{ref:"refresh",onClick:this.props.refresh},"Refresh"),"\xa0\xa0",l.a.createElement(d,{text:"Display Theta",onChange:this.toggleTheta,checked:this.state.DisplayTheta})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{receivedData:e.received,treeVec:e.trees,RelScaling:e.relscal,Cladogram:e.clado}}}]),t}(l.a.Component),v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(h.a)(this,Object(o.a)(t).call(this))).handleUpload=function(t){if(window.File&&window.FileReader&&window.FileList&&window.Blob){var a=new FileReader,n=document.querySelector("input[type=file]").files[0];n&&(n.type.match(/text.*/)&&!n.type.match(/text\/javascript/)?(a.onload=function(t){e.varifyInputFile(t.target.result.split("\n"))?(e.setState({trees:t.target.result.split("\n"),uploaded:!0,currLen:t.target.result.split("\n").length}),e.setState({currLen:t.target.result.split("\n").length}),e.past=e.state.currLen):(console.log("bad input"),e.forceUpdate())},e.CurrFile=n,a.readAsText(n)):alert("Upload was not a .txt file"))}else alert("Your browswer is too old for HTML5 file uploads. Please update.")},e.alterUpload=function(){var t=e.refs.f.files[0],a=new FileReader;e.FILE=null,a.onload=function(t){var a=t.target.result;e.FILE=a.split("n"),console.log(a.split("\n").length)},a.readAsText(t)},e.alterRefresh=function(t){var a=e.refs.f.files[0],n=new FileReader;n.onload=function(e){var t=e.target.result;console.log(t.split("\n").length)},n.readAsText(a)},e.handleRefresh=function(t){if(null!==e.CurrFile){var a=new FileReader,n=document.querySelector("input[type=file]").files[0];console.log(e.state.currLen),n.type.match(/text.*/)&&!n.type.match(/text\/javascript/)?(a.onload=function(t){e.varifyInputFile(t.target.result.split("\n"))&&(console.log("hiya"),e.setState({trees:t.target.result.split("\n"),uploaded:!0,currLen:t.target.result.split("\n").length}),console.log(e.state.currLen),e.logDiffLength(),e.past=e.state.currLen)},a.readAsText(n)):alert("Uploaded file is not a .txt")}},e.logDiffLength=function(){e.past!==e.state.currLen&&(e.past,e.state.currLen)},e.handleRelScalingChange=function(t){e.setState({RelScaling:!0,Cladogram:!1,AbsScaling:!1})},e.handleCladogramChange=function(t){e.setState({Cladogram:!0,RelScaling:!1,AbsScaling:!1})},e.handleAbsScaling=function(t){e.setState({AbsScaling:!0,Cladogram:!1,RelScaling:!1})},e.varifyInputFile=function(e){for(var t="",a=!1,n=0;n<e.length-1;n++){var l=e[n].replace(/(\s[#]\d+\.\d+)/g,"");l.match(/(\()/g).length!==l.match(/(\))/g).length&&(t+="Mismatch parenthesis at line ".concat(n+1,"\n"),a=!0),l.match(/(?=\D)(\w+)/g).length!==l.match(/,/g).length+1&&(t+="Incorrect tree depth at line ".concat(n+1,"\n"),a=!0),l.match(/(?=\D)(\w+)/g).length!==l.match(/(?=\D)(\w+)(:\s\d+\.\d+)/g).length&&(t+="Mismatch number of species and brlength at line ".concat(n+1,"\n"),a=!0)}return!a||(alert(t),!1)},e.state={uploaded:!1,trees:[],RelScaling:!0,Cladogram:!1,AbsScaling:!1,currLen:0},e.CurrFile=null,e.currFileLength=0,e.previousFileLen=0,e.past=0,e}return Object(g.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{paddingLeft:30,paddingTop:0,paddingRight:30,paddingBottom:30}},l.a.createElement("div",{className:"title"},"BBP TREE VISUALIZER"),l.a.createElement("div",null,"\xa0"),l.a.createElement(x,{isFireFox:this.isFireFox,received:this.state.uploaded,trees:this.state.trees,clado:this.state.Cladogram,relscal:this.state.RelScaling,refresh:this.handleRefresh}),l.a.createElement("label",{className:"file-inp"},l.a.createElement("input",{ref:"f",type:"file",onChange:this.handleUpload,autoComplete:"off"})),l.a.createElement("div",{className:"scaling-btn-group"},l.a.createElement(d,{text:"Absolute Scaling",onChange:this.handleAbsScaling,checked:this.state.AbsScaling}),"\xa0\xa0\xa0\xa0\xa0",l.a.createElement(d,{text:"Relative Scaling",onChange:this.handleRelScalingChange,checked:this.state.RelScaling}),"\xa0\xa0\xa0\xa0\xa0",l.a.createElement(d,{text:"Cladogram",onChange:this.handleCladogramChange,checked:this.state.Cladogram})))}}]),t}(l.a.Component);var T=function(){return l.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.86a02beb.chunk.js.map