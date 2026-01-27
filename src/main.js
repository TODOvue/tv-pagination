import { createApp } from 'vue'
import TvPagination from './demo/Demo.vue'
import '@todovue/tv-demo/style.css'
import '@todovue/tv-button/style.css'
import './style.scss'

const app = createApp(TvPagination)
app.mount('#tv-pagination')
