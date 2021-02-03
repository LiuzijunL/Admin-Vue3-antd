<template>
    <a-form :model="form" :wrapperCol="wrapperCol" @finish="login">
        <a-form-item :rules="{ required: true, message: '请输入账户'}" name="name">
            <a-input v-model:value="form.name" size="large" autocomplete="off" placeholder="账户">
                <template #prefix><component :is="$antIcons['UserOutlined']" /></template>
            </a-input>
        </a-form-item>
        <a-form-item :rules="{ required: true, message: '请输入密码'}" name="password">
            <a-input-password v-model:value="form.password" size="large" placeholder="密码">
                <template #prefix><component :is="$antIcons['LockOutlined']" /></template>
            </a-input-password>
        </a-form-item>
        <a-form-item>
            <div class="other-center">
                <a-checkbox v-model:checked="checked" @change="onChange">记住账号</a-checkbox>
                <a-button type="link">忘记密码</a-button>
            </div>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" html-type="submit" block size="large">Login</a-button>
        </a-form-item>
    </a-form>
</template>

<script>
import { useRouter } from 'vue-router'
let that;
export default {
    data() {
        return {
            form: { name: '', password: '' },
            wrapperCol: { span: 24 },
        }
    },
    mounted(){
        that = this
    },
    setup(){
        const router = useRouter()
        const login = (values) => {
            let { name, password } = values
            if(name !== 'admin' || password !== 'admin'){
                return that.$message.error('账户或密码错误')
            }
            that.$message.success('登录成功')
            localStorage.setItem('x-admin', 'admin')
            router.push('/')
        }
        return {
            login
        }
    }
}
</script>