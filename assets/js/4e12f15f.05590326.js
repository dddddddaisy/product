"use strict";(self.webpackChunkproduct_docs=self.webpackChunkproduct_docs||[]).push([[614],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),o=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},s=function(t){var e=o(t.components);return a.createElement(d.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=o(n),g=r,k=m["".concat(d,".").concat(g)]||m[g]||u[g]||l;return n?a.createElement(k,p(p({ref:e},s),{},{components:n})):a.createElement(k,p({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,p=new Array(l);p[0]=g;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[m]="string"==typeof t?t:r,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2736:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={},p="\u53d1\u9001\u77ed\u4fe1-SendUSMSMessage",i={unversionedId:"api/SendUSMSMessage",id:"api/SendUSMSMessage",title:"\u53d1\u9001\u77ed\u4fe1-SendUSMSMessage",description:"\u8c03\u7528\u63a5\u53e3SendUSMSMessage\u53d1\u9001\u77ed\u4fe1",source:"@site/docs/api/SendUSMSMessage.md",sourceDirName:"api",slug:"/api/SendUSMSMessage",permalink:"/docs/api/SendUSMSMessage",draft:!1,editUrl:"https://github.com/uSpeedo/product/blob/main/docs/docs/api/SendUSMSMessage.md",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"\u6279\u91cf\u53d1\u9001\u77ed\u4fe1-SendBatchUSMSMessage",permalink:"/docs/api/SendBatchUSMSMessage"},next:{title:"\u4fee\u6539\u77ed\u4fe1\u6a21\u677f-UpdateUSMSTemplate",permalink:"/docs/api/UpdateUSMSTemplate"}},d={},o=[],s={toc:o},m="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u53d1\u9001\u77ed\u4fe1-sendusmsmessage"},"\u53d1\u9001\u77ed\u4fe1-SendUSMSMessage"),(0,r.kt)("p",null,"\u8c03\u7528\u63a5\u53e3SendUSMSMessage\u53d1\u9001\u77ed\u4fe1"),(0,r.kt)("p",null,"!> \u5728\u4e00\u6b21\u8bf7\u6c42\u4e2d\uff0c\u6700\u591a\u53ef\u4ee5\u54111000\u4e2a\u624b\u673a\u53f7\u7801\u53d1\u9001\u76f8\u540c\u5185\u5bb9\u7684\u77ed\u4fe1\uff1b"),(0,r.kt)("h1",{id:"request-parameters"},"Request Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"AccountId"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9879\u76eeID\u3002\u4e0d\u586b\u5199\u4e3a\u9ed8\u8ba4\u9879\u76ee\uff0c\u5b50\u5e10\u53f7\u5fc5\u987b\u586b\u5199\u3002 \u8bf7\u53c2\u8003",(0,r.kt)("a",{parentName:"td",href:"https://docs.ucloud.cn/api/summary/get_project_list"},"GetProjectList\u63a5\u53e3")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PhoneNumbers"),(0,r.kt)("td",{parentName:"tr",align:null},"[]string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7535\u8bdd\u53f7\u7801\u6570\u7ec4\uff0c\u7535\u8bdd\u53f7\u7801\u683c\u5f0f\u4e3a(60)1xxxxxxxx\uff0c()\u4e2d\u4e3a\u56fd\u9645\u957f\u9014\u533a\u53f7(\u5982\u4e2d\u56fd\u4e3a86\u62160086\uff0c\u4e24\u79cd\u683c\u5f0f\u90fd\u652f\u6301)\uff0c\u540e\u9762\u4e3a\u7535\u8bdd\u53f7\u7801.\u82e5\u4e0d\u4f20\u5165\u56fd\u9645\u533a\u53f7\uff0c\u59821851623xxxx\uff0c\u5219\u9ed8\u8ba4\u4e3a\u56fd\u5185\u624b\u673a\u53f7"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TemplateId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6a21\u677fID\uff08\u4e5f\u5373\u77ed\u4fe1\u6a21\u677f\u7533\u8bf7\u65f6\u7684\u5de5\u5355ID\uff09\uff0c\u8bf7\u5230",(0,r.kt)("a",{parentName:"td",href:"https://console.uspeedo.com/sms/overview"},"USMS\u63a7\u5236\u53f0"),"\u7684\u6a21\u677f\u7ba1\u7406\u9875\u9762\u67e5\u770b\uff1b\u4f7f\u7528\u7684\u77ed\u4fe1\u6a21\u677f\u5fc5\u987b\u662f\u5df2\u7533\u8bf7\u5e76\u901a\u8fc7\u5ba1\u6838\uff1b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SenderId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u56fd\u9645\u77ed\u4fe1SenderId\uff0c\u6700\u957f11\u4f4d\uff1b"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TemplateParams"),(0,r.kt)("td",{parentName:"tr",align:null},"[]string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6a21\u677f\u53ef\u53d8\u53c2\u6570\uff0c\u4ee5\u6570\u7ec4\u7684\u65b9\u5f0f\u586b\u5199\uff0c\u82e5\u6a21\u677f\u4e2d\u65e0\u53ef\u53d8\u53c2\u6570\uff0c\u5219\u8be5\u9879\u53ef\u4e0d\u586b\u5199\uff1b\u82e5\u6a21\u677f\u4e2d\u6709\u53ef\u53d8\u53c2\u6570\uff0c\u5219\u8be5\u9879\u4e3a\u5fc5\u586b\u9879\uff0c\u53c2\u6570\u4e2a\u6570\u9700\u4e0e\u53d8\u91cf\u4e2a\u6570\u4fdd\u6301\u4e00\u81f4\uff0c\u5426\u5219\u65e0\u6cd5\u53d1\u9001\uff1b"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ExtendCode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u77ed\u4fe1\u6269\u5c55\u7801\uff0c\u683c\u5f0f\u4e3a\u963f\u62c9\u4f2f\u6570\u5b57\u4e32\uff0c\u9ed8\u8ba4\u4e0d\u5f00\u901a\uff0c\u5982\u9700\u5f00\u901a\u8bf7\u8054\u7cfb UCloud\u6280\u672f\u652f\u6301"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UserId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u7684\u4e1a\u52a1\u6807\u8bc6ID\uff0c\u5b57\u7b26\u4e32\uff08 \u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc732 \u4f4d\uff09\uff0c\u4e0d\u652f\u6301 \u5355\u5f15\u53f7\u3001\u8868\u60c5\u5305\u7b26\u53f7\u7b49\u7279\u6b8a\u5b57\u7b26"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,"?> \u652f\u6301\u5728\u4e00\u6b21\u8bf7\u6c42\u4e2d\u5411\u591a\u4e2a\u4e0d\u540c\u7684\u624b\u673a\u53f7\u7801\u53d1\u9001\u76f8\u540c\u5185\u5bb9\u7684\u77ed\u4fe1\uff1b"),(0,r.kt)("h1",{id:"response-elements"},"Response Elements"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RetCode"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53RetCode\u4e0d\u4e3a0\u65f6\uff0cMessage\u4e2d\u663e\u793a\u5177\u4f53\u9519\u8bef\u63cf\u8ff0\uff0c\u82e5RetCode\u4e3a0\uff0c\u4e0d\u8fd4\u56deMessage"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Action"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u751f\u9519\u8bef\u65f6\u8868\u793a\u9519\u8bef\u63cf\u8ff0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Yes"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SessionNo"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u63d0\u4ea4\u53d1\u9001\u7684\u77ed\u4fe1\u7684\u552f\u4e00ID\uff0c\u53ef\u6839\u636e\u8be5\u503c\u67e5\u8be2\u672c\u6b21\u53d1\u9001\u7684\u77ed\u4fe1\u5217\u8868"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UserId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u6b21\u63d0\u4ea4\u7684\u81ea\u5b9a\u4e49\u4e1a\u52a1\u6807\u8bc6ID\uff0c\u4ec5\u5f53\u53d1\u9001\u65f6\u4f20\u5165\u6709\u6548\u7684UserId\uff0c\u624d\u8fd4\u56de\u8be5\u5b57\u6bb5\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h1",{id:"request-example"},"Request Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -X POST https://api.uspeedo.com/api -H \'Content-Type: application/json\' -d \'{\n   "Action": "SendUSMSMessage",\n   "AccountId": 123,\n   "PhoneNumbers": ["185xxxxxxxx","131xxxxxxxx"],\n   "TemplateParams": [123456,10],\n   "SenderId": "UCloud",\n   "TemplateId": "UTA20210101xxxx",\n   "UserId": "hGBCrtQw"\n}\'\n')),(0,r.kt)("h1",{id:"response-example"},"Response Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "Action": "SendUSMSMessageResponse", \n    "SessionNo": "5a3XXXXXXb-7XXXX2-4XXX", \n    "Message": "\u63d0\u4ea4\u53d1\u9001\u6210\u529f", \n    "UserId": "najiyZOy", \n    "RetCode": 0\n}\n')))}u.isMDXComponent=!0}}]);