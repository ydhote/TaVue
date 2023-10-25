import { createRouter, createWebHistory } from 'vue-router';
import AccueilView from '../views/AccueilView.vue';
import PersonnalisationView from '../views/PersonnalisationView.vue';
import MespersoView from '../views/MespersoView.vue';
import MonEspaceView from '../views/MonEspaceView.vue';
import ConnexionView from '../views/ConnexionView.vue';
import PocketBase from 'pocketbase';

const pb = new PocketBase("http://127.0.0.1:8090");

const checkAuthentication = (to, from, next) => {
  if (pb.authStore.isValid) {
    // L'utilisateur est connecté, laissez-le accéder à la page
    next();
  } else {
    // L'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
    next('/connexion');
  }
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/accueil', name: 'AccueilView', component: AccueilView },
    {
      path: '/personnalisation',
      name: 'PersonnalisationView',
      component: PersonnalisationView,
      beforeEnter: checkAuthentication, // Ajoutez le garde de navigation ici
    },
    {
      path: '/mesperso',
      name: 'MespersoView',
      component: MespersoView,
      beforeEnter: checkAuthentication, // Ajoutez le garde de navigation ici
    },
    { path: '/monespace', name: 'MonEspaceView', component: MonEspaceView },
    { path: '/connexion', name: 'ConnexionView', component: ConnexionView },
  ],
});

export default router;
