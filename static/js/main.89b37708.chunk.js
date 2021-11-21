(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={title:"App_title__qZJjv",section:"App_section__1L9NU"}},3:function(t,e,n){t.exports={form:"Styles_form__1n-MI",formLabel:"Styles_formLabel__3EqA7",inputWindow:"Styles_inputWindow__hvDpK",filterBox:"Styles_filterBox__2XrpD",filterInput:"Styles_filterInput__3ItDz",contactList:"Styles_contactList__1lttY",listItem:"Styles_listItem__rN4qw",btn:"Styles_btn__1ntXU"}},63:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var c={};n.r(c),n.d(c,"fetchContacts",(function(){return N})),n.d(c,"default",(function(){return k}));var a={};n.r(a),n.d(a,"getLoading",(function(){return J})),n.d(a,"getFilter",(function(){return Z})),n.d(a,"getAllContacts",(function(){return E})),n.d(a,"getVisibleContacts",(function(){return M}));var r=n(0),o=n.n(r),i=n(14),u=n.n(i),s=n(7),l=n(6),d=n(30),b=n.n(d),f=n(9),j=n(2),p=n(31),O=n(4),h={changeFilter:Object(l.b)("contacts/filter")},m=n(8),v=n.n(m),x=n(16),C=n(11),g=n.n(C);g.a.defaults.baseURL="https://61980945164fa60017c22f32.mockapi.io";var _,w,N=Object(l.c)("contacts/fetchContacts",function(){var t=Object(x.a)(v.a.mark((function t(e,n){var c,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,g.a.get("/contacts");case 4:return a=t.sent,t.abrupt("return",a);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),y=Object(l.c)("contacts/addNewContact",function(){var t=Object(x.a)(v.a.mark((function t(e,n){var c,a,r,o,i;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.name,a=e.number,r=n.rejectWithValue,t.prev=2,t.next=5,g.a.post("/contacts",{name:c,number:a});case 5:return o=t.sent,i=o.data,t.abrupt("return",i);case 10:t.prev=10,t.t0=t.catch(2),r(t.t0);case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,n){return t.apply(this,arguments)}}()),L=Object(l.c)("contacts/deleteContact",function(){var t=Object(x.a)(v.a.mark((function t(e,n){var c,a,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,g.a.delete("/contacts/".concat(e));case 4:return a=t.sent,r=a.data,t.abrupt("return",r.id);case 9:t.prev=9,t.t0=t.catch(1),c(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),k={fetchContacts:N,addNewContact:y,deleteContact:L},S=Object(l.d)([],(_={},Object(j.a)(_,k.fetchContacts.fulfilled,(function(t,e){return e.payload})),Object(j.a)(_,k.addNewContact.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(p.a)(t),[n])})),Object(j.a)(_,k.deleteContact.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),_)),A=Object(l.d)(!1,(w={},Object(j.a)(w,k.fetchContacts.pending,(function(){return!0})),Object(j.a)(w,k.fetchContacts.fulfilled,(function(){return!1})),Object(j.a)(w,k.fetchContacts.rejected,(function(){return!1})),Object(j.a)(w,k.addNewContact.pending,(function(){return!0})),Object(j.a)(w,k.addNewContact.fulfilled,(function(){return!1})),Object(j.a)(w,k.addNewContact.rejected,(function(){return!1})),Object(j.a)(w,k.deleteContact.pending,(function(){return!0})),Object(j.a)(w,k.deleteContact.fulfilled,(function(){return!1})),Object(j.a)(w,k.deleteContact.rejected,(function(){return!1})),w)),F=Object(l.d)("",Object(j.a)({},h.changeFilter,(function(t,e){return e.payload}))),I=Object(l.d)(null,{}),W=Object(O.b)({items:S,filter:F,loading:A,error:I}),z=Object(l.a)({reducer:{contacts:W},middleware:function(t){return t({serializableCheck:{ignoredActions:[f.a,f.f,f.b,f.c,f.d,f.e]}}).concat(b.a)},devTools:!1}),q=(n(63),n(17)),B=n.n(q),D=n(20),V=n(66),J=function(t){return t.contacts.loading},Z=function(t){return t.contacts.filter},E=function(t){return t.contacts.items},M=function(t){var e=E(t),n=Z(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},U=n(3),P=n.n(U),X=n(1);function K(){var t=Object(r.useState)(""),e=Object(D.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(""),o=Object(D.a)(a,2),i=o[0],u=o[1],l=Object(s.c)(E),d=Object(s.b)(),b=Object(V.a)(),f=Object(V.a)(),j=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":u(a);break;default:return}},p=function(){c(""),u("")};return Object(X.jsx)("form",{onSubmit:function(t){t.preventDefault();!function(t){return l.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))}(n)?d(k.addNewContact({name:n,number:i})):alert("".concat(n," is already in contacts")),p()},children:Object(X.jsxs)("div",{className:P.a.form,children:[Object(X.jsxs)("label",{htmlFor:b,className:P.a.formLabel,children:["Name",Object(X.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:P.a.inputWindow,value:n,onChange:j,id:b})]}),Object(X.jsxs)("label",{htmlFor:f,className:P.a.formLabel,children:["Phone",Object(X.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:P.a.inputWindow,value:i,onChange:j,id:f})]}),Object(X.jsx)("button",{type:"submit",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",className:P.a.btn,children:"Add contact"})]})})}var R=Object(V.a)();function T(){var t=Object(s.c)(a.getFilter),e=Object(s.b)();return Object(X.jsx)("div",{className:P.a.filterBox,children:Object(X.jsx)("label",{htmlFor:R,className:P.a.filterLabel,children:Object(X.jsx)("input",{type:"text",className:P.a.filterInput,id:R,placeholder:"Find contacts by name",value:t,onChange:function(t){return e(h(t.target.value))}})})})}function Y(){var t=Object(s.c)(a.getVisibleContacts),e=Object(s.b)(),n=Object(s.c)(a.getLoading);return Object(r.useEffect)((function(){e(c.fetchContacts)}),[e]),Object(X.jsxs)(X.Fragment,{children:[n&&Object(X.jsx)("h1",{children:"Loading..."}),t.length>0&&Object(X.jsx)("ul",{className:P.a.contactList,children:t.map((function(t){var n=t.id,a=t.name,r=t.number;return Object(X.jsxs)("li",{className:P.a.listItem,children:[Object(X.jsxs)("p",{children:[a,": ",r]}),Object(X.jsx)("button",{type:"button",onClick:function(){return e(c.deleteContact(n))},className:P.a.btn,title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",children:"Delete"})]},n)}))})]})}function $(){return Object(X.jsxs)("div",{className:B.a.section,children:[Object(X.jsx)("h2",{className:B.a.title,children:"Phonebook"}),Object(X.jsx)(K,{}),Object(X.jsx)("h2",{className:B.a.title,children:"Contacts"}),Object(X.jsx)(T,{}),Object(X.jsx)(Y,{})]})}u.a.render(Object(X.jsx)(o.a.StrictMode,{children:Object(X.jsx)(s.a,{store:z,children:Object(X.jsx)($,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.89b37708.chunk.js.map