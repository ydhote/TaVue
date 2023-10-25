<template>
  <div class="mesperso">
    <h1 class="title">MA PERSONNALISATION</h1>
    <p class="subtitle">Découvrez la personnalisation infinie !</p>

    <div class="customization">
      <div class="left-column">
        <div class="frame">
          <img src="/chemin/vers/monture.jpg" alt="Monture de lunettes personnalisable" />
        </div>
      </div>

      <div class="right-column">
        <div class="customization-option">
          <h2>Personnaliser ma monture</h2>
          <div class="color-options">
            <div class="color-dot" style="background-color: #FF0000"></div>
            <div class="color-dot" style="background-color: #346CFB"></div>
            <div class="color-dot" style="background-color: #E9C193"></div>
            <div class="color-dot" style="background-color: #FF9494"></div>
            <div class="color-dot" style="background-color: #00AF51"></div>
            <div class="color-dot" style="background-color: #67ADA9"></div>
            <div class="color-dot" style="background-color: #000000"></div>
          </div>
        </div>

        <div class="customization-option">
          <h2>Personnaliser mes branches</h2>
          <div class="color-options">
            <div class="color-dot" style="background-color: #FF8900"></div>
            <div class="color-dot" style="background-color: #F8002D"></div>
            <div class="color-dot" style="background-color: #AD00FF"></div>
            <div class="color-dot" style="background-color: #7A7A7A"></div>
            <div class="color-dot" style="background-color: #A1BF96"></div>
            <div class="color-dot" style="background-color: #EBBFBF"></div>
            <div class="color-dot" style="background-color: #000000"></div>
          </div>
        </div>

        <div class="customization-option">
          <h2>Personnaliser mes verres</h2>
          <div class="color-options">
            <div class="color-dot" style="background-color: #000000"></div>
            <div class="color-dot" style="background-color: #FF8900"></div>
            <div class="color-dot" style="background-color: #D5A5EB"></div>
            <div class="color-dot" style="background-color: #8739EA"></div>
            <div class="color-dot" style="background-color: #706F6F"></div>
            <div class="color-dot" style="background-color: #90887E"></div>
            <div class="color-dot" style="background-color: #346CFB"></div>
          </div>
        </div>
      </div>
    </div>

    <button class="order-button">COMMANDER MA PERSONNALISATION</button>
  </div>
</template>

<style scoped>
.mesperso {
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
  border: 1px solid #ccc;
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

.color-options {
  display: flex;
  justify-content: space-between;
}

.color-dot {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
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
}
</style>
