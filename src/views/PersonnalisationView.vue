<script setup>
</script>

<template>
  <div class="container-fluid"> 

    <nav class="navbar navbar-expand-lg navbar-dark justify-content-between">
        <a class="navbar-brand" to="/">Géolocalisation</a>
        <button class="navbar-toggler" 
          type="button" data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarText">
    
            <ul class="navbar-nav">              
                <li class="nav-item">
                  <a class="nav-link active" href="#" @click="select(1)">1.Cartographie OSM</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#" @click="select(2)">2.Calcul trajet via lat/lng</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#" @click="select(3)">3.Gestion adresse</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#" @click="select(4)">4.Calcul trajet via adresse</a>
                </li>
            </ul >
        </div>

    </nav>

    <div class="card" v-if="selection == 1">
      <div class="card-body">
        <MapOsm /> 
      </div> 
    </div>

    <div class="card" v-if="selection == 2">
      <div class="card-body">
        <MapTrajet /> 
      </div> 
    </div>

    <div class="card" v-if="selection == 3">
      <div class="card-body">
        <GestionAdr /> 
      </div> 
    </div>

    <div class="card" v-if="selection == 4">
      <div class="card-body">
        <MapTrajetAdr /> 
      </div> 
    </div>





  </div>
</template>