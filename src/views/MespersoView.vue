<template>
  <div class="mesperso">
    <h1 class="title">MA PERSONNALISATION</h1>
    <p class="subtitle">Découvrez la personnalisation infinie !</p>

    <div class="customization">
      <div class="left-column">
        <div class="frame">
          <img src="/src/assets/images/lunette.png" alt="Monture de lunettes personnalisable" />
        </div>
      </div>

      <div class="right-column">
        <div class="customization-option">
          <h2>Choisir la forme de ma monture</h2>
          <div class="shape-options">
            <label>
              Rectangulaire
              <input
                type="radio"
                v-model="selectedShape"
                value="rectangulaire"
              />
            </label>
            <label>
              Ovale
              <input
                type="radio"
                v-model="selectedShape"
                value="ovale"
              />
            </label>
            <label>
              Ronde
              <input
                type="radio"
                v-model="selectedShape"
                value="ronde"
              />
            </label>
            <label>
              Carrée
              <input
                type="radio"
                v-model="selectedShape"
                value="carrée"
              />
            </label>
          </div>
        </div>

        <div class="customization-option">
          <h2>Personnaliser ma monture</h2>
          <div class="color-options">
            <div
              class="color-dot"
              :class="{ 'selected': selectedMonture === '#FF0000' }"
              @click="selectMontureColor('#FF0000')"
              style="background-color: #FF0000"
            ></div>
            <div
              class="color-dot"
              :class="{ 'selected': selectedMonture === '#346CFB' }"
              @click="selectMontureColor('#346CFB')"
              style="background-color: #346CFB"
            ></div>
            <div
              class="color-dot"
              :class="{ 'selected': selectedMonture === '#E9C193' }"
              @click="selectMontureColor('#E9C193')"
              style="background-color: #E9C193"
            ></div>
            <div
              class="color-dot"
              :class="{ 'selected': selectedMonture === '#FF9494' }"
              @click="selectMontureColor('#FF9494')"
              style="background-color: #FF9494"
            ></div>
            <div
              class="color-dot"
              :class="{ 'selected': selectedMonture === '#00AF51' }"
              @click="selectMontureColor('#00AF51')"
              style="background-color: #00AF51"
            ></div>
            <div
              class="color-dot"
              :class="{ 'selected': selectedMonture === '#67ADA9' }"
              @click="selectMontureColor('#67ADA9')"
              style="background-color: #67ADA9"
            ></div>
            <div
              class="color-dot"
              :class="{ 'selected': selectedMonture === '#000000' }"
              @click="selectMontureColor('#000000')"
              style="background-color: #000000"
            ></div>
          </div>
        </div>

        <div class="customization-option">
          <h2>Personnaliser mes branches</h2>
          <div class="color-options">
            <div
              class="color-dot"
              :class="{ 'selected': selectedBranches === '#FF8900' }"
              @click="selectBranchesColor('#FF8900')"
              style="background-color: #FF8900"
            ></div>
            <div
              class="color-dot"
              :class="{ 'selected': selectedBranches === '#F8002D' }"
              @click="selectBranchesColor('#F8002D')"
              style="background-color: #F8002D"
            ></div>
            <div
              class="color-dot"
              :class="{ 'selected': selectedBranches === '#AD00FF' }"
              @click="selectBranchesColor('#AD00FF')"
              style="background-color: #AD00FF"
            ></div>
            <div
              class="color-dot"
              :class="{ 'selected': selectedBranches === '#7A7A7A' }"
              @click="selectBranchesColor('#7A7A7A')"
              style="background-color: #7A7A7A"
            ></div>
            <div
              class="color-dot"
              :class="{ 'selected': selectedBranches === '#A1BF96' }"
              @click="selectBranchesColor('#A1BF96')"
              style="background-color: #A1BF96"
            ></div>
            <div
              class="color-dot"
              :class="{ 'selected': selectedBranches === '#EBBFBF' }"
              @click="selectBranchesColor('#EBBFBF')"
              style="background-color: #EBBFBF"
            ></div>
            <div
              class="color-dot"
              :class="{ 'selected': selectedBranches === '#000000' }"
              @click="selectBranchesColor('#000000')"
              style="background-color: #000000"
            ></div>
          </div>
        </div>

        <div class="customization-option">
          <h2>Personnaliser mes verres</h2>
          <div class="color-options">
            <div
              class="color-dot"
              :class="{ 'selected': selectedVerres === '#000000' }"
              @click="selectVerresColor('#000000')"
              style="background-color: #000000"
            ></div>
            <div
              class="color-dot"
              :class="{ 'selected': selectedVerres === '#FF8900' }"
              @click="selectVerresColor('#FF8900')"
              style="background-color: #FF8900"
            ></div>
            <div
              class="color-dot"
              :class="{ 'selected': selectedVerres === '#D5A5EB' }"
              @click="selectVerresColor('#D5A5EB')"
              style="background-color: #D5A5EB"
            ></div>
            <div
              class="color-dot"
              :class="{ 'selected': selectedVerres === '#8739EA' }"
              @click="selectVerresColor('#8739EA')"
              style="background-color: #8739EA"
            ></div>
            <div
              class="color-dot"
              :class="{ 'selected': selectedVerres === '#706F6F' }"
              @click="selectVerresColor('#706F6F')"
              style="background-color: #706F6F"
            ></div>
            <div
              class="color-dot"
              :class="{ 'selected': selectedVerres === '#90887E' }"
              @click="selectVerresColor('#90887E')"
              style="background-color: #90887E"
            ></div>
            <div
              class="color-dot"
              :class="{ 'selected': selectedVerres === '#346CFB' }"
              @click="selectVerresColor('#346CFB')"
              style="background-color: #346CFB"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <button class="order-button">COMMANDER MA PERSONNALISATION</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedShape: null,
      selectedMonture: null,
      selectedBranches: null,
      selectedVerres: null,
    };
  },
  methods: {
    selectShape(shape) {
      this.selectedShape = shape;
    },
    selectMontureColor(color) {
      this.selectedMonture = color;
    },
    selectBranchesColor(color) {
      this.selectedBranches = color;
    },
    selectVerresColor(color) {
      this.selectedVerres = color;
    },
  },
};
</script>

<style scoped>
.mesperso {
  text-align: center;
  color: black;
  padding: 20px;
}

.title {
  font-size: 40px;
  margin-top: 67px;
  font-family: 'Arima Madurai', sans-serif;
}

.subtitle {
  font-size: 16px;
  margin-bottom: 20px;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.customization {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}

.left-column {
  flex: 1;
  margin: 0 20px;
}

.frame img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
}

.right-column {
  flex: 1;
  text-align: left;
}

.customization-option {
  margin: 20px 0;
  font-family: 'Arima Madurai', sans-serif;
}

h2 {
  font-size: 28px;
  margin-bottom: 10px;
}

.shape-options {
  display: flex;
  flex-wrap: wrap;
}



.shape-options {
  display: flex;
  flex-direction: row; /* Afficher les options de forme de monture en colonne */
  gap: 10px; /* Ajoute de l'espace vertical entre les options */
}


.shape-option input {
  margin-left: 5px;
}

.color-options {
  display: flex;
  justify-content: space-between;
}

.color-dot {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  transition: border 0.3s;
}

.selected {
  border: 2px solid #8739EA; /* Couleur de sélection */
}

.order-button {
  background-color: #8739EA;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 40px;
  font-weight: 600;
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-bottom: 50px;
}


</style>
