import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Vant from 'vant';
import 'vant/lib/index.css';
import router from './router'

import VueAMap from 'vue-amap';

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '60c309f2f040c5e174701914ba78ac28',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.4'
});



Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
