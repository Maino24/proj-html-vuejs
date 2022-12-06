
import Vue from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

/* import the fontawesome core */
//import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { } from '@fortawesome/free-brands-svg-icons'
//import { faBriefcase, faChartSimple, faPlaneDeparture, faEarthAmericas, faBox } from '@fortawesome/free-regular-svg-icons'
//import { faComputer } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
//library.add(faComputer, faBriefcase, faChartSimple, faPlaneDeparture, faEarthAmericas, faBox)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
