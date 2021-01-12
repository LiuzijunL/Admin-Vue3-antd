<template>
    <multi-bar @reload="reload"></multi-bar>
    <a-layout-content class="main-content">
        <router-view v-slot="{ Component }">
            <keep-alive v-if="isRouterAlive">
                <component :is='Component' />
            </keep-alive>
        </router-view>
    </a-layout-content>
</template>

<script>
import MultiBar from '../../components/MultiBar.vue'
export default {
    data() {
        return {
            isRouterAlive: true
        }
    },
    components: {
        MultiBar
    },
    methods: {
        reload(){
            this.isRouterAlive = false
            this.$nextTick(() => {
                this.isRouterAlive = true
            })
        }
    }
}
</script>
<style lang="less">
.main-content{
    margin: 20px;
    // min-height: calc(100vh - 64px);
    .header-heading{
        width: 100%;
        overflow: hidden;
    }
}
.pro-basicLayout-content{
    margin: -24px -24px 0;
}
</style>