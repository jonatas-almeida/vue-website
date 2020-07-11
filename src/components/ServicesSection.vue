<template>
  <section class="services-section" id="services">
    <div class="services-container">
      <div class="services-img">
        <img class="service-img-one" src="../assets/service-img.svg" />
      </div>
      <div class="services-info">
        <h3 class="services-title">Services</h3>
        <p
          class="services-description"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel accumsan sem. Ut sed nibh nec nulla finibus feugiat. Aliquam interdum rhoncus velit sit amet consectetur.</p>
        <p
          class="services-description"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel accumsan sem. Ut sed nibh nec nulla finibus feugiat. Aliquam interdum rhoncus velit sit amet consectetur.</p>

        <ul class="services-list">
          <li>Web Development</li>
          <li>Design Services</li>
          <li>Software Development</li>
          <li>Mobile Apps</li>
        </ul>

        <button class="btn-buy-services">Contract Services</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
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
  transition: ease-out 0.2s;
}

.service-img-one {
  width: 100%;
  margin-top: 0px;
  margin-right: 50px;
  transition: ease-out 0.4s;
}

.services-title {
  font-size: 1.5rem;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 10px;
  margin-bottom: 50px;
}

.services-info {
  padding: 50px;
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

.services-list {
  margin-top: 50px;
  list-style: none;
}

.services-list li {
  margin-bottom: 15px;
  font-weight: bold;
  color: rgb(168, 168, 168);
  display: flex;
  align-items: center;
}

.services-list li::before {
  content: "";
  width: 5px;
  height: 5px;
  background: rgb(52, 196, 140);
  border-radius: 50%;
  margin-right: 20px;
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