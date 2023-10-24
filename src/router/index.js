import { createRouter, createWebHistory } from 'vue-router'
import AccueilView                        from '../views/AccueilView.vue'
import PersonnalisationView               from '../views/PersonnalisationView.vue'
import MespersoView                       from '../views/MespersoView.vue'
import MonEspaceView                      from '../views/MonEspaceView.vue';




// Import pocketbase
import PocketBase from 'pocketbase'
// Objet pocketBase
const pb = new PocketBase("http://127.0.0.1:8090");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/accueil',                 name: 'AccueilView',                component: AccueilView },
    { path: '/personnalisation',        name: 'PersonnalisationView',       component: PersonnalisationView },
    { path: '/mesperso',                name: 'MespersoView',               component: MespersoView },
    { path: '/monespace',               name: 'MonEspaceView',              component: MonEspaceView },
  ]
})

export default router
