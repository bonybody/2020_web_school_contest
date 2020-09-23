import Vue from 'vue'
import App from './App.vue'
import VuePrlx from 'vue-prlx'
import VueObserveVisibility from 'vue-observe-visibility'
import VueScrollTo from 'vue-scrollto';

Vue.use(VueObserveVisibility)
Vue.use(VuePrlx);
import { VuePrlxDirective } from 'vue-prlx'
Vue.directive('prlx', VuePrlxDirective);
Vue.use(VueScrollTo, {
  duration: 500,
  easing: "ease",
  offset: -150,
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
