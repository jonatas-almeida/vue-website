<template>
  <div class="welcome-cover" id="home">
    <div class="welcome-text">
      <h1>Welcome to Vue.Js</h1>
      <p>Discover a whole new world with Vue.js</p>
      <button class="btn-see-more">See more</button>
      <img class="arrow-icon" src="../assets/down-arrow.svg" />
    </div>
    <div class="welcome-image">
      <img src="../assets/dev.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomeCover"
};
</script>

<style>
.welcome-cover {
  max-width: 1500px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.welcome-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.welcome-text h1 {
  font-size: 3.5rem;
  font-weight: bold;
  color: rgb(52, 196, 140);
}

.welcome-text p {
  font-weight: bold;
  margin: 20px 0;
  color: rgb(150, 150, 150);
}

.welcome-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-see-more {
  width: 300px;
  font-size: 1.05rem;
  font-weight: bold;
  margin-top: 50px;
  padding: 15px;
  border: none;
  border-radius: 5px;
  background: rgb(52, 196, 140);
  color: white;
  cursor: pointer;
  transition: ease-out 0.4s;
}

.btn-see-more:active {
  background: rgb(34, 131, 94);
  transform: scale(0.9);
}

.btn-see-more:hover {
  width: 350px;
  transition-timing-function: ease-out;
}

@keyframes arrowAnim {
  0% {
    margin-top: 200px;
    opacity: 1;
  }
  100% {
    margin-top: 250px;
    opacity: 0;
  }
}

.arrow-icon {
  width: 24px;
  height: 24px;
  position: absolute;
  animation-name: arrowAnim;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.welcome-image img {
  width: 90%;
  margin-top: 30px;
}
</style>