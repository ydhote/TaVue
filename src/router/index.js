import { createRouter, createWebHistory } from 'vue-router';
import AccueilView from '../views/index.vue';
import PersonnalisationView from '../views/PersonnalisationView.vue';
import MespersoView from '../views/MespersoView.vue';
import MonEspaceView from '../views/MonEspaceView.vue';
import ConnexionView from '../views/ConnexionView.vue';
import PocketBase from 'pocketbase';

const pb = new PocketBase("https://tavue.yanndhote.com:443");

const checkAuthentication = (to, from, next) => {
  if (pb.authStore.isValid) {
    next();
  } else {
    next('/connexion');
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/personnalisation', name: 'PersonnalisationView', component: PersonnalisationView, meta: { requiresAuth: true }, beforeEnter: checkAuthentication },
    { path: '/mesperso', name: 'MespersoView', component: MespersoView, meta: { requiresAuth: true }, beforeEnter: checkAuthentication },
    { path: '/monespace', name: 'MonEspaceView', component: MonEspaceView, meta: { requiresAuth: true }, beforeEnter: checkAuthentication },
    { path: '/connexion', name: 'ConnexionView', component: ConnexionView },
  ],
});

export default router;
