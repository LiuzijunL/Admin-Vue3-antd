<template>
    <div class="login-layout-wrapper">
        <div class="login-conter">
            <h1>Admin Pro</h1>
            <p style="color: #999">Ant Design and Vue3</p>
            <div class="main">
                <a-tabs v-model="activeKey" @change="callback">
                    <a-tab-pane key="1" tab="账号密码登录">
                        <sign-in></sign-in>
                        <div class="other-center">
                            <div class="user-login-other">
                                <span>其他登录方式</span>
                                <component :is="$antIcons['QqOutlined']" />
                                <component :is="$antIcons['WechatOutlined']" />
                                <component :is="$antIcons['AlipayCircleOutlined']" />
                            </div>
                            <a-button type="link">手机号登录</a-button>
                        </div>
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="注册账号">
                        <register></register>
                    </a-tab-pane>
                </a-tabs>
            </div>
        </div>
        <div class="login-footer">
            <p>鄂ICP备案********</p>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import SignIn from '@/components/Login/Sign.vue'
import Register from '@/components/Login/Register.vue'
export default {
    name: 'login',
    data(){
        return {
            checked: false
        }
    },
    components: {
        SignIn,
        Register
    },
    methods: {
        onChange(event){
            this.checked = event.target.checked
        }
    },
    setup(){
        const activeKey = ref('1')
        const callback = (e) => {
            activeKey.value = e
        }
        return {
            activeKey,
            callback,
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