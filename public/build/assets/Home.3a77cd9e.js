import{o as e,e as s,c as h,w as i,g as l,F as u,b as _,f as g,a as t,h as f,L as c,t as d,i as n}from"./app.78eb53fc.js";const p={class:"min-h-screen bg-stone-300 relative"},x={key:0,class:"hidden fixed top-0 right-0 px-6 py-4 sm:block"},m=n("Pins"),y=n("Log in"),k=n("Register"),b={class:"flex w-full container mx-auto flex-col py-10 gap-10"},B=t("h1",{class:"text-3xl"},"Pins",-1),L={class:"pb-5"},V=n("by: "),v={class:"font-semibold text-indigo-600"},w={class:"text-xl font-bold"},S={__name:"Home",props:{canLogin:Boolean,canRegister:Boolean,laravelVersion:String,phpVersion:String,pins:{Type:Object,default:()=>{}}},setup(r){return(a,N)=>(e(),s("section",p,[r.canLogin?(e(),s("div",x,[a.$page.props.user?(e(),h(l(c),{key:0,href:a.route("pins"),class:"text-sm text-gray-700 dark:text-gray-500 underline"},{default:i(()=>[m]),_:1},8,["href"])):(e(),s(u,{key:1},[_(l(c),{href:a.route("login"),class:"text-sm text-gray-700 dark:text-gray-500 underline"},{default:i(()=>[y]),_:1},8,["href"]),r.canRegister?(e(),h(l(c),{key:0,href:a.route("register"),class:"ml-4 text-sm text-gray-700 dark:text-gray-500 underline"},{default:i(()=>[k]),_:1},8,["href"])):g("",!0)],64))])):g("",!0),t("div",b,[B,(e(!0),s(u,null,f(r.pins,o=>(e(),s("div",{key:o.id,class:"bg-white px-5 py-2 rounded-md"},[t("h1",L,[V,t("span",v,d(o.user_name),1)]),t("h1",w,d(o.title),1),t("p",null,d(o.description),1)]))),128))])]))}};export{S as default};
