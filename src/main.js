import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import useRoute from "vue-router";




createApp(App).use(store).use(router).use(useRoute).mount('#app')
