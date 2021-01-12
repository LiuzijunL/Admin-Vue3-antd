<template>
    <div class="pro-multi-bar">
        <a-tabs v-model:activeKey="$route.path" hide-add type="editable-card" @change="selectedTabHandle" @edit="removeTabHandle">
            <a-tab-pane v-for="pane in mainTabs" :key="pane.path">
                <template #tab>
                    {{ pane.name }}
                    <component class="tab-reload-btn" @click="reload" :is="$antIcons['RedoOutlined']" v-if="$route.path === pane.path"/>
                </template>
            </a-tab-pane>
            <template #tabBarExtraContent>
                <a-dropdown>
                    <component :is="$antIcons['MoreOutlined']" class="pro-multi-tab-dropdown-menu-btn"/>
                    <template #overlay>
                        <a-menu @click="handleClick">
                            <a-menu-item key="1">关闭全部</a-menu-item>
                            <a-menu-item key="2">刷新当前页</a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
            </template>
        </a-tabs>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        mainTabs: {
            get() { return this.$store.state.tab.mainTabs },
            set(val) { this.$store.commit('updateMainTabs', val) }
        }
    },
    methods: {
        //刷新页面
        reload(){
            this.$emit('reload')
        },
        handleClick({ key }){
            if(key === '1'){
                this.tabsCloseAllHandle()
            }else if(key === '2'){
                this.reload()
            }
        },
        // tabs 选中tab
        selectedTabHandle(targetKey){
            let tab = this.mainTabs.filter(item => item.path === targetKey)
            if(tab.length >= 1){
                this.$router.push({ path: tab[0].path })
            }
        },
        // tabs 删除tab
        removeTabHandle(targetKey){
            if(this.mainTabs.length === 1){
                return this.$message.info('这是最后一个标签了, 无法被关闭！')
            }
            this.mainTabs = this.mainTabs.filter(item => item.path !== targetKey)
            if(this.mainTabs.length >= 1){
                this.$router.push({ path: this.mainTabs[this.mainTabs.length - 1].path })
            }
        },
        //tab 关闭全部
        tabsCloseAllHandle(){
            let { path } = this.$route
            this.mainTabs = this.mainTabs.filter(item => item.path === path)
        }
    }
}
</script>

<style lang="less">
.pro-multi-bar{
    width: 100%;
    padding-top: 6px;
    box-sizing: border-box;
    background-color: #fff;
    .ant-tabs-bar{
        padding-left: 16px;
        .tab-reload-btn{
            margin-left: 8px;
            color: rgba(0, 0, 0, 0.45);
            transform: rotate(-90deg);
            &:hover{
                color: #1890ff;
            }
        }
    }
}
.pro-multi-tab-dropdown-menu-btn{
    padding: 12px;
    margin-right: 6px;
    font-size: 16px;
    cursor: pointer;
}
</style>