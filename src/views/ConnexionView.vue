<template>
    <i class="info-icon">ℹ️ Se connecter ou créer un compte pour accéder aux options de personnalisation</i>
    <div class="container">
      <div class="image-container">
        <img src="@/assets/images/pageconnexion.webp" alt="Image page connexion lunettes" />
      </div>
      <div class="form-container">
        <div class="inscription">
          <h1>Me connecter sur TaVue</h1>
          <p class="already-have-account">
            <span class="underline-text" @click="redirectToSign">Je n'ai pas de compte</span>
          </p>
          <div class="input-group">
            <label for="username" class="black-text">Nom d'utilisateur</label>
            <input type="text" required id="username" v-model="username" />
          </div>
          <div class="input-group">
            <label for="password" class="black-text">Mot de passe</label>
            <input type="password" required id="password" v-model="password" />
          </div>
          <div class="input-group checkbox">
            <input type="checkbox" required id="checkbox" v-model="acceptPrivacy" />
            <label class="box black-text">Accepter la vie privée et la politique</label>
          </div>
          <button @click="login" class="button-connexion">Je me connecte</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Import pocketbase
  import PocketBase from 'pocketbase';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
        acceptPrivacy: false,
      };
    },
    methods: {
      async login() {
        if (!this.acceptPrivacy) {
          alert("Veuillez accepter la vie privée et la politique.");
          return;
        }
        
        const pocketbase_ip = process.env.NODE_ENV === "production" ? "" : "https://tavue.yanndhote.com:443";
        const pb = new PocketBase(pocketbase_ip);
  
        try {
          const authData = await pb.collection('users').authWithPassword(this.username, this.password);
          if (authData) {
            // Authentification réussie, redirigez vers la page PersonnalisationView.vue
            this.$router.push('/personnalisation');
          } else {
            alert("Erreur d'identification : mauvais login et/ou mot de passe");
          }
        } catch (error) {
          console.error("Erreur de connexion :", error.message);
          alert("Erreur d'identification : mauvais login et/ou mot de passe");
        }
      },
      redirectToSign() {
        this.$router.push('/monespace'); // Assurez-vous que la route '/inscription' existe dans votre configuration de routage.
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
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
  }
  
  .image-container {
  position: relative;
  flex: 1;
  background-color: #f5f5f5;
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

  .top-right-text {

  font-size: 14px;
  color: white; /* Choisissez une couleur qui se démarque sur l'image */
  background-color: rgba(0, 0, 0, 0.7); /* Arrière-plan semi-transparent pour le texte */
  padding: 5px;
  border-radius: 5px;
  z-index: 1; /* Pour placer le texte au-dessus de l'image */
}
  
  .form-container {
    flex: 1;
    background-color: #f5f5f5;
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
    margin-top: 20px;
  }
  
  .box {
    margin-left: 20px;
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
    color: black;
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
    color: blue;
  }
  </style>
  