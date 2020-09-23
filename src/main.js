import Vue from 'vue'
import App from './App.vue'
import VuePrlx from 'vue-prlx'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)
Vue.use(VuePrlx);
import { VuePrlxDirective } from 'vue-prlx'
Vue.directive('prlx', VuePrlxDirective);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
