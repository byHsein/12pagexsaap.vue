import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'


/* import the fontawesome core */
import {
    library
} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {
    FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
    faTwitter
} from '@fortawesome/free-brands-svg-icons'
import {
    faFacebook
} from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

/* import specific icons */
import {
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faUser,
    faUserSecret,
    faR,
    faHandSparkles,
    faCheck,
    faMagnifyingGlass,
    faBars,
    faSquareXmark,faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faBars, faSquareXmark, faCircleXmark, faAngleDown, faUser, faAngleLeft, faAngleRight, faR, faHandSparkles, faTwitter, faFacebook, faInstagram, faCheck, faMagnifyingGlass)



createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')