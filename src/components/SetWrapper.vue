<template>
    <a-drawer width="300" placement="right" :visible="visible" @close="handleClose">
        <template #handle>
            <div class="pro-setting-drawer-handle" @click="showDrawer">
                <component :is="$antIcons[ visible ? 'CloseOutlined' : 'SettingOutlined']" />
            </div>
        </template>
        <h3>整体风格设置</h3>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </a-drawer>
</template>

<script>
export default {
    data(){
        return {
            visible: false,
            mask: false
        }
    },
    mounted(){
        this
    },
    methods: {
        showDrawer(){
            this.visible = !this.visible
        },
        handleClose(){
            this.visible = false
        }
    }
}
</script>

<style lang="less">
.pro-setting-drawer-handle{
    position: absolute;
    top: 240px;
    right: 300px;
    z-index: 0;
    display: flex;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 4px 0 0 4px;
    background-color: #1890ff;
    cursor: pointer;
    color: #fff;
    font-size: 18px;
    justify-content: center;
    pointer-events: auto;
}
</style>