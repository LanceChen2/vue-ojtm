import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import ContactView from "./views/ContactView.vue";
import Team1View from "./views/Team1View.vue";
import Team2View from "./views/Team2View.vue";
import MemberCenter from "./views/MemberCenter.vue";

//URL <> Component
//路由對應表
const routes = [
    //htpp://localhost:5173/  >  HomeView
    {path: "/", component: HomeView, name: "home"},
    //htpp://localhost:5173/about  >  AboutView
    {path: "/about_ispan", component: AboutView, name: "about",
        children: [
            //htpp://localhost:5173/about/team1  >  Team1View
            {path: "team1", component: Team1View, name: "team1"},
            //htpp://localhost:5173/about/team2  >  Team2View
            {path: "team2", component: Team2View, name: "team2"},
        ]
    },
    //htpp://localhost:5173/xyz  >  ContactView
    {path: "/contact", component: ContactView, name: "contact"},
    //htpp://localhost:5173/member  >  MemberCenter
    {path: "/member/:id", component: MemberCenter, name: "member", props: true},
]

const router = createRouter({
    history: createWebHistory(), 
    routes  //or routes: routes
});

export default router;