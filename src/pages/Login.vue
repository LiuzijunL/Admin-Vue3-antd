<template>
    <div class="login-layout-wrapper">
        <div class="login-conter">
            <h1>Admin Pro</h1>
            <p style="color: #999">Ant Design and Vue3</p>
            <div class="main">
                <a-tabs v-model="activeKey" @change="callback">
                    <a-tab-pane key="1" tab="账号密码登录"></a-tab-pane>
                    <a-tab-pane key="2" tab="手机号登录"></a-tab-pane>
                </a-tabs>
                <a-form :model="form" :wrapperCol="wrapperCol" @finish="login">
                    <a-form-item :rules="{ required: true, message: '请输入账户'}" name="name">
                        <a-input v-model:value="form.name" size="large" autocomplete="off" placeholder="账户：admin">
                            <template #prefix><component :is="$antIcons['UserOutlined']" /></template>
                        </a-input>
                    </a-form-item>
                    <a-form-item :rules="{ required: true, message: '请输入密码'}" name="password">
                        <a-input-password v-model:value="form.password" size="large" placeholder="密码：admin">
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
                <div class="other-center">
                    <div class="user-login-other">
                        <span>其他登录方式</span>
                        <component :is="$antIcons['QqOutlined']" />
                        <component :is="$antIcons['WechatOutlined']" />
                        <component :is="$antIcons['AlipayCircleOutlined']" />
                    </div>
                    <a-button type="link">注册账号</a-button>
                </div>
            </div>
        </div>
        <div class="login-footer">
            <p>鄂ICP备案********</p>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
let that;
export default {
    name: 'login',
    data(){
        return {
            form: {
                name: '',
                password: ''
            },
            wrapperCol: { span: 24 },
            checked: false
        }
    },
    mounted(){
        that = this
    },
    methods: {
        onChange(event){
            this.checked = event.target.checked
        }
    },
    setup(){
        const activeKey = ref('1')
        const router = useRouter()
        const callback = (e) => {
            activeKey.value = e
        }
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
            activeKey,
            callback,
            login
        }
    }
}
</script>

<style scope lang="less">
.login-layout-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    height: 100vh;
    background-color: #f0f2f5;
    background-image: url('../assets/background.svg');
    background-size: 100%;
}
.login-conter{
    padding-top: 60px;
    flex: 1 1;
    box-sizing: border-box;
    text-align: center;
    .main{
        width: 362px;
        min-width: 260px;
        margin: 0 auto;
    }
    .ant-tabs-bar{
        border-bottom: none;
    }
    .other-center{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .user-login-other{
        display: flex;
        align-items: center;
        .anticon{
            font-size: 22px;
            margin-left: 10px;
            cursor: pointer;
            color: #c0c2c4;
            transition: color 0.3s;
            &:hover{
                color: #1890ff;
            }
        }
    }
}
.login-footer{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    height: 80px;
    color: #999;
}
</style>