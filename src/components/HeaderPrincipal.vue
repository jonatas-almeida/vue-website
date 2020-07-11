<template>
  <header>
    <nav class="menu">
      <div class="menu-container">
        <div class="logo"></div>
        <ul class="menu-items">
          <li>
            <a href="#home">home</a>
          </li>
          <li>
            <a href="#products">products</a>
          </li>
          <li>
            <a href="#services">services</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>



<script>
export default {
  name: "HeaderPrincipal"
};
</script>



<style>
* {
  margin: 0;
  padding: 0;
  outline: 0;
  font-family: Montserrat, sans-serif;
}

a {
  text-decoration: none;
  color: #222;
}

.logo {
  width: 30px;
  height: 30px;
  background: url("../assets/logo.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.menu {
  width: 100%;
  padding: 20px;
  background: white;
  position: fixed;
  z-index: 99;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}

.menu-container {
  max-width: 1500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.menu-items {
  max-width: 700px;
  display: flex;
  flex: 1 1 700px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style: none;
}

.menu-items li::before {
  content: "";
  width: 20px;
  height: 3px;
  margin-bottom: 5px;
  background: rgb(52, 196, 140);
  display: flex;
  justify-items: space-between;
  transition: ease-out 0.2s;
  border-radius: 10px;
}

.menu-items li:hover::before {
  width: 50px;
}

.menu-items li {
  font-size: 10pt;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin: 0 30px;
  color: #222;
  cursor: pointer;
}
</style>