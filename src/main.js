import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { stateSymbol, createState } from './store/comm'
import Utils from './utils'
import * as antIcons from '@ant-design/icons-vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

//注册组件
Object.keys(antIcons).forEach(key => {
    app.component(key, antIcons[key])
})
//添加组件
app.config.globalProperties.$antIcons = antIcons

app.config.globalProperties.$utils = Utils

app.use(router).use(store).use(Antd)
// .provide(stateSymbol, createState())

app.mount('#app')
