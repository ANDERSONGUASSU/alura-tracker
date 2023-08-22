import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TarefasView from '../views/TarefasView.vue';
import ProjetosView from '../views/ProjetosView.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: TarefasView
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: ProjetosView
    },
];


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;