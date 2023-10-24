<script setup></script>

<template>
  <footer class="footer" style="height: 350px;">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <!-- Section 1 du footer -->
                <img src="../assets/images/tavuelogo.png" alt="Votre Logo" class="navbar-brand" style="max-height: 50px;">
                <p>Créez votre regard,<br>Nous le rendons unique</p>
            </div>
            <div class="col-md-8">
                <!-- Section 2 du footer (catégories et sous-catégories) -->
                <div class="footer-categories">
                    <div class="footer-category">
                        <h3 class="footer-title">A Propos</h3>
                        <ul class="footer-list">
                            <li>Qui sommes-nous ?</li>
                            <li>Notre histoire</li>
                            <li>Notre philosophie</li>
                            <li>L'équipe</li>
                        </ul>
                    </div>
                    <div class="footer-category">
                        <h3 class="footer-title">Produits</h3>
                        <ul class="footer-list">
                            <li>Lunettes de soleil</li>
                            <li>Lunettes de vue</li>
                            <li>Montures</li>
                            <li>Verres</li>
                            <li>Accessoires</li>
                        </ul>
                    </div>
                    <div class="footer-category">
                        <h3 class="footer-title">Services</h3>
                        <ul class="footer-list">
                            <li>Personnalisation</li>
                            <li>Guide des tailles</li>
                            <li>Service Client</li>
                            <li>Politique de retour</li>
                        </ul>
                    </div>
                    <div class="footer-category">
                        <h3 class="footer-title">Ressources</h3>
                        <ul class="footer-list">
                            <li>Blog</li>
                            <li>Témoignages clients</li>
                            <li>FAQ</li>
                            <li>Nos politiques</li>
                        </ul>
                    </div>
                    <div class="footer-category">
                        <h3 class="footer-title">Contact</h3>
                        <ul class="footer-list">
                            <li>Nous contacter</li>
                            <li>Emplacement</li>
                            <li>Newsletter</li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
    <p class="copyright-text">© 2023 TaVue. Tous droits réservés. Réalisé par Yann</p>
    </div>
</footer>

</template>

<style scoped>
footer {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #333;
  color: white;
  padding: 20px 0;
  margin-top: auto;
}

.footer a {
  color: #FFD700; /* Couleur des liens dans le footer */
}

.footer-categories {
    display: flex;
    justify-content: space-between; /* Pour l'espacement entre les catégories */
}

.footer-category {
    margin: 10px; /* Espacement entre les catégories */
}

ul {
    list-style: none; /* Supprime les puces de la liste */
    padding: 0;
}

li {
    margin: 5px 0; /* Espacement entre les éléments de la liste */
}

.footer-bottom {
    text-align: center;
    background-color: white; /* Fond blanc */
    color: grey; /* Couleur de texte gris */
}

/* Styles pour le footer */
.footer {
    background-color: #000000; /* Couleur de fond du footer */
}

/* Styles pour les catégories du footer */
.footer-title {
    color: #FFFFFF; /* Couleur du texte des titres de catégories */
}

.footer-list li {
    color: #CACACA; /* Couleur du texte des éléments de liste */
}

/* Styles pour le paragraphe "Créez votre regard, Nous le rendons unique" */
.footer p {
    color: #CACACA; /* Couleur du texte du paragraphe */
}

.copyright-text {
  font-size: 16px;
  color: white;
  position: absolute;
  bottom: 10px; /* Place le texte au bas du footer avec 10px de marge par rapport au bas */
  width: 100%;
}
</style>

