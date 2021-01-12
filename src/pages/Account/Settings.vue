<template>
    <a-card :bodyStyle="{ padding: '16px 0' }">
        <div class="account-settings-info-main">
            <div class="account-settings-info-left">
                <a-menu :mode="collapsedWidth === 0 ? 'horizontal' : 'vertical'" v-model:selectedKeys="selectedKeys" @click="handleMenu">
                    <a-menu-item key="/account/settings/base">基础设置</a-menu-item>
                    <a-menu-item key="/account/settings/security">安全设置</a-menu-item>
                    <a-menu-item key="/account/settings/custom">个性化</a-menu-item>
                    <a-menu-item key="/account/settings/binding">账户绑定</a-menu-item>
                    <a-menu-item key="/account/settings/notification">新消息通知</a-menu-item>
                </a-menu>
            </div>
            <div class="account-settings-info-right">
                <div class="settings-info-title">{{ $route.name }}</div>
                <router-view></router-view>
            </div>
        </div>
    </a-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            selectedKeys: []
        }
    },
    computed: {
        ...mapState({
            collapsedWidth: state => state.app.collapsedWidth
        })
    },
    created(){
        let { path } = this.$route
        this.selectedKeys = [path]
    },
    methods: {
        handleMenu({ key }){
            this.$router.push({ path: key })
        }
    },
    watch: {
        $route(val){
            let { path } = val
            this.selectedKeys = [path]
        }
    }
}
</script>

<style lang="less">
.account-settings-info-main{
    width: 100%;
    overflow: hidden;
    height: 100%;
    display: flex;
    .account-settings-info-left{
        border-right: 1px solid #e8e8e8;
        width: 225px;
        .ant-menu-vertical{
            border-right: none;
        }
    }
    .account-settings-info-right{
        flex: auto;
        padding: 8px 40px;
    }
    .settings-info-title{
        font-size: 20px;
        margin-bottom: 10px;
        color: #333;
    }
}
@media screen and (max-width: 768px){
    .account-settings-info-main{
        display: block;
        .account-settings-info-left{
            width: 100%;
        }
    }
}
</style>