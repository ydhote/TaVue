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
  <div class="container">
    <div class="image-container">
      <img src="src/assets/images/pageconnexion.webp" alt="Image page connexion lunettes" />
    </div>
    <div class="form-container">
      <div class="inscription">
        <h1>S'inscrire sur TaVue</h1>
        <button @click="login" class="google">S'inscrire avec Google</button>
        <button @click="github" class="facebook">S'inscrire avec Facebook</button>
        <div class="separator">
          <p class="text-center black-text">Ou</p>
        </div>
        <div class="input-group">
          <label for="name" class="black-text">Nom complet</label>
          <input type="text" required id="name" />
        </div>
        <div class="input-group">
          <label for="username" class="black-text">Nom d'utilisateur</label>
          <input type="text" required id="username" />
        </div>
        <div class="input-group">
          <label for="email" class="black-text">Adresse email</label>
          <input type="email" required id="email" />
        </div>
        <div class="input-group">
          <label for="password" class="black-text">Mot de passe</label>
          <input type="password" required id="password" />
        </div>
        <div class="input-group checkbox">
          <input type="checkbox" required id="checkbox" />
          <label class="box black-text">Accepter la vie privée et la politique</label>
        </div>
        <button @click="login" class="button-connexion">Créer un compte</button>
      </div>
    </div>
  </div>
</template>

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
</style>
