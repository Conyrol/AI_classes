import Vue from 'vue'
import App from './App.vue'

// vue-router (前端路由)
import router from './router';

// element-ui (ui库)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// less (扩展css库)
import less from 'less';
Vue.use(less);

// md
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor);

Vue.prototype.$main_url = "http://127.0.0.1:8080";
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
