import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'


library.add(faPause, faPlay);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
    store,
    render: h => h(App)
}).$mount('#app');
