//导入所有接口
import api from './api'

const install = Vue => {
    if(install.installed) return

    install.installed = true

    Object.defineProperties(Vue.prototype, {
        //此处挂载
        $api: {
            get() {
                return api
            }
        }
    })
}

export default install