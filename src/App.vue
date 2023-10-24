<script setup>
import footervue from './components/footer.vue';



  // Import éléments de vue
  import { ref, onMounted } from 'vue';
  // Import éléments de routage
  import { useRouter } from 'vue-router';
  const router = useRouter()

  import { RouterLink } from 'vue-router';


  // Import pocketbase
  import PocketBase from 'pocketbase'
  // Objet pocketBase
  const pb = new PocketBase("http://127.0.0.1:8090");

  
  // user connecté ? au départ faux
  let isConnected = ref(false)

  // Element de connexion
  let user = ref('')
  let psw = ref('')

  // User connecté
  let currentUser = ref(null)
  let avatar = ref(null)

// Au montage du composant
onMounted(async() => {
  // Vérifier que le user est déjà connecté
  refresh()

})

const refresh = ()=>{
  if(pb.authStore.isValid){
    currentUser.value = pb.authStore.model
    isConnected.value = true

    avatar.value =
      "http://127.0.0.1:8090/api/files/"  // Adresse serveur et repertoire des fichiers image
      +currentUser.value.collectionId     // Id ou name de la collection concernée
      +"/"
      +currentUser.value.id               // Id de l'utilisateur connecté
      +"/"
      +currentUser.value.avatar           // Nom fichier image pocketbase
      +"?thumb=100x100"                   // Taille par défaut     

//      console.log("image avatar utilisateur", avatar)
  }
}

const connect = async()=>{
  try{
    const authData = await pb.collection('users')
    .authWithPassword(user.value, psw.value)
//    console.log("connecté : ",authData)
    refresh()    
  }catch(error){
//    console.log("erreur de connexion : ",error.message)
    alert("Erreur d'identification : mauvais login et/ou mot de passe")
    user.value = ""
    psw.value = ""
  }
}

const deconnect = ()=>{
  // Suppression utilisateur connecté
  pb.authStore.clear()
  isConnected.value=false
  avatar.value = null
  // Retour à la page d'accueil -> Redirection
  router.push({name:"HomeView"})
}
</script>

<template>
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark justify-content-between">
      <img src="../src/assets/images/tavuelogo.png" alt="Votre Logo" class="navbar-brand" style="max-height: 50px;"> <!-- Remplacez le chemin et la hauteur maximale par les valeurs appropriées -->
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
        <ul class="navbar-nav mx-auto"> <!-- Utilisez mx-auto pour centrer les éléments -->
          <li class="nav-item">
            <RouterLink class="nav-link header-text-bold" to="/accueil">Accueil</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/personnalisation">Personnalisation</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/mesperso">Mes personnalisations</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="*">Nous contacter</RouterLink>
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

          <RouterLink v-else to="/monespace" class="btn mon-espace-button">Mon Espace</RouterLink>
        </div>
      </div>
    </nav>

    
    <RouterView />
    <footervue />
</div>


</template>


<style scoped>
/* HEADER */ 
.navbar {
  background-color: white; /* Fond blanc */
  width: 100%; /* S'étend sur toute la largeur de la page */
}

.navbar-dark .navbar-nav .nav-link {
  color: gray; /* Écritures en gris */
}

.mon-espace-button {
  background-color: #8739EA;
  color: white;
  padding: 10px 20px; /* Ajoutez du rembourrage pour le style rectangulaire */
  border: none;
  cursor: pointer; /* Changez le curseur au survol pour montrer que c'est un bouton */
}
</style>


