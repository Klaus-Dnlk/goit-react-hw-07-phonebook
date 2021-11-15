(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{14:function(e,t,n){e.exports={title:"App_title__qZJjv",section:"App_section__1L9NU"}},3:function(e,t,n){e.exports={form:"Styles_form__1n-MI",formLabel:"Styles_formLabel__3EqA7",inputWindow:"Styles_inputWindow__hvDpK",filterBox:"Styles_filterBox__2XrpD",filterInput:"Styles_filterInput__3ItDz",contactList:"Styles_contactList__1lttY",listItem:"Styles_listItem__rN4qw",btn:"Styles_btn__1ntXU"}},38:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),i=n(11),o=n.n(i),s=n(26),l=n(6),u=n(22),b=n(13),d=n(4),j=n(23),m=n.n(j),f=n(5),O=n(7),h=n(2),p=n(48),x={addNewContact:Object(d.b)("contacts/add",(function(e,t){return{payload:{name:e,number:t,id:Object(p.a)()}}})),deleteContact:Object(d.b)("contacts/delete"),changeFilter:Object(d.b)("contacts/filter")},_=Object(d.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(a={},Object(O.a)(a,x.addNewContact,(function(e,t){var n=t.payload;return e.find((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?alert("".concat(n.name," is already in contacts")):[].concat(Object(b.a)(e),[n])})),Object(O.a)(a,x.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),v=Object(d.c)("",Object(O.a)({},x.changeFilter,(function(e,t){return t.payload}))),C=Object(h.b)({items:_,filter:v}),N=n(24),w=n.n(N),y=[].concat(Object(b.a)(Object(d.d)({serializableCheck:{ignoredActions:[f.a,f.f,f.b,f.c,f.d,f.e]}})),[m.a]),g={key:"contacts",storage:w.a,blacklist:["filter"]},L=Object(d.a)({reducer:{contacts:Object(f.g)(g,C)},middleware:y,devTools:!1}),S={store:L,persistor:Object(f.h)(L)},k=(n(38),n(14)),A=n.n(k),I=n(17),F=n(3),z=n.n(F),q=n(1);var B=Object(l.b)((function(e){return{items:e.contacts.items}}),(function(e){return{newContact:function(t,n){return e(x.addNewContact(t,n))}}}))((function(e){var t=e.newContact,n=Object(c.useState)(""),a=Object(I.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),s=Object(I.a)(o,2),l=s[0],u=s[1],b=Object(p.a)(),d=Object(p.a)(),j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":i(a);break;case"number":u(a);break;default:return}},m=function(){i(""),u("")};return Object(q.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(r,l),m()},children:Object(q.jsxs)("div",{className:z.a.form,children:[Object(q.jsxs)("label",{htmlFor:b,className:z.a.formLabel,children:["Name",Object(q.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:z.a.inputWindow,value:r,onChange:j,id:b})]}),Object(q.jsxs)("label",{htmlFor:d,className:z.a.formLabel,children:["Phone",Object(q.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:z.a.inputWindow,value:l,onChange:j,id:d})]}),Object(q.jsx)("button",{type:"submit",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",className:z.a.btn,children:"Add contact"})]})})})),D=Object(p.a)();var J=Object(l.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChange:function(t){return e(x.changeFilter(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(q.jsx)("div",{className:z.a.filterBox,children:Object(q.jsx)("label",{htmlFor:D,className:z.a.filterLabel,children:Object(q.jsx)("input",{type:"text",className:z.a.filterInput,id:D,placeholder:"Find contacts by name",value:t,onChange:n})})})}));var W=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},Z=Object(l.b)((function(e){var t=e.contacts,n=t.items,a=t.filter;return{contacts:W(n,a)}}),(function(e){return{deleteContact:function(t){return e(x.deleteContact(t))}}}))((function(e){var t=e.contacts,n=e.deleteContact;return Object(q.jsx)("ul",{className:z.a.contactList,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(q.jsxs)("li",{className:z.a.listItem,children:[Object(q.jsxs)("p",{children:[a,": ",c]}),Object(q.jsx)("button",{onClick:function(){return n(t)},className:z.a.btn,title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",children:"Delete"})]},t)}))})}));function E(){return Object(q.jsxs)("div",{className:A.a.section,children:[Object(q.jsx)("h2",{className:A.a.title,children:"Phonebook"}),Object(q.jsx)(B,{}),Object(q.jsx)("h2",{className:A.a.title,children:"Contacts"}),Object(q.jsx)(J,{}),Object(q.jsx)(Z,{})]})}o.a.render(Object(q.jsx)(r.a.StrictMode,{children:Object(q.jsx)(l.a,{store:S.store,children:Object(q.jsx)(u.a,{loading:null,persistor:S.persistor,children:Object(q.jsx)(s.a,{children:Object(q.jsx)(E,{})})})})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.564a9824.chunk.js.map