import { createStore } from 'vuex'

import app from './modules/app'
import tab from './modules/tab'

const store = createStore({
    modules: {
        app,
        tab
    }
})

export default store
