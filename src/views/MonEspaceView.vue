<!--
<script>
var connected = false;
var pocketbase_ip = "";
if (import.meta.env.MODE === "production")
  pocketbase_ip = "";
else pocketbase_ip = "http://127.0.0.1:8090";
const pb = new PocketBase(pocketbase_ip);
var currentUser;

export default {
  methods: {
    async login() {
      await pb.collection("users").authWithOAuth2({ provider: "google" });
      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "You are now logged in";
        connected = true;
        currentUser = pb.authStore.model;
      }
    },
  },
};
</script>
-->


<template>
  <i class="info-icon">ℹ️ Se connecter ou créer un compte pour accéder aux options de personnalisation</i>
  <div class="container">
    <div class="image-container">
      <img src="@/assets/images/pageconnexion.webp" alt="Image page inscription lunettes" />
    </div>
    <div class="form-container">
      <div class="inscription">
        <h1>S'inscrire sur TaVue</h1>
        <p class="already-have-account">
          <span class="underline-text" @click="redirectToLogin">J'ai déjà un compte</span>
        </p>
        <div class="input-group">
          <label for="name" class="black-text">Nom complet</label>
          <input type="text" required id="name" v-model="name" />
        </div>
        <div class="input-group">
          <label for="username" class="black-text">Nom d'utilisateur</label>
          <input type="text" required id="username" v-model="username" />
        </div>
        <div class="input-group">
          <label for="email" class="black-text">Adresse email</label>
          <input type="email" required id="email" v-model="email" />
        </div>
        <div class="input-group">
          <label for="password" class="black-text">Mot de passe</label>
          <input type="password" required id="password" v-model="password" />
        </div>
        <div class="input-group checkbox">
          <input type="checkbox" required id="checkbox" v-model="acceptPrivacy" />
          <label class="box black-text">Accepter la vie privée et la politique</label>
        </div>
        <button @click="registerUser" class="button-connexion">Créer un compte</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      username: '',
      email: '',
      password: '',
      acceptPrivacy: false,
    };
  },
  methods: {
    async registerUser() {
      if (!this.acceptPrivacy) {
        alert("Veuillez accepter la vie privée et la politique.");
        return;
      }
      try {
        // Utilisez PocketBase (this.$pb) pour créer un nouvel utilisateur et enregistrer les données
        const user = await this.$pb.collection('users').insert({
          name: this.name,
          username: this.username,
          email: this.email,
          password: this.password,
        });

        if (user) {
          // Enregistrement réussi, redirigez l'utilisateur vers la page PersonnalisationView.vue
          this.$router.push('/personnalisation');
        } else {
          alert("Erreur lors de l'inscription. Veuillez réessayer.");
        }
      } catch (error) {
        alert("Une erreur s'est produite lors de l'inscription : " + error.message);
      }
    },
    redirectToLogin() {
      this.$router.push('/connexion'); // Assurez-vous que la route '/connexion' existe dans votre configuration de routage.
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: white;
}

h1 {
  font-family: 'Arima Madurai', sans-serif;
  color: black;
}

.image-container {
  flex: 1;
  background-color: #f5f5f5; /* Fond blanc pour la partie image */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}

.image-container img {
  width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.form-container {
  flex: 1;
  background-color: #f5f5f5; /* Fond blanc pour la partie formulaire */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.inscription {
  text-align: center;
}

h1 {
  font-size: 25px;
  font-weight: bold;
  margin-top: 20px;
}

.google,
.facebook {
  border: none;
  border-radius: 5px;
  font-size: 20px;
  padding: 5px 10px;
  margin: 5px 10px;
  cursor: pointer;
  color: white;
  width: 100%;
  text-align: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
}

.google {
  background-color: mediumslateblue;
}

.facebook {
  background-color: bisque;
}

.separator {
  margin: 10px 0;
  font-weight: bold;
}

.input-group {
  margin: 10px 0;
}

input {
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 20px;
  width: 100%;
  color: black;
}

.checkbox {
  display: flex;
  align-items: center;
}

.box {
  margin-left: 10px;
}

.button-connexion {
  border: none;
  border-radius: 5px;
  font-size: 30px;
  padding: 5px 20px;
  background-color: #313131;
  color: white;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  text-align: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
}

.black-text {
  color: black; /* Texte en noir */
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.already-have-account {
    text-align: center;
    margin-top: 3px;
  }

  .underline-text {
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
  }

  .already-have-account:hover {
    color: blue; /* Vous pouvez changer la couleur du texte souligné si nécessaire */
  }
  

</style>
