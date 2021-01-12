<template>
    <a-layout-sider breakpoint="md" :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, zIndex: 100 }" v-model:collapsed="collapsed" collapsible :collapsedWidth="collapsedWidth" @collapse="handleCollapse" @breakpoint="onBreakpoint">
        <div class="nav-logo">
            <img src="../assets/logo.png" alt="">
            <h1 v-if="!collapsed">Admin Pro</h1>
        </div>
        <div style="flex: 1 1 0%;overflow: hidden auto">
            <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys" @click="menuClick">
                <template v-for="(item,i) in menuItems" :key="i">
                    <a-sub-menu :key="item.path || i" v-if="item.children && item.children.length > 0">
                        <template #title>
                            <span><component :is="$antIcons[item.icon]" /><span>{{ item.name }}</span></span>
                        </template>
                        <a-menu-item v-for="el in item.children" :key="el.path">{{ el.name }}</a-menu-item>
                    </a-sub-menu>
                    <a-menu-item :key="item.path" v-else>
                        <component :is="$antIcons[item.icon]" />
                        <span>{{ item.name }}</span>
                    </a-menu-item>
                </template>
            </a-menu>
        </div>
    </a-layout-sider>
</template>

<script>
import menuItems from '../router/addRoutes'
import { mapState } from 'vuex'
export default {
    data(){
        return {
            menuItems,
            selectedKeys: [],
        }
    },
    computed:{
        ...mapState({
            collapsed: state => state.app.collapsed
        }),
        mainTabs: {
            get(){ return this.$store.state.tab.mainTabs },
            set(val){ this.$store.commit('updateMainTabs', val) }
        },
        collapsedWidth: {
            get(){ return this.$store.state.app.collapsedWidth },
            set(val){ this.$store.commit('updateCollapsedWidth', val) }
        }
    },
    created(){
        let { path, meta } = this.$route
        if(meta.pentPath){
            path = meta.pentPath
        }
        this.selectedKeys = [path]
        this.handleRoute(this.$route)
    },
    watch: {
        $route(val){
            let { path, meta } = val
            if(meta.pentPath){
                path = meta.pentPath
            }
            this.selectedKeys = [path]
            this.handleRoute(val)
        }
    },
    methods: {
        menuClick({ key }){
            this.$router.push({ path: key })
        },
        handleCollapse(){
            this.$store.commit('onCollapse')
        },
        // 路由操作处理
        handleRoute(route){
            let { name } = route
            if(['Login', 'NotFound'].includes(name)) return
            let tab = this.mainTabs.filter(item => item.path === route.path)[0]
            if (!tab) {
                tab = {
                    name: route.name,
                    path: route.path,
                }
                this.mainTabs = this.mainTabs.concat(tab)
            }
        },
        onBreakpoint(broken){
            this.collapsedWidth = broken ? 0 : 58
        }
    }
}
</script>
<style lang="less">
.nav-logo{
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        height: 32px;
        display: inline-block;
    }
    h1{
        color: #fff;
        margin-bottom: 0;
        margin-left: 10px;
        font-size: 18px;
        line-height: 32px;
    }
}
.ant-layout-sider{
    .ant-layout-sider-children{
        display: flex;
        flex-direction: column;
        height: 100%;
        .ant-menu-inline-collapsed{
            width: 58px;
            .ant-menu-submenu-title{
                width: 58px;
                padding: 0 21px !important;
            }
        }
    }
}
</style>