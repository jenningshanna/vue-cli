import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueStripeCheckout from 'vue-stripe-checkout'

Vue.use(VueStripeCheckout, 'pk_test_YEPWfjMqdWrR2nrIAevve7QI');

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
