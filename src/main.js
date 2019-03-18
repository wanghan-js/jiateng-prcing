import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import './styles.less'


const __main__ = () => {
    Vue.use(ElementUI)
    Vue.config.productionTip = false
    
    new Vue({
        el: '#app',
        render: h => h(App),
    })
}

__main__()
