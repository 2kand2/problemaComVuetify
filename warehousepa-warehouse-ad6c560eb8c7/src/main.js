import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Pinia
import { createPinia } from 'pinia'

// Vue-router
import router from "@/router/index.js"

const pinia = createPinia()

const vuetify = createVuetify({
    components,
    directives,
    icons:{
        defaultSet: 'mdi'
    }
})



const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(pinia)

app.mount('#app')
