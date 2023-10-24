
  
<script setup>
</script>

<template>
    <div class="container">
      <!-- Votre formulaire de connexion ici -->
    </div>
  </template>
 
 <!--<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          // Utilisez la bibliothèque pocketbase pour vous authentifier
          await this.$pb.authStore.login(this.username, this.password);
  
          // Vérifiez si l'utilisateur est connecté après une connexion réussie
          if (this.$pb.authStore.isAuthenticated) {
            // Redirigez automatiquement l'utilisateur vers la page d'accueil
            this.$router.push({ name: 'AccueilView' });
          }
        } catch (error) {
          console.error('Erreur de connexion :', error);
          // Afficher un message d'erreur à l'utilisateur si nécessaire
        }
      },
    },
  };
  </script>
  -->