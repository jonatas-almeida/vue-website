import Vue from 'vue'
import App from './App.vue'

//Componentes Externos
import HeaderPrincipal from "./components/HeaderPrincipal.vue";
import WelcomeCover from "./components/WelcomeCover.vue";
import ProductSection from "./components/ProductSection.vue";
import ServicesSection from "./components/ServicesSection.vue";

Vue.config.productionTip = false

//Importado globalmente
Vue.component("HeaderPrincipal", HeaderPrincipal)
Vue.component("WelcomeCover", WelcomeCover)
Vue.component("ProductSection", ProductSection)
Vue.component("ServicesSection", ServicesSection)

new Vue({
  render: h => h(App),
}).$mount('#app')
