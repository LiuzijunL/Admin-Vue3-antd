<template>
    <div class="pro-pages-container">
        <div class="page-container-warp">
            <a-page-header :breadcrumb="{ routes }" />
        </div>
        <div class="pro-content">
            <div class="ant-search">
                <a-form :model="formInline">
                    <a-row :gutter="16">
                        <a-col :span="12">
                            <a-form-item label="角色名">
                                <a-input v-model:value="formInline.name" placeholder="name" />
                            </a-form-item>
                        </a-col>
                        <a-col :span="12">
                            <a-form-item label="描述">
                                <a-input v-model:value="formInline.description" placeholder="description" />
                            </a-form-item>
                        </a-col>
                    </a-row>
                </a-form>
            </div>
            <a-card id="deEle" title="角色列表" :bordered="false" :bodyStyle="{ padding: 0 }">
                <template #extra>
                    <a-button type="primary"><component :is="$antIcons['PlusOutlined']" />  新增角色</a-button>
                    <a-divider type="vertical" />
                    <a-tooltip placement="top">
                        <template #title>
                            <span>刷新</span>
                        </template>
                        <component class="setting-item" :is="$antIcons['ReloadOutlined']" />
                    </a-tooltip>
                    <a-tooltip placement="top">
                        <template #title>
                            <span>密度</span>
                        </template>
                        <a-dropdown :trigger="['click']" placement="bottomRight">
                            <component class="setting-item" :is="$antIcons['ColumnHeightOutlined']" />
                            <template #overlay>
                                <a-menu v-model:selectedKeys="selectedKeys" @click="handleClick">
                                    <a-menu-item key="default"><a>默认</a></a-menu-item>
                                    <a-menu-item key="middle"><a>中等</a></a-menu-item>
                                    <a-menu-item key="small"><a>紧凑</a></a-menu-item>
                                </a-menu>
                            </template>
                        </a-dropdown>
                    </a-tooltip>
                    <a-tooltip placement="top">
                        <template #title>
                            <span>列设置</span>
                        </template>
                        <a-popover trigger="click" placement="bottomRight">
                            <template #title>
                                <div class="table-column-setting-title">
                                    <a-checkbox v-model:checked="checkAll" :indeterminate="indeterminate">列展示</a-checkbox>
                                    <a>重置</a>
                                </div>
                            </template>
                            <template #content>
                                <div></div>
                            </template>
                            <component class="setting-item" :is="$antIcons['SettingOutlined']" />
                        </a-popover>
                    </a-tooltip>
                    <a-tooltip placement="top">
                        <template #title>
                            <span>全屏</span>
                        </template>
                        <component class="setting-item" :is="$antIcons[ isFullscreen ? 'FullscreenExitOutlined' : 'FullscreenOutlined']" @click="handleFullscreen"/>
                    </a-tooltip>
                </template>

                <a-table rowKey="id" :loading="loading" :size="size" :columns="columns" :data-source="dataSource">
                    <template #tags><a>编辑</a></template>
                </a-table>
            </a-card>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            routes: [
                { breadcrumbName: '首页', path: '/' },
                { breadcrumbName: '系统管理', path: '/system/role-list' },
                { breadcrumbName: '角色管理' }
            ],
            formInline: {},
            dataSource: [],
            columns: [
                { dataIndex: 'id', title: '#' },
                { dataIndex: 'name', title: '角色名称' },
                { dataIndex: 'description', title: '描述' },
                { dataIndex: 'tags', title: '操作', slots: { customRender: 'tags' }, width: 100 }
            ],
            loading: true,
            size: 'middle',
            selectedKeys: ['middle'],
            checkAll: true,
            indeterminate: false,
            isFullscreen: false
        }
    },
    mounted(){
        this.getRoleList()
        window.addEventListener('fullscreenchange', this.handleisFull)
    },
    deactivated(){
        window.removeEventListener('fullscreenchange', this.handleisFull)
    },
    methods: {
        async getRoleList(){
            this.loading = true
            let url = '/apiv1/role.json'
            const { data } = await axios.get(url)
            setTimeout(() => {
                this.loading = false
                this.dataSource = data.data
            }, 300)
        },
        handleClick({ key, keyPath }){
            Object.assign(this, { size: key, selectedKeys: keyPath })
        },
        handleFullscreen(){
            let el = document.getElementById('deEle')
            if(this.isFullscreen){
                this.exitFullScreen()
            }else{
                this.enterFullScreen(el)
            }
        },
        handleisFull(){
            let isFull = document.mozFullScreen || document.fullScreen || document.webkitIsFullScreen ||document.webkitRequestFullScreen ||document.mozRequestFullScreen || document.msFullscreenEnabled
            if(isFull === undefined) {
                isFull = false
            }
            this.isFullscreen = isFull
        },
        //进入全屏
        enterFullScreen(el){
            if(el.requestFullscreen){
                el.requestFullscreen()
            }else if(el.mozRequestFullScreen){
                el.mozRequestFullScreen()
            }else if(el.webkitRequestFullScreen){
                el.webkitRequestFullScreen()
            }else if(el.msRequestFullscreen){
                el.msRequestFullscreen()
            }
        },
        //退出全屏
        exitFullScreen(){
            let el = document
            if(el.exitFullscreen) {
                el.exitFullscreen()
            }else if(el.mozCancelFullScreen) {
                el.mozCancelFullScreen()
            }else if(el.webkitCancelFullScreen) {
                el.webkitCancelFullScreen()
            }else if(el.msExitFullscreen){
                el.msExitFullscreen()
            }   
        }
    }
}
</script>

<style lang="less">
.pro-pages-container{
    margin: -20px -20px 0;
    .page-container-warp{
        background-color: #fff;
    }
    .pro-content{
        margin: 24px 24px 0;
        .ant-search{
            margin-bottom: 18px;
            padding: 24px 24px 0;
            background-color: #fff;
            .ant-row{
                display: flex;
                .ant-form-item-control-wrapper{
                    flex: 1 1;
                }
            }
        }
    }
    .ant-card-extra{
        .setting-item{
            cursor: pointer;
            margin-left: 16px;
            font-size: 18px;
        }
    }
    .ant-pagination{
        padding: 0 20px;
    }
}
.table-column-setting-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 32px;
    margin-left: 4px;
}
</style>