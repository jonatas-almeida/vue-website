<template>
  <section class="services-section" id="services">
    <div class="services-container">
      <div class="services-info">
        <h3 class="services-title">Services</h3>

        <div class="service-signin">
          <div class="service-card service-one">
            <h1>Websites</h1>
            <ul class="services-list">
              <li>Landing Page</li>
              <li>Websites responsivos</li>
              <li>Aluguel de Domínio</li>
              <li>Manutenção do Site</li>
            </ul>
            <p class="price">
              <sup>R$</sup>99/mês
            </p>
            <div class="button-section">
              <button class="btn-buy-service">Buy service</button>
            </div>
          </div>
          <div class="service-card service-two">
            <h1>Software</h1>
            <ul class="services-list">
              <li>Software Personalizado</li>
              <li>Softwares para empresas</li>
              <li>Manutenção</li>
            </ul>
            <p class="price">
              <sup>R$</sup>300/mês
            </p>
            <div class="button-section">
              <button class="btn-buy-service">Buy service</button>
            </div>
          </div>
          <div class="service-card service-three">
            <h1>Design</h1>
            <ul class="services-list">
              <li>Logo e Identidade Visual</li>
              <li>Cartões de Visita</li>
              <li>Marketing Digital</li>
              <li>Banners e Flyers</li>
            </ul>
            <p class="price">
              <sup>R$</sup>45/mês
            </p>
            <div class="button-section">
              <button class="btn-buy-service">Buy service</button>
            </div>
          </div>
        </div>
      </div>
      <div class="services-img">
        <img class="service-img-one" src="../assets/service-img.svg" />
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
* {
  font-family: "Montserrat", sans-serif;
}

.services-section {
  padding: 100px;
}

.services-container {
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
}

.services-img {
  display: flex;
}

.service-img-one {
  max-width: 600px;
}

.services-title {
  font-size: 1.5rem;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 10px;
  margin-bottom: 50px;
}

.services-info {
  width: 100%;
  padding: 20px;
}

.services-description {
  margin-bottom: 20px;
}

.services-title::before {
  content: "";
  width: 60px;
  height: 5px;
  background: rgb(52, 196, 140);
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  margin-bottom: 10px;
  transition: ease-out 0.4s;
}

.service-signin {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.service-card {
  max-width: 600px;
  height: 400px;
  margin-right: 20px;
  outline: 2px solid #ddd;
  display: flex;
  flex: 1;
  flex-direction: column;
  transition: ease-out 0.2s;
  cursor: default;
}

.service-card:hover {
  transition-timing-function: ease-out;
  outline: 2px solid rgb(52, 196, 140);
  margin-top: -5px;
}

.service-card:hover h1 {
  color: rgb(52, 196, 140);
}

.service-card:hover li {
  color: rgb(61, 61, 61);
}

.service-card:hover .btn-buy-service {
  background: rgb(52, 196, 140);
  color: white;
}

.service-card:hover .price {
  color: black;
}

.service-card h1 {
  width: 100%;
  height: 60px;
  padding-top: 30px;
  text-align: center;
  font-size: 24pt;
  color: rgb(151, 151, 151);
  transition: ease-out 0.2s;
}

.services-list {
  width: 100%;
  height: 100%;
  align-self: center;
  padding: 30px;
  list-style: none;
}

.services-list li {
  padding: 10px;
  font-size: 12pt;
  color: rgb(151, 151, 151);
  transition: ease-out 0.2s;
}

.price {
  text-align: center;
  margin: 10px;
  position: relative;
  font-size: 2rem;
  margin-top: -20px;
  margin-bottom: 30px;
  font-weight: bold;
  color: rgb(124, 124, 124);
  transition: ease-out 0.2s;
}

.button-section {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

.btn-buy-service {
  width: 100%;
  margin: 0;
  border: none;
  font-size: 1.2rem;
  padding: 10px;
  font-weight: bold;
  color: rgb(151, 151, 151);
  transition: ease-out 0.2s;
  cursor: pointer;
}

.btn-buy-services {
  margin-top: 60px;
  width: 40%;
  padding: 20px;
  border: 3px solid rgb(52, 196, 140);
  border-radius: 5px;
  background: transparent;
  color: rgb(52, 196, 140);
  font-size: 1.2rem;
  cursor: pointer;
  font-weight: bold;
  transition: ease-out 0.2s;
}

.btn-buy-services:hover {
  background: rgb(52, 196, 140);
  color: white;
}
</style>