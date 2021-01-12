<template>
    <a-layout id="layout-demo-pro">
        <div class="pro-fixed-stuff" style="overflow: hidden" :style="{ width: collapsed ? '58px' : '200px' }" v-if="collapsedWidth !== 0"></div>
        <nav-bar></nav-bar>
        <!-- <a-drawer :closable="false">

        </a-drawer> -->
        <a-layout>
            <header-bar></header-bar>
            <main-content></main-content>
            <a-layout-footer style="text-align: center">Ant Design Vue or Vue3</a-layout-footer>
        </a-layout>
    </a-layout>
    <set-wrapper></set-wrapper>
</template>

<script>
import { mapState } from 'vuex'
import NavBar from '../components/NavBar.vue'
import HeaderBar from '../components/HeaderBar.vue'
import MainContent from './MainContent/index'
import SetWrapper from '../components/SetWrapper'
export default {
    data() {
        return {}
    },
    computed:{
        ...mapState({
            collapsed: state => state.app.collapsed,
            collapsedWidth: state => state.app.collapsedWidth
        })
    },
    components:{
        NavBar,
        HeaderBar,
        MainContent,
        SetWrapper
    }
}
</script>

<style lang="less">
#layout-demo-pro{
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    box-sizing: border-box;
}
.pro-fixed-stuff{
    transition: width 0.2s;
    flex-shrink: 0;
}
</style>