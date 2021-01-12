<template>
    <div class="pro-basicLayout-content">
        <div class="header-ghost">
            <div class="header-heading"><span class="header-heading-title">工作台</span></div>
            <div class="header-content">
                <div class="container-row">
                    <div class="container-content">
                        <a-avatar class="avatar" :size="72" :src="$store.state.app.userInfo.avatar">
                            <template #icon><component :is="$antIcons['UserOutlined']"/></template>
                        </a-avatar>
                        <div class="content__pro">
                            <div class="content-title">早安，{{ $store.state.app.userInfo.userName }} ，祝你开心每一天！</div>
                            <div class="pb1">{{ $store.state.app.userInfo.relate }}</div>
                        </div>
                    </div>
                    <div class="container-extraContent">
                        <div class="extra-content">
                            <a-statistic title="项目数" :value="56"></a-statistic>
                            <a-divider type="vertical" />
                            <a-statistic title="团队内排名" :value="'8/24'"></a-statistic>
                            <a-divider type="vertical" />
                            <a-statistic title="项目访问" :value="2223"></a-statistic>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid-content">
            <div class="grid-content__children">
                <a-row :gutter="16">
                    <a-col class="gutter-row" :span="24" :lg="16">
                        <a-card title="进行中的项目" style="margin-bottom: 24px" :loading="loading">
                            <template #extra><a>全部项目</a></template>
                            <a-card-grid v-for="(item,i) in projectList" :key="i">
                                <div class="card-meta">
                                    <div class="card-meta__title">
                                        <a-avatar :src="item.src" :size="24"/>
                                        <a>{{ item.title }}</a>
                                    </div>
                                    <div class="card-meta__description">
                                        {{ item.description }}
                                    </div>
                                    <div class="project-item">
                                        <a>web搬砖人员</a>
                                        <span>9小时前</span>
                                    </div>
                                </div>
                            </a-card-grid>
                        </a-card>
                        <a-card title="动态" style="margin-bottom: 24px" :loading="loading">
                            <a-list>
                                <a-list-item v-for="item in 6" :key="item">
                                    <a-list-item-meta>
                                        <template #title>
                                            <a href="https://www.baidu.com/" style="color: #1890ff;margin-right: 10px" target="_blank">周星星</a>
                                            <span>Ant Design Title {{ item }}</span>
                                        </template>
                                        <template #avatar>
                                            <a-avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                                        </template>
                                    </a-list-item-meta>
                                </a-list-item>
                            </a-list>
                        </a-card>
                    </a-col>
                    <a-col class="gutter-row" :span="24" :lg="8">
                        <a-card title="快速开始 / 便捷导航" :bodyStyle="{ padding: 0 }" style="margin-bottom: 24px" :loading="loading">
                            <div class="item-group">
                                <a v-for="item in 6" :key="item">{{`操作${item}`}}</a>
                                <a-button type="primary" size="small" ghost>
                                    <template #icon><component :is="$antIcons['PlusOutlined']" /></template>添加
                                </a-button>
                            </div>
                        </a-card>
                        <a-card title="团队" :loading="loading">
                            <a-row :gutter="16">
                                <a-col class="gutter-row" :span="12" v-for="(item,i) in projectList" :key="i">
                                    <a class="members" href="https://www.baidu.com/" target="_blank">
                                        <a-avatar :src="item.src" />
                                        <span class="member">{{ item.title }}</span>
                                    </a>
                                </a-col>
                            </a-row>
                        </a-card>
                    </a-col>
                </a-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            projectList: this.$utils.projectList,
            loading: true
        }
    },
    mounted(){
        setTimeout(() => {
            this.loading = false
        }, 500)
    }
}
</script>
<style lang="less">
.header-ghost{
    padding: 16px 24px;
    background-color: #fff;
    font-size: 14px;
    .header-heading-title{
        display: inline-block;
        font-size: 20px;
        font-weight: 600;
        margin: 4px 0;
        padding-right: 10px;
        line-height: 32px;
        color: #333;
    }
    .header-content{
        padding-top: 10px;
    }
    .container-row{
        display: flex;
        width: 100%;
    }
    .container-content{
        display: flex;
        flex: auto;
    }
    .container-extraContent{
        min-width: 268px;
        margin-left: 100px;
    }
    .extra-content{
        display: flex;
        align-items: center;
        flex-direction: row;
        text-align: right;
        .ant-statistic{
            padding: 0 32px;
        }
        .ant-divider{
            margin: 0;
            height: 46px;
            flex-shrink: 0;
        }
    }
    .avatar{
        flex: 0 1 72px;
    }
    .content__pro{
        margin-left: 30px;
        flex: 1 1;
        .content-title{
            font-size: 20px;
            font-weight: 600;
            color: #333;
            margin-bottom: 12px;
        }
        .pb1{
            color: rgba(0,0,0,.45);
            padding-bottom: 10px;
        }
    }
    @media screen and (max-width: 768px) {
        .container-row{
            display: block;
        }
        .container-extraContent{
            margin-left: 0;
        }
    }
}
.grid-content{
    width: 100%;
    .grid-content__children{
        margin: 20px;
    }
    .item-group{
        padding: 20px 0 8px 24px;
        a{
            color: rgba(0,0,0,.65);
            display: inline-block;
            width: 25%;
            margin-bottom: 13px;
            font-size: 14px;
        }
    }    
}
.card-meta{
    margin: -4px 0;
    .card-meta__title{
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        a{
            color: rgba(0,0,0,.65);
            margin-left: 12px;
            line-height: 24px;
            height: 24px;
            font-weight: 600;
            font-size: 14px;
        }
    }
    a{
        color: rgba(0,0,0,.45);
        vertical-align: top;
        display: inline-block;
        &:hover{
            color: #1890ff;
        }
    }
    .card-meta__description{
        height: 44px;
        color: rgba(0,0,0,.45);
    }
    .project-item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 8px;
        font-size: 12px;
        span{
            color: rgba(0,0,0,.25);
        }
    }
}
.members{
    display: block;
    margin: 10px 0;
    color: #333;
    .member{
        margin-left: 10px;
        font-weight: 300;
    }
}
@media screen and (max-width: 768px){
    .ant-card-grid{
        width: 50%;
    }
}
@media screen and (max-width: 480px){
    .ant-card-grid{
        width: 100%;
    }
}
</style>