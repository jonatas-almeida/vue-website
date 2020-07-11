<template>
  <section class="contact-section" id="contact">
    <div class="contact-container">
      <h3 class="contact-title">Contact</h3>
      <div class="contact-content">
        <div class="newsletter">
          <input class="newsletter-text" type="email" placeholder="Assine nossa newsletter" />
          <input class="btn-send" type="submit" value="Send" />
        </div>
        <div class="contact-fields">
          <form method="POST">
            <div class="user-info">
              <input class="name" type="text" placeholder="Nome completo" />
              <input class="email" type="email" placeholder="E-mail" />
            </div>
            <div class="user-data">
              <input class="subject" type="text" placeholder="Assunto" />
              <br />
              <textarea class="message" cols="50" rows="10" placeholder="Mensagem"></textarea>
              <br />
              <input class="btn-send-info" type="button" value="Send" />
            </div>
          </form>
        </div>
      </div>
      <div class="footer">
        <h5>Todos os Direitos Reservados &copy; Jonatas Almeida, 2020</h5>
        <div class="social-media">
          <a href="https://www.linkedin.com/in/jonatas-almeida/" target="_blank">
            <img src="../assets/linkedin.svg" />
          </a>
          <a href="https://www.instagram.com/jonatas_almeida00" target="_blank">
            <img src="../assets/instagram.svg" />
          </a>
          <a href="https://www.facebook.com/jonatas.almeida.1422/" target="_blank">
            <img src="../assets/facebook.svg" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactSection"
};
</script>

<style>
.contact-section {
  padding: 100px;
  background: rgb(248, 248, 248);
}

.contact-container {
  max-width: 1500px;
  margin: 0 auto;
}

.contact-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contact-title {
  font-size: 1.5rem;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 10px;
  margin-bottom: 50px;
}

.contact-title::before {
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

.newsletter {
  display: flex;
}

.newsletter-section-title {
  position: absolute;
}

.newsletter-text {
  width: 400px;
  padding: 10px;
  font-size: 14pt;
  border: 1px solid rgb(184, 184, 184);
  border-radius: 0px;
}

.btn-send {
  width: 150px;
  border: none;
  background: rgb(52, 196, 140);
  font-size: 1rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: ease-out 0.2s;
}

.btn-send:hover {
  background: rgb(35, 138, 98);
  color: white;
}

form {
  width: 100%;
  height: 100%;
}

.name {
  max-width: 200px;
  padding: 10px;
  margin: 10px;
  font-size: 1rem;
  border: 1px solid rgb(184, 184, 184);
}

.email {
  width: 355px;
  padding: 10px;
  margin: 10px;
  font-size: 1rem;
  border: 1px solid rgb(184, 184, 184);
}

.subject {
  width: 600px;
  padding: 10px;
  margin: 10px;
  font-size: 1rem;
  border: 1px solid rgb(184, 184, 184);
}

.message {
  width: 600px;
  padding: 10px;
  margin: 10px;
  font-size: 1rem;
  border: 1px solid rgb(184, 184, 184);
}

.btn-send-info {
  width: 200px;
  margin-left: 10px;
  padding: 15px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  background: rgb(52, 196, 140);
  cursor: pointer;
  color: white;
  transition: ease-out 0.2s;
}

.btn-send-info:hover {
  background: rgb(35, 138, 98);
  color: white;
}

.footer h5 {
  color: rgb(156, 156, 156);
}

.social-media {
  margin-top: 20px;
  display: flex;
}

.social-media img {
  width: 24px;
  margin-right: 10px;
  cursor: pointer;
}
</style>