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
                <a-checkbox v-model:checked="checked">记住账号</a-checkbox>
                <a-button type="link">忘记密码</a-button>
            </div>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" html-type="submit" block size="large" :loading="loading">Login</a-button>
        </a-form-item>
    </a-form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
let that;
export default {
    data() {
        return {
            form: { name: '', password: '' },
            wrapperCol: { span: 24 },
            checked: false
        }
    },
    mounted(){
        that = this
    },
    setup(){
        let loading = ref(false)
        const router = useRouter()
        const login = async (values) => {
            try {
                loading.value = true
                let password = that.$utils.Md5ChangePass(values.password)
                values = Object.assign({}, values, { password })
                const { code, msg, data } = await that.$api.user.login(values)
                if(code === 0){
                    that.$message.success('登录成功')
                    localStorage.setItem('x-admin', JSON.stringify(data))
                    router.push('/')
                }else{
                    that.$message.error(msg)
                }
                loading.value = false
            } catch (err) {
                loading.value = false
                that.$message.error(`异常：${err}`)
            }
        }
        return {
            login,
            loading
        }
    }
}
</script>