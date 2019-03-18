import Vue from 'vue'

import App from './App.vue'

const options = {
    render: h => h(App),
}
const app = new Vue(options)

app.$mount('#app')

Vue.config.productionTip = false
