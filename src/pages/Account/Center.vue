<template>
    <a-row :gutter="16">
        <a-col :md="24" :lg="7" style="margin-bottom: 24px">
            <a-card>
                <div class="account-avatarHolder">
                    <a-avatar :src="$utils.userInfo.avatar" :size="104"></a-avatar>
                    <div class="username">{{ $utils.userInfo.userName }}</div>
                    <div>{{ $utils.userInfo.bio }}</div>
                </div>
                <div class="account-detail">
                    <p>
                        <component :is="$antIcons['AuditOutlined']" />
                        {{ $utils.userInfo.occupation }}
                    </p>
                    <p>
                        <component :is="$antIcons['ApartmentOutlined']" />
                        {{ $utils.userInfo.relate }}
                    </p>
                    <p>
                        <component :is="$antIcons['EnvironmentOutlined']" />
                        {{ $utils.userInfo.address }}
                    </p>
                </div>
                <a-divider />
                <div class="account-tags">
                    <div class="tagsTitle">标签</div>
                    <div>
                        <a-tag v-for="(item,i) in tags" :key="i">{{ item }}</a-tag>
                        <a-input v-if="inputVisible" ref="input" type="text" size="small" :style="{ width: '78px' }" v-model:value="inputValue"
                            @blur="handleInputConfirm"
                            @keyup.enter="handleInputConfirm"/>
                        <a-tag v-else @click="showInput" style="background: #fff; borderStyle: dashed;">
                            <component :is="$antIcons['PlusOutlined']" /> New Tag
                        </a-tag>
                    </div>
                </div>
                <a-divider />
                <div class="account-team">
                    <div class="teamTitle">团队</div>
                    <a-row :gutter="16">
                        <a-col class="gutter-row" :span="12" v-for="(item,i) in projectList" :key="i">
                            <a class="members" href="https://www.baidu.com/" target="_blank">
                                <a-avatar :src="item.src" />
                                <span class="member">{{ item.title }}</span>
                            </a>
                        </a-col>
                    </a-row>
                </div>
            </a-card>
        </a-col>
        <a-col :md="24" :lg="17">
            <a-card style="width: 100%" :tab-list="tabListNoTitle" :active-tab-key="noTitleKey" @tabChange="onTabChange" :loading="loading">
                <template #customRender="item">
                    <span>{{`${item.key}(12)`}}</span>
                </template>
                <a-list item-layout="vertical" size="large" :data-source="listData" v-if="noTitleKey === '文章'">
                    <template #renderItem="{ item, index }">
                        <a-list-item :key="index">
                            <template #actions>
                                <span><component :is="$antIcons['StarTwoTone']" style="margin-right: 8px" />{{ item.like }}</span>
                                <span><component :is="$antIcons['LikeOutlined']" style="margin-right: 8px" />{{ item.star }}</span>
                                <span><component :is="$antIcons['MessageFilled']" style="margin-right: 8px" />{{ item.message }}</span>
                            </template>
                            <a-list-item-meta>
                                <template #title>
                                    <a>{{ item.title }}</a>
                                </template>
                                <template #description>
                                    <div class="description">{{ item.content }}</div>
                                </template>
                            </a-list-item-meta>
                        </a-list-item>
                    </template>
                </a-list>
                <a-row class="cover-list" :gutter="16" v-else>
                    <a-col :sm="12" :md="8" :lg="8" :xl="6" v-for="(item,i) in listData" :key="i">
                        <a-card hoverable style="margin-bottom: 16px">
                            <template #cover>
                                <img alt="example" :src="item.logo"/>
                            </template>
                            <a-card-meta :title="item.title">
                                <template #description>
                                    {{ item.description }}
                                </template>
                            </a-card-meta>
                        </a-card>
                    </a-col>
                </a-row>
            </a-card>
        </a-col>
    </a-row>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            tabListNoTitle: [
                {
                    key: '文章',
                    slots: { tab: 'customRender' }
                },
                {
                    key: '项目',
                    slots: { tab: 'customRender' }
                }
            ],
            noTitleKey: '文章',
            tags: ['很有想法的','专注设计','sao气十足','海纳百川','个人中心'],
            inputValue: '',
            inputVisible: false,
            projectList: this.$utils.projectList,
            listData: [],
            loading: false
        }
    },
    created(){
       this.onTabChange() 
    },
    methods: {
        async onTabChange(key = '文章'){
            this.loading = true
            this.listData = []
            this.noTitleKey = key
            let url = '/apiv1/article.json'
            const res = await axios.get(url)
            setTimeout(() => {
                let { data } = res.data
                this.listData = data
                this.loading = false
            }, 500)
        },
        showInput(){
            this.inputVisible = true;
            this.$nextTick(() => {
                this.$refs.input.focus()
            })
        },
        handleInputConfirm(){
            const inputValue = this.inputValue
            let tags = this.tags
            if(inputValue && tags.indexOf(inputValue) === -1){
                tags = [...tags, inputValue]
            }
            Object.assign(this, {
                tags,
                inputValue: '',
                inputVisible: false
            })
        }
    }
}
</script>

<style scope lang="less">
.account-avatarHolder{
    text-align: center;
    margin-bottom: 24px;
    .ant-avatar{
        margin: 0 auto 20px;
    }
    .username{
        font-size: 20px;
        font-weight: 500;
        color: #333;
    }
}
.account-detail{
    p{
        position: relative;
        margin-bottom: 8px;
        padding-left: 26px;
        .anticon{
            position: absolute;
            top: 4px;
            left: 0;
        }
    }
}
.account-tags{
    .ant-tag{
        margin-bottom: 8px;
    }
}
.tagsTitle,
.teamTitle{
    color: #333;
    font-weight: 500;
    margin-bottom: 12px;
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
.description{
    max-width: 720px;
    color: rgba(0,0,0,.65);
}
.cover-list{
    .ant-card-meta-description{
        height: 66px;
        overflow: hidden;
        line-height: 22px;
    }
}
</style>