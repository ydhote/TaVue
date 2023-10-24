<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="text-center">
          <img src="/chemin/vers/logo.png" alt="Logo" />
          <h2>S'inscrire sur TaVue</h2>
          <p>S'inscrire avec Google / Facebook</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-container">
          <h2>Connexion / Inscription</h2>
          <form v-if="isLoginForm" @submit.prevent="handleLogin">
            <!-- Votre formulaire de connexion -->
          </form>
          <form v-else @submit.prevent="handleSignup">
            <div class="form-group">
              <input type="text" class="form-control" v-model="fullName" placeholder="Nom complet" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" v-model="username" placeholder="Nom d'utilisateur" />
            </div>
            <div class="form-group">
              <input type="email" class="form-control" v-model="email" placeholder="Adresse email" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control" v-model="password" placeholder="Mot de passe" />
            </div>
            <div class="form-check">
              <input type="checkbox" class="form-check-input" v-model="privacyPolicy" />
              <label class="form-check-label">Vie privée et politique</label>
            </div>
            <button type="submit" class="btn btn-primary">Créer un compte</button>
          </form>
          <p>
            Déjà membre ? 
            <a @click="showLoginForm">S'identifier</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      username: "",
      email: "",
      password: "",
      privacyPolicy: false,
      isLoginForm: true,
    };
  },
  methods: {
    async handleLogin() {
      try {
        // Utilisez PocketBase pour la connexion ici
        // par exemple, pb.authStore.login(email, password)
        // Vérifiez si la connexion réussit
        // Si oui, redirigez l'utilisateur vers la page appropriée
      } catch (error) {
        alert("Erreur d'identification : mauvais login et/ou mot de passe");
      }
    },
    async handleSignup() {
      try {
        // Utilisez PocketBase pour l'inscription ici
        // par exemple, pb.collection('users').create({ email, password, ... })
        // Vérifiez si l'inscription réussit
        // Si oui, redirigez l'utilisateur vers la page appropriée
      } catch (error) {
        alert("Erreur lors de l'inscription : " + error.message);
      }
    },
    showLoginForm() {
      this.isLoginForm = true;
    },
  },
};
</script>

<style scoped>
.form-container {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-container {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-check {
  margin-bottom: 20px;
}

.form-check-label {
  color: #333;
}

.btn-primary {
  background-color: #333; /* Couleur de fond du bouton */
  color: white; /* Couleur du texte du bouton */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #555; /* Couleur de fond au survol */
}

.btn-primary:active {
  background-color: #222; /* Couleur de fond au clic */
}

a {
  text-decoration: none;
  color: #333;
}

a:hover {
  text-decoration: underline;
}

</style>
