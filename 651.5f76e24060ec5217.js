"use strict";(self.webpackChunkPickleIQ=self.webpackChunkPickleIQ||[]).push([[651],{7651:(N,F,o)=>{o.r(F),o.d(F,{TraininghModule:()=>M});var l=o(177),h=o(4710),v=o(8868),u=o(8708),a=o(3589),t=o(3953);function g(n,r){if(1&n&&(t.EFF(0,"\n          "),t.j41(1,"div",6),t.EFF(2,"\n            "),t.nrm(3,"youtube-player",7),t.EFF(4,"\n            "),t.j41(5,"div",8),t.EFF(6,"\n              "),t.j41(7,"p",9),t.EFF(8),t.k0s(),t.EFF(9,"\n            "),t.k0s(),t.EFF(10,"\n            "),t.j41(11,"ul",10),t.EFF(12,"\n              "),t.j41(13,"li",11),t.EFF(14,"\n                "),t.j41(15,"i"),t.EFF(16,"Video by"),t.k0s(),t.EFF(17," "),t.j41(18,"a",12),t.EFF(19),t.k0s(),t.EFF(20,"\n              "),t.k0s(),t.EFF(21,"\n              "),t.j41(22,"li",11)(23,"i"),t.EFF(24,"Published on"),t.k0s(),t.EFF(25),t.nI1(26,"date"),t.k0s(),t.EFF(27,"\n            "),t.k0s(),t.EFF(28,"\n          "),t.k0s(),t.EFF(29,"\n        ")),2&n){const e=t.XpG().$implicit;t.R7$(3),t.Y8G("videoId",e.videoId),t.R7$(5),t.JRh(e.description),t.R7$(10),t.FS9("href",e.channelUrl,t.B4B),t.R7$(),t.JRh(e.channelTitle),t.R7$(6),t.SpI(" ",t.bMT(26,5,e.publishedAt),"")}}function y(n,r){if(1&n&&(t.EFF(0,"\n  "),t.j41(1,"div",1),t.EFF(2,"\n    "),t.j41(3,"h2",2),t.EFF(4,"\n      "),t.j41(5,"button",3),t.EFF(6),t.k0s(),t.EFF(7,"\n    "),t.k0s(),t.EFF(8,"\n    "),t.j41(9,"div",4),t.EFF(10,"\n      "),t.j41(11,"div",5),t.EFF(12,"\n        "),t.DNE(13,g,30,7,"ng-template"),t.EFF(14,"\n      "),t.k0s(),t.EFF(15,"\n    "),t.k0s(),t.EFF(16,"\n  "),t.k0s(),t.EFF(17,"\n  ")),2&n){const e=r.$implicit;t.R7$(),t.Y8G("collapsed","First"!==e.title),t.R7$(5),t.JRh(e.title)}}function b(n,r){if(1&n&&(t.EFF(0,"\n"),t.j41(1,"p"),t.EFF(2),t.nI1(3,"json"),t.k0s(),t.EFF(4,"\n")),2&n){const e=t.XpG();t.R7$(2),t.JRh(t.bMT(3,1,e.videos))}}const T=new v.Vy("search-list");let f=(()=>{class n{constructor(){this.items=["First","Second","Third"],this.debug=!1,this.apiLoaded=!1}ngOnInit(){if(!this.apiLoaded){const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api",document.body.appendChild(e),this.apiLoaded=!0}T.debug(this.videos)}static#t=this.\u0275fac=function(i){return new(i||n)};static#n=this.\u0275cmp=t.VBU({type:n,selectors:[["app-search-list"]],inputs:{videos:"videos"},standalone:!0,features:[t.aNF],decls:7,vars:2,consts:[["ngbAccordion","",3,"closeOthers"],["ngbAccordionItem","",3,"collapsed"],["ngbAccordionHeader",""],["ngbAccordionButton",""],["ngbAccordionCollapse",""],["ngbAccordionBody",""],[1,"card","border-0"],["width","100%",3,"videoId"],[1,"card-body"],[1,"card-text"],[1,"list-group","list-group-flush"],[1,"list-group-item"],[1,"card-link",3,"href"]],template:function(i,s){1&i&&(t.EFF(0,"\n"),t.j41(1,"div",0),t.EFF(2,"\n  "),t.Z7z(3,y,18,2,null,null,t.fX1),t.k0s(),t.EFF(5,"\n\n"),t.DNE(6,b,5,3)),2&i&&(t.R7$(),t.Y8G("closeOthers",!0),t.R7$(2),t.Dyx(s.videos),t.R7$(3),t.vxM(s.debug?6:-1))},dependencies:[u.x9,a._f,a.WP,a.r6,a.tW,a.x7,a.UA,a.$R,l.TG,l.vh],styles:[".card-data[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row;flex-wrap:wrap}"]})}return n})();var C=o(3726),k=o(152),d=o(6354),I=o(3294),R=o(5964);const $=["input"];let x=(()=>{class n{constructor(){this.search=new t.bkB}OnInit(){}ngAfterViewInit(){(0,C.R)(this.inputElement.nativeElement,"keyup").pipe((0,k.B)(500),function j(...n){const r=n.length;if(0===r)throw new Error("list of properties cannot be empty.");return(0,d.T)(e=>{let i=e;for(let s=0;s<r;s++){const c=i?.[n[s]];if(!(typeof c<"u"))return;i=c}return i})}("target","value"),(0,I.F)(),(0,R.p)(e=>e.length>2),(0,d.T)(e=>e)).subscribe(e=>{this.search.emit("pickleball technique "+e)})}static#t=this.\u0275fac=function(i){return new(i||n)};static#n=this.\u0275cmp=t.VBU({type:n,selectors:[["app-search-input"]],viewQuery:function(i,s){if(1&i&&t.GBs($,5),2&i){let c;t.mGM(c=t.lsd())&&(s.inputElement=c.first)}},outputs:{search:"search"},standalone:!0,features:[t.aNF],decls:15,vars:0,consts:[["input",""],[1,"mb-3"],[1,"fab","fa-youtube"],["for","skill",1,"form-label"],["type","text","id","skill","placeholder","enter skill here",1,"form-control"]],template:function(i,s){1&i&&(t.j41(0,"div",1),t.EFF(1,"\n  "),t.EFF(2,"\n  "),t.nrm(3,"i",2),t.EFF(4,"\n  "),t.j41(5,"label",3),t.EFF(6,"YouTube"),t.k0s(),t.EFF(7,"\n  "),t.nrm(8,"input",4,0),t.EFF(10,"\n  "),t.j41(11,"small"),t.EFF(12,"example serve, return, dink, 3rd shot, speedup"),t.k0s(),t.EFF(13,"\n"),t.k0s(),t.EFF(14,"\n"))}})}return n})();var p=o(546),S=o(1626);let w=(()=>{class n{constructor(e){this.http=e,this.apiURL=p.c.youtube.apiUrl,this.apiToken=p.c.youtube.apiKey,this.maxResults=p.c.youtube.maxResults}getVideos(e){return this.http.get(`${this.apiURL}?q=${e}&key=${this.apiToken}&part=snippet&type=video&maxResults=${this.maxResults}`).pipe((0,d.T)(s=>s.items))}static#t=this.\u0275fac=function(i){return new(i||n)(t.KVO(S.Qq))};static#n=this.\u0275prov=t.jDH({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function U(n,r){1&n&&(t.EFF(0,"\n  "),t.j41(1,"div"),t.EFF(2,"\n    "),t.j41(3,"div",1),t.EFF(4,"No Video Found"),t.k0s(),t.EFF(5,"\n  "),t.k0s(),t.EFF(6,"\n  "))}function V(n,r){if(1&n&&(t.EFF(0,"\n  "),t.nrm(1,"app-search-list",2),t.EFF(2,"\n  ")),2&n){const e=t.XpG();t.R7$(),t.Y8G("videos",e.videos)}}let m=(()=>{class n{constructor(e){this.searchService=e,this.inputTouched=!1,this.loading=!1,this.videos=[]}OnInit(){}handleSearch(e){this.loading=!0,this.searchService.getVideos(e).subscribe(i=>{this.videos=i.map(s=>({title:s.snippet.title,videoId:s.id.videoId,videoUrl:`https://www.youtube.com/watch?v=${s.id.videoId}`,channelId:s.snippet.channelId,channelUrl:`https://www.youtube.com/channel/${s.snippet.channelId}`,channelTitle:s.snippet.channelTitle,description:s.snippet.description,publishedAt:new Date(s.snippet.publishedAt),thumbnail:s.snippet.thumbnails.high.url})),this.inputTouched=!0,this.loading=!1})}static#t=this.\u0275fac=function(i){return new(i||n)(t.rXU(w))};static#n=this.\u0275cmp=t.VBU({type:n,selectors:[["app-search-container"]],standalone:!0,features:[t.aNF],decls:7,vars:2,consts:[[3,"search"],["role","alert",1,"alert","alert-info"],[3,"videos"]],template:function(i,s){1&i&&(t.j41(0,"div"),t.EFF(1,"\n  "),t.j41(2,"app-search-input",0),t.bIt("search",function(L){return s.handleSearch(L)}),t.k0s(),t.EFF(3,"\n  "),t.DNE(4,U,7,0)(5,V,3,1),t.k0s(),t.EFF(6,"\n")),2&i&&(t.R7$(4),t.vxM(s.inputTouched&&!s.videos.length?4:-1),t.R7$(),t.vxM(s.loading?-1:5))},dependencies:[x,f]})}return n})(),E=(()=>{class n{constructor(){}ngOnInit(){console.log("Search load")}static#t=this.\u0275fac=function(i){return new(i||n)};static#n=this.\u0275cmp=t.VBU({type:n,selectors:[["video-search"]],standalone:!0,features:[t.aNF],decls:11,vars:0,consts:[[1,"container-fluid"],[1,"row"]],template:function(i,s){1&i&&(t.j41(0,"div",0),t.EFF(1,"\n  "),t.j41(2,"h4"),t.EFF(3,"Training Videos"),t.k0s(),t.EFF(4,"\n  "),t.j41(5,"div",1),t.EFF(6,"\n    "),t.nrm(7,"app-search-container"),t.EFF(8,"\n  "),t.k0s(),t.EFF(9,"\n"),t.k0s(),t.EFF(10,"\n"))},dependencies:[m]})}return n})();var G=o(6688);const A=[{path:"",component:E,data:{title:(0,G.x)("Video Search")}}];let B=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#n=this.\u0275mod=t.$C({type:n});static#e=this.\u0275inj=t.G2t({imports:[h.iI.forChild(A),h.iI]})}return n})(),M=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#n=this.\u0275mod=t.$C({type:n});static#e=this.\u0275inj=t.G2t({imports:[l.MD,u.vo,B,a._f,E,f,m]})}return n})()}}]);