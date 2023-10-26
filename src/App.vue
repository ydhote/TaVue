<script>
import footervue from './components/footer.vue';
</script>

<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark justify-content-between">
      <img src="../src/assets/images/tavuelogo.png" alt="Votre Logo" class="navbar-brand" style="max-height: 50px;">
      <RouterLink class="navbar-brand" to="/"></RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link header-text-bold" to="/index">Accueil</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/personnalisation">Personnalisation</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/mesperso">Mes personnalisations</RouterLink>
          </li>
        </ul>

        <div class="ml-auto">
          <span v-if="isConnected">
            <img :src="avatar" class="img-fluid" style="max-width: 45px;" />
            <button class="btn btn-light mr-2">
              {{ currentUser.name }}
            </button>
            <button class="btn btn-dark ml-auto" type="button" @click="deconnect">
              <i class="fa fa-sign-out"></i>
            </button>
          </span>

          <RouterLink v-else to="/connexion" class="btn mon-espace-button">Mon Espace</RouterLink>
        </div>
      </div>
    </nav>
<Suspense>
    <RouterView />
  </Suspense>
    <footervue />
  </div>
  
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';
import PocketBase from 'pocketbase';

const router = useRouter();

const pocketBase = new PocketBase("http://127.0.0.1:8090");
let isConnected = ref(false);
let user = ref('');
let psw = ref('');
let currentUser = ref(null);
let avatar = ref(null);

const onMountedSetup = onMounted(async () => {
  refresh();
});

const refresh = () => {
  if (pocketBase.authStore.isValid) {
    currentUser.value = pocketBase.authStore.model;
    isConnected.value = true;
  }
};

const connect = async () => {
  try {
    const authData = await pocketBase.collection('users').authWithPassword(user.value, psw.value);
    refresh();
  } catch (error) {
    alert("Erreur d'identification : mauvais login et/ou mot de passe");
    user.value = "";
    psw.value = "";
  }
};

const deconnect = () => {
  pocketBase.authStore.clear();
  isConnected.value = false;
  avatar.value = null;
  router.push({ name: 'AccueilView' });
};

const isUserConnected = computed(() => isConnected.value);
</script>

<style scoped>
.navbar {
  background-color: white;
  width: 100%;
}

.navbar-dark .navbar-nav .nav-link {
  color: gray;
}

.navbar-nav {
  margin-left: 370px;
}

.mon-espace-button {
  background-color: #8739EA;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
}
</style>
