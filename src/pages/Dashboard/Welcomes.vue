<template>
    <a-card class="header-welcome">
        <h1>早安，{{ $store.state.app.userInfo.userName }} ，祝你开心每一天！</h1>
        <p>凡点科技－某某某－某某某某某－某某技术部－WEB技术</p>
    </a-card>
    <a-row :gutter="16">
        <a-col :span="24" :lg="17">
            <a-card style="margin-top: 24px">
                <a-row>
                    <a-col :span="24" :md="12" :lg="6">
                        <div class="basic-list">
                            <span>我的待办</span>
                            <p>8个任务</p>
                            <em></em>
                        </div>
                    </a-col>
                    <a-col :span="24" :md="12" :lg="6">
                        <div class="basic-list">
                            <span>本周任务平均处理时间</span>
                            <p>32分钟</p>
                            <em></em>
                        </div>
                    </a-col>
                    <a-col :span="24" :md="12" :lg="6">
                        <div class="basic-list">
                            <span>本周完成任务数</span>
                            <p>24个任务</p>
                            <em></em>
                        </div>
                    </a-col>
                    <a-col :span="24" :md="12" :lg="6">
                        <div class="basic-list">
                            <span>异常（个）</span>
                            <p>1</p>
                        </div>
                    </a-col>
                </a-row>
            </a-card>
            <a-card title="动态" style="margin-top: 24px">
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
        <a-col :span="24" :lg="7">
            <div class="cover-tip" style="margin-top: 24px">
                <img src="@/assets/icon1.8e337c8.png" alt="">
            </div>
            <a-card style="width:100%;margin-top: 24px" :tab-list="tabListNoTitle" :active-tab-key="noTitleKey" @tabChange="onTabChange">
                <a-row>
                    <a-col :span="8" v-for="(item,i) in projectList" :key="i">
                        <a class="card-welcome-link">
                            <a-avatar :src="item.src" :size="40"></a-avatar>
                            <span class="link-title">{{ item.title }}</span>
                        </a>
                    </a-col>
                </a-row>
            </a-card>
        </a-col>
    </a-row>
</template>

<script>
export default {
    data() {
        return {
            tabListNoTitle: [
                { key: 'me', tab: '我的' },
                { key: 'you', tab: '你的' }
            ],
            noTitleKey: 'me',
            projectList: this.$utils.projectList
        }
    },
    methods: {
        onTabChange(key){
            this.noTitleKey = key
        }
    }
}
</script>

<style lang="less">
.header-welcome{
    background-color: #27a6fe;
    h1{
        color: #fff;
        font-size: 24px;
        font-weight: 500;
    }
    p{
        color: #fff;
    }
}
.cover-tip{
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 2px;
    img{
        width: 100%;
        display: block;
    }
}
.basic-list{
    position: relative;
    text-align: center;
    span{
        font-size: 14px;
        color: rgba(0,0,0,0.45);
    }
    p{
        margin: 0;
        font-size: 24px;
        font-weight: 500;
        color: #333;
    }
    em{
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
        height: 59px;
        background-color: #f0f0f0;
    }
}
.card-welcome-link{
    display: block;
    text-align: center;
    color: #333;
    line-height: 72px;
    .ant-avatar{
        line-height: 40px;
    }
    .link-title{
        display: block;
        line-height: 24px;
    }
}
</style>