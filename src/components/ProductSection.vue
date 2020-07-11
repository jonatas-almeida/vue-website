<template>
  <section class="products-section" id="products">
    <div class="products-text">
      <h2 class="section-title">Products</h2>
    </div>
    <div class="card-container">
      <div class="card-content">
        <div class="card-img card-one"></div>
        <div class="card-info">
          <h3 class="card-title">Lovely Pet</h3>
          <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button class="btn-details">See more</button>
        </div>
      </div>

      <div class="card-content card-two">
        <div class="card-img card-two"></div>
        <div class="card-info">
          <h3 class="card-title">Lovely Pet App</h3>
          <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button class="btn-details">See more</button>
        </div>
      </div>

      <div class="card-content">
        <div class="card-img card-three"></div>
        <div class="card-info">
          <h3 class="card-title">E.nygma</h3>
          <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button class="btn-details">See more</button>
        </div>
      </div>

      <div class="card-content">
        <div class="card-img card-four"></div>
        <div class="card-info">
          <h3 class="card-title">DesignIt</h3>
          <p class="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button class="btn-details">See more</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductsSection"
};
</script>

<style>
.section-title {
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 10px;
  margin-bottom: 50px;
}

.section-title::before {
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

.products-text {
  max-width: 1500px;
  margin: 0 auto;
}

.products-section {
  padding: 100px;
  background: rgb(248, 248, 248);
  transform: skewY(5deg);
}

.products-section > .products-text {
  transform: skewY(-5deg);
}

.products-section > .card-container {
  transform: skewY(-5deg);
}

.card-img {
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: #b8b8b8;
  margin-top: 0px;
  margin-bottom: 20px;
}

.card-one {
  background-image: url("../assets/code.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.card-two {
  background-image: url("../assets/mobile.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.card-three {
  background-image: url("../assets/dev.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card-four {
  background-image: url("../assets/programming.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.card-container {
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.card-content {
  width: 300px;
  height: 460px;
  border-radius: 10px;
  background: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: ease-out 0.2s;
}

.card-content:hover::before {
  height: 20%;
  border-radius: 0px;
}

.card-content:hover {
  transform: scale(1.1);
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.5rem;
  text-align: center;
  color: rgb(52, 196, 140);
  margin-top: 10px;
  padding: 20px;
}

.card-description {
  font-size: 10pt;
  padding: 10px;
  text-align: center;
}

.btn-details {
  width: 60%;
  margin: 0 20%;
  margin-top: 15px;
  padding: 10px;
  border: none;
  border: 2px solid rgb(52, 196, 140);
  color: rgb(52, 196, 140);
  font-weight: bold;
  font-size: 1.25rem;
  background: transparent;
  cursor: pointer;
  transition: ease-out 0.2s;
  border-radius: 5px;
}

.btn-details:hover {
  background: rgb(52, 196, 140);
  color: white;
}
</style>