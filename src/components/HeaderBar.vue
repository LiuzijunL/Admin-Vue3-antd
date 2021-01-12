<template>
    <a-layout-header :style="{ background: '#fff', padding: 0, height: '48px', lineHeight: '48px' }">
        <div class="pro-layout-header">
            <div class="pro-global-header-collapsed-button" @click="handleCollapse">
                <component :is="$antIcons[collapsed ? 'MenuUnfoldOutlined' : 'MenuFoldOutlined']" />
            </div>
            <div style="flex: 1 1"></div>
            <div class="pro-header-right">
                <a-dropdown placement="bottomCenter">
                    <span>
                        <a-avatar :size="32" :src="userInfo.avatar">
                            <template #icon><component :is="$antIcons['UserOutlined']" /></template>
                        </a-avatar>
                        <span class="pro-header-name">{{ userInfo.userName }}</span>
                    </span>
                    <template #overlay>
                        <a-menu @click="menuClick">
                            <a-menu-item key="/account/center"><component :is="$antIcons['UserOutlined']" />个人中心</a-menu-item>
                            <a-menu-item key="/account/settings"><component :is="$antIcons['SettingOutlined']" />个人设置</a-menu-item>
                            <a-menu-divider />
                            <a-menu-item key="/login"><component :is="$antIcons['LogoutOutlined']" />退出登录</a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
                <a-dropdown>
                    <component :is="$antIcons['GlobalOutlined']" />
                    <template #overlay>
                        <a-menu @click="languageClick">
                            <a-menu-item key="1"><span>CN</span> 简体中文</a-menu-item>
                            <a-menu-item disabled key="2"><span>HK</span> 繁体中文</a-menu-item>
                            <a-menu-item key="3"><span>US</span> English</a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </div>
        </div>
    </a-layout-header>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState({
            collapsed: state => state.app.collapsed,
            userInfo: state => state.app.userInfo
        })
    },
    methods: {
        handleCollapse(){
            this.$store.commit('onCollapse')
        },
        menuClick({ key }){
            if(key === '/login'){
                localStorage.removeItem('x-admin')
            }
            this.$router.push(key)
        },
        languageClick({ key }){
            console.log(key)
        }
    }
}
</script>

<style lang="less">
.pro-layout-header{
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 16px;
    height: 100%;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    background-color: #fff;
    .pro-global-header-collapsed-button{
        display: flex;
        align-items: center;
        margin-left: 16px;
        font-size: 20px;
        height: 100%;
        cursor: pointer;
    }
    .pro-header-right{
        display: flex;
        align-items: center;
        .ant-dropdown-trigger{
            padding: 0 12px;
            height: 48px;
            line-height: 48px;
            cursor: pointer;
            &:hover{
                background-color: rgba(0,0,0,.025);
            }
        }
        .pro-header-name{
            margin-left: 10px;
            color: rgba(0,0,0,.65);
        }
    }
}
</style>