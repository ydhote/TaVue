<template>
  <div>
    <!-- Contenu principal de votre page d'accueil -->
    <div class="main-content">
      <h1 class="main-title">Créez votre Look unique avec TaVue</h1>
      <p class="main-text">
        Exprimez votre style unique en choisissant parmi notre gamme de modèles de montures. Découvrez les possibilités qui s'offrent à vous !
      </p>
      <button class="main-button">PERSONNALISE TES LUNETTES</button>
      <div class="main-photos">
        <div class="photo">
          <img src="/chemin/vers/image1.jpg" alt="Photo 1" />
        </div>
        <div class="photo">
          <img src="/chemin/vers/image2.jpg" alt="Photo 2" />
        </div>
        <div class="photo">
          <img src="/chemin/vers/image3.jpg" alt="Photo 3" />
        </div>
      </div>
    </div>

    <!-- Contenu supplémentaire -->
    <div class="custom-glasses-section">
      <h2 class="custom-glasses-title">Créez vos lunettes uniques</h2>
      <p class="custom-glasses-text">
        Chez TaVue, nous croyons en l'unicité. Vos lunettes ne devraient pas être comme celles de tout le monde. C'est pourquoi nous vous offrons la possibilité de créer des lunettes qui reflètent votre style personnel. Avec notre outil de personnalisation facile à utiliser, vous pouvez choisir parmi une variété de montures, de verres et de couleurs de branches pour concevoir la paire de lunettes parfaite pour vous.

        Découvrez nos modèles de montures tendance, des designs classiques aux formes contemporaines. Les possibilités sont infinies, tout comme votre style. Vous méritez des lunettes qui vous ressemblent. Nos experts de la fabrication française garantissent la qualité de chaque paire de lunettes. Avec TaVue, l'élégance, la minimalisme et la sophistication sont à portée de main.
      </p>
      <button class="custom-glasses-button">PERSONNALISER MES LUNETTES</button>
    </div>

        <!-- Section des témoignages de clients -->
        <div class="testimonials-section">
      <h2 class="testimonials-title">Témoignages de nos clients</h2>
      <p class="testimonials-subtitle">Ce que nos clients pensent de nous...</p>
      <div class="testimonials">
        <div class="testimonial">
          <img src="/chemin/vers/avatar1.jpg" alt="Avatar 1" />
          <div class="testimonial-content">
            <div class="testimonial-header">
              <span class="testimonial-name">Sophie L.</span>
              <div class="testimonial-rating">★★★★★</div>
            </div>
            <p class="testimonial-comment">
              J'ai récemment commandé mes lunettes chez TaVue, et je suis ravie de ma décision. La personnalisation a été simple, et mes lunettes sont exactement comme je les avais imaginées. La qualité est au rendez-vous, et je reçois régulièrement des compliments à leur sujet. Merci, TaVue
            </p>
          </div>
        </div>
        <div class="testimonial">
          <img src="/chemin/vers/avatar2.jpg" alt="Avatar 2" />
          <div class="testimonial-content">
            <div class="testimonial-header">
              <span class="testimonial-name">Marc B.</span>
              <div class="testimonial-rating">★★★★★</div>
            </div>
            <p class="testimonial-comment">
              Ma première expérience avec TaVue a été très positive. J'ai personnalisé mes lunettes pour un look unique, et elles sont superbes. La livraison a été rapide, mais j'aurais aimé avoir plus d'options de personnalisation pour les branches. Cependant, je recommande TaVue à tous ceux qui veulent des lunettes personnalisées.
            </p>
          </div>
        </div>
        <div class="testimonial">
          <img src="/chemin/vers/avatar3.jpg" alt="Avatar 3" />
          <div class="testimonial-content">
            <div class="testimonial-header">
              <span class="testimonial-name">Lina M.</span>
              <div class="testimonial-rating">★★★★★</div>
            </div>
            <p class="testimonial-comment">
              C'est ma deuxième paire de lunettes de TaVue, et je suis à nouveau enchantée. La personnalisation est amusante, et j'adore avoir des lunettes qui me ressemblent. La qualité est exceptionnelle, et le processus est facile. Je ne peux pas recommander TaVue assez fortement.
            </p>
          </div>
        </div>
        <div class="testimonial">
          <img src="/chemin/vers/avatar4.jpg" alt="Avatar 4" />
          <div class="testimonial-content">
            <div class="testimonial-header">
              <span class="testimonial-name">Thomas G.</span>
              <div class="testimonial-rating">★★★★★</div>
            </div>
            <p class="testimonial-comment">
              Je suis un client fidèle de TaVue, et pour cause ! Mes lunettes personnalisées sont toujours superbes, et le service est excellent. La personnalisation est un jeu d'enfant, et le choix des options est vaste. Mes amis me demandent toujours où j'ai acheté mes lunettes, et je suis fier de leur dire TaVue.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main-content {
    text-align: center;
    background-color: white;
    color: black;
    padding: 20px;
  }

  .main-title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .main-text {
    font-size: 16px;
    text-align: left;
    margin: 0 20px; /* Marge à gauche et à droite du texte */
  }

  .main-button {
    background-color: #8739EA;
    color: white;
    padding: 8px 16px; /* Bouton plus petit */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 0; /* Espace sous le bouton */
    text-align: left; /* Justification à gauche */
  }

  .main-photos {
    display: flex;
    justify-content: space-around;
    padding: 20px 0;
  }

  .photo img {
    width: 200px;
    height: 200px;
  }

  .custom-glasses-section {
    text-align: center;
    background-color: white;
    color: black;
    padding: 20px;
  }

  .custom-glasses-title {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .custom-glasses-text {
    font-size: 16px;
    text-align: left;
    margin: 0 20px; /* Marge à gauche et à droite du texte */
  }

  .custom-glasses-button {
    background-color: #8739EA;
    color: white;
    padding: 8px 16px; /* Bouton plus petit */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 0; /* Espace sous le bouton */
    text-align: left; /* Justification à gauche */
  }

  .testimonials-section {
    background-color: white;
    color: black;
    padding: 20px;
    margin-top: 50px;
  }

  .testimonials-title {
    font-size: 24px;
    margin-bottom: 10px;
    text-align: center;
  }

  .testimonials-subtitle {
    font-size: 16px;
    margin-bottom: 20px;
    text-align: center;
  }

  .testimonials {
    display: flex;
    justify-content: space-around;
  }

  .testimonial {
    background-color: #f5f5f5; /* Gris clair */
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    margin-left: 20px;
  }

  .testimonial img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 10px auto;
  }

  .testimonial-name {
    font-weight: bold;
  }

  .testimonial-rating {
    color: #ffd700; /* Jaune */
  }

  .testimonial-comment {
    margin-top: 10px;
  }

</style>
