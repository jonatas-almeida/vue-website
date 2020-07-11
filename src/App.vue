<template>
  <div>
    <HeaderPrincipal />
    <div id="app">
      <WelcomeCover />
      <ProductSection />
      <ServicesSection />
      <ContactSection />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>


<style>
* {
  scroll-behavior: smooth;
}

#app {
  height: 100vh;
}
</style>
