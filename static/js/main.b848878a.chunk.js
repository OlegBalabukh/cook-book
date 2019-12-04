(this["webpackJsonpcook-book"]=this["webpackJsonpcook-book"]||[]).push([[0],{45:function(e,t,n){},54:function(e,t,n){e.exports=n(67)},64:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),c=n.n(r),o=n(36),s=n(14),l=n(108),d=n(33),p=n(110),u=n(106),m=n(105),f=n(111),g=n(107),v=n(100),E=Object(v.a)((function(e){return{container:{display:"flex",flexWrap:"wrap",flexDirection:"column"},formControl:{margin:e.spacing(1),minWidth:120},textFieldRecipeName:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:250},textFieldIngredients:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:500},newRecipeButton:{margin:e.spacing(2),fontWeight:600},button:{fontWeight:600,marginLeft:"15px"}}}));function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e){var t=E(),n=e.id,a=e.name,r=e.ingredients,c=e.edit,o={name:!1,ingredients:!1},d=n?"Edit Recipe":"Add Recipe",v=i.a.useState({name:a,ingredients:r,id:n}),b=Object(s.a)(v,2),O=b[0],R=b[1],h=i.a.useState(o),j=Object(s.a)(h,2),V=j[0],N=j[1],A=function(){e.cancelConfirmation(),N(o)};return i.a.createElement(p.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:c},i.a.createElement(f.a,null,"Fill the form"),i.a.createElement(m.a,null,i.a.createElement("form",{className:t.container},i.a.createElement(g.a,{id:"standard-basic",className:t.textFieldRecipeName,label:"Recipe",margin:"normal",fullWidth:!1,autoComplete:"off",onChange:function(e){var t=e.target.value;R(y({},O,{name:t,id:Date.now()})),N(y({},V,{name:!1}))},defaultValue:a,error:V.name,helperText:V.name?"Empty field!":" "}),i.a.createElement(g.a,{id:"standard-basic",className:t.textFieldIngredients,label:"Ingredients (separated by commas)",margin:"normal",multiline:!0,fullWidth:!0,onChange:function(e){var t=e.target.value;R(y({},O,{ingredients:t})),N(y({},V,{ingredients:!1}))},defaultValue:r,error:V.ingredients,helperText:V.ingredients?"Empty field!":" "}))),i.a.createElement(u.a,null,i.a.createElement(l.a,{onClick:A,variant:"outlined",color:"secondary",className:t.button},"Close"),i.a.createElement(l.a,{onClick:function(){var t=O.name,n=O.ingredients;""===t||""===n?""===O.name?N(y({},V,{name:!0})):N(y({},V,{ingredients:!0})):(e.editedRecipe(O),A())},variant:"outlined",color:"primary",className:t.button},d)))}function R(e){var t=e.addRecipe,n=E(),a="",r="",c="",o=i.a.useState(!1),d=Object(s.a)(o,2),p=d[0],u=d[1],m=function(){u(!1)};return i.a.createElement("div",null,i.a.createElement(l.a,{onClick:function(){u(!0)},className:n.newRecipeButton,variant:"outlined",color:"primary"},"Add new Recipe"),p&&i.a.createElement(O,{id:c,name:a,edit:p,ingredients:r,editedRecipe:function(e){t(e),m()},cancelConfirmation:m}))}n(45);var h=function(e){var t=E(),n=e.recipe,r=n.id,c=n.name,o=n.date,d=n.ingredients,p=n.isFocused,u=n.oldVersions,m=e.deleteRecipe,f=e.setActiveRecipe,g=e.addRecipe,v=e.saveRecipeVersion,b=e.updateRecipe,y=Object(a.useState)(!1),R=Object(s.a)(y,2),h=R[0],j=R[1],V=Object(a.useState)(!1),N=Object(s.a)(V,2),A=N[0],w=N[1];return i.a.createElement("div",{className:"recipe"},i.a.createElement("div",{className:p?"focusRecipe":"header",onClick:function(){f(r),p||A?!0===p&&w(!A):w(!0)}},i.a.createElement("h6",{className:"recipeName"},c,u.length>0&&i.a.createElement("p",{id:"updated"},i.a.createElement("span",null,"updated"),i.a.createElement("span",{id:"oldVersions",className:"badge badge-pill"},u.length))),i.a.createElement("div",{className:"date"},o)),p&&A&&i.a.createElement("div",{className:"ingredients"},i.a.createElement("div",{className:"ingHeader"},"Ingredients"),i.a.createElement("ul",null,d.split(",").map((function(e,t){return i.a.createElement("li",{key:t},e)}))),i.a.createElement("div",{id:"buttons"},i.a.createElement(l.a,{onClick:function(){j(!0)},variant:"outlined",color:"primary",className:t.button},"EDIT"),i.a.createElement(l.a,{onClick:function(){m(r)},variant:"outlined",color:"secondary",className:t.button},"DELETE")),h&&i.a.createElement(O,{id:r,name:c,edit:h,ingredients:d,editedRecipe:function(t){j(!1),t.id!==r?g(t):t.ingredients!==d&&(v(e.recipe),b(t))},cancelConfirmation:function(){j(!1)}})))},j=function(e){var t=E(),n=e.recipe,r=n.id,c=n.date,o=n.ingredients,d=n.isFocused,p=e.deleteVersion,u=e.setActiveVersion,m=Object(a.useState)(!1),f=Object(s.a)(m,2),g=f[0],v=f[1];return i.a.createElement("div",{className:"recipe"},i.a.createElement("div",{className:d?"focusVersion":"header",onClick:function(){u(r),d||g?!0===d&&v(!g):v(!0)}},i.a.createElement("h6",{className:"versionDate"}," ",c)),d&&g&&i.a.createElement("div",{className:"ingredients"},i.a.createElement("div",{className:"ingHeader"},"Ingredients"),i.a.createElement("ul",null,o.split(",").map((function(e,t){return i.a.createElement("li",{key:t},e)}))),i.a.createElement(l.a,{onClick:function(){p(r)},variant:"outlined",color:"secondary",className:t.button},"DELETE")))};n(64);var V=Object(o.b)((function(e){return{recipes:e}}),(function(e){return{addRecipe:function(t){e({type:"App@addRecipe",payload:t})},deleteRecipe:function(t){e({type:"App@deleteRecipe",payload:t})},setActiveRecipe:function(t){e({type:"App@setActiveRecipe",payload:t})},updateRecipe:function(t){e({type:"App@updateRecipe",payload:t})},saveRecipeVersion:function(t){e({type:"App@saveRecipeVersion",payload:t})},setActiveVersion:function(t){e({type:"App@setActiveVersion",payload:t})},deleteVersion:function(t){e({type:"App@deleteVersion",payload:t})}}}))((function(e){var t=e.addRecipe,n=e.deleteRecipe,a=e.setActiveRecipe,r=e.updateRecipe,c=e.saveRecipeVersion,o=e.deleteVersion,s=e.setActiveVersion,l=e.recipes,d=l.find((function(e){return e.isFocused}));return i.a.createElement("div",{className:"app"},i.a.createElement("header",{className:"app-header"},i.a.createElement("h2",null,"Cookbook")),i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"section"},i.a.createElement("h5",null,"RECIPES"),i.a.createElement(R,{addRecipe:t}),l.length>0&&l.map((function(e){return i.a.createElement(h,{key:e.id,recipe:e,deleteRecipe:n,setActiveRecipe:a,addRecipe:t,saveRecipeVersion:c,updateRecipe:r})}))),i.a.createElement("div",{className:"section"},i.a.createElement("h5",null,"VERSIONS"),d&&d.oldVersions.map((function(e){return i.a.createElement(j,{key:e.id,recipe:e,deleteVersion:o,setActiveVersion:s})})))))})),N=n(24),A=n(47),w=n(40);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=Object(N.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"App@addRecipe":return[{id:a.id,name:a.name,ingredients:a.ingredients,date:new Date(a.id).toString().substr(0,24),isFocused:!1,oldVersions:[]}].concat(Object(w.a)(e.filter((function(e){return e.name!==a.name}))));case"App@deleteRecipe":return e.filter((function(e){return e.id!==a}));case"App@setActiveRecipe":return e.map((function(e){return e=e.id===a?C({},e,{isFocused:!0}):C({},e,{isFocused:!1})}));case"App@updateRecipe":return e.map((function(e){if(e.id===a.id){var t=Date.now();return C({},e,{id:t,ingredients:a.ingredients,date:new Date(t).toString().substr(0,24)})}return e}));case"App@saveRecipeVersion":return e.map((function(e){return e.id===a.id?C({},e,{oldVersions:[{id:a.id,name:a.name,ingredients:a.ingredients,date:a.date,isFocused:!1}].concat(Object(w.a)(e.oldVersions))}):e}));case"App@setActiveVersion":return e.map((function(e){return e.isFocused?C({},e,{oldVersions:e.oldVersions.map((function(e){return e=e.id===a?C({},e,{isFocused:!0}):C({},e,{isFocused:!1})}))}):e}));case"App@deleteVersion":return e.map((function(e){return e.isFocused?C({},e,{oldVersions:e.oldVersions.filter((function(e){return e.id!==a}))}):e}));default:return e}}),[],Object(A.composeWithDevTools)(Object(N.applyMiddleware)()));n(65),n(66);c.a.render(i.a.createElement(o.a,{store:D},i.a.createElement(V,null)),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.b848878a.chunk.js.map