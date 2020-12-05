import Messages from "./components/Messages";
import Contact from "./components/Contacts"
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {path: '/', component: Messages},
    {path: '/messages', component: Messages},
    {path: '/contacts', component: Contact},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
