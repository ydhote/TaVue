<template>
  <div class="personnalisation">
    <h1 class="title">Nos lunettes personnalisables</h1>
    <p class="subtitle">Parcourez notre large sélection de montures personnalisables pour trouver la paire idéale dès aujourd'hui.</p>

    <div class="glasses">
      <div class="glasses-item">
        <img src="src/assets/images/lunettes1.webp" alt="Monture 1" />
        <h2 class="glasses-name">Élégance Classique</h2>
        <p class="glasses-price">149.99€</p>
        <router-link to="/mesperso" class="select-button">SÉLECTIONNER</router-link>
      </div>
      <div class="glasses-item">
        <img src="src/assets/images/lunettes2.webp" alt="Monture 2" />
        <h2 class="glasses-name">Modernité Minimaliste</h2>
        <p class="glasses-price">129.99€</p>
        <router-link to="/mesperso" class="select-button">SÉLECTIONNER</router-link>
      </div>
      <div class="glasses-item">
        <img src="src/assets/images/lunettes3.webp" alt="Monture 3" />
        <h2 class="glasses-name">Chic & Choc</h2>
        <p class="glasses-price">179.99€</p>
        <router-link to="/mesperso" class="select-button">SÉLECTIONNER</router-link>
      </div>
    </div>

    <p class="unique-style">
      Votre style unique mérite des lunettes uniques. Personnalisez dès maintenant.
    </p>

    <!-- Deuxième titre et contenu -->
    <h2 class="title">Nos verres</h2>
    <p class="subtitle">Optimisez votre vision. Explorez les traitements et filtres disponibles pour personnaliser vos verres selon vos besoins visuels et votre mode de vie.</p>

    <div class="lenses">
      <div class="lens-item">
        <img src="src/assets/images/antirayure.webp" alt="Verre 1" />
        <h2 class="lens-name">Anti-rayures</h2>
        <a class="learn-more-link" href="#">En savoir plus</a>
      </div>
      <div class="lens-item">
        <img src="src/assets/images/antireflet.webp" alt="Verre 2" />
        <h2 class="lens-name">Anti-reflets</h2>
        <a class="learn-more-link" href="#">En savoir plus</a>
      </div>
      <div class="lens-item">
        <img src="src/assets/images/lumierebleu.webp" alt="Verre 3" />
        <h2 class="lens-name">Anti-lumière Bleue</h2>
        <a class="learn-more-link" href="#">En savoir plus</a>
      </div>
      <div class="lens-item">
        <img src="src/assets/images/polarise.webp" alt="Verre 4" />
        <h2 class="lens-name">Polarisés</h2>
        <a class="learn-more-link" href="#">En savoir plus</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.personnalisation {
  text-align: center;
  color: black;
  padding: 20px;
}

.title {
  font-size: 40px;
  margin-top: 80px;
  font-family: 'Arima Madurai', sans-serif;
}

.subtitle {
  font-size: 16px;
  margin-bottom: 20px;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.glasses {
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
}

.glasses-item {
  flex: 0 0 30%;
  margin: 10px;
}

.glasses-item img {
  width: 100%;
  max-height: 150px;
  object-fit: cover;
}

.glasses-name {
  font-size: 20px;
  margin: 10px 0;
  font-family: 'Arima Madurai', sans-serif;
}

.glasses-price {
  font-size: 18px;
  margin: 10px 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.select-button {
  background-color: #8739EA;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  font-weight: 600;
}

.unique-style {
  font-size: 16px;
  text-align: left;
  margin-top: 20px;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

/* Nouveau style pour la section "Nos verres" */
.lenses {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
}

.lens-item {
  flex: 0 0 22%;
  margin: 10px;
  text-align: center;
}

.lens-item img {
  width: 100%;
  max-height: 150px;
  object-fit: cover;
}

.lens-name {
  font-size: 20px;
  margin: 10px 0;
  color: black;
  font-family: 'Arima Madurai', sans-serif;
}

.lens-description {
  font-size: 16px;
  text-decoration: underline;
  color: #8739EA;
}

.learn-more-link {
  color: #8739EA;
  text-decoration: none;
  display: block;
  margin-top: 10px;
  font-weight: bold;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.learn-more-link:hover {
  text-decoration: underline;
}
</style>
