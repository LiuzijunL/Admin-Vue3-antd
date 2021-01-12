<template>
    <div class="base-view">
        <div class="base-header">
            <div class="base-header-left">
                <a-avatar :size="128" :src="$store.state.app.userInfo.avatar"></a-avatar>
                <div class="base-username">早上好，{{ $store.state.app.userInfo.userName }}</div>
                <div class="task">
                    <component style="color: #f77474" :is="$antIcons['SnippetsFilled']"/>
                    <span class="num">未处理（13）</span>
                    <component :is="$antIcons['HourglassTwoTone']"/>
                    <span class="num">处理中（13）</span>
                    <component style="color: #24eb5e" :is="$antIcons['CarryOutFilled']"/>
                    <span class="num">已处理（13）</span>
                </div>
            </div>
            <div class="base-header-right">
                <img src="@/assets/icon1.8e337c8.png" alt="">
            </div>
        </div>
        <a-divider />
        <a-form ref="userForm" layout="vertical" :model="form" @finish="handleFinish">
            <a-form-item label="昵称" name="userName" :rules="{ required: true, message: '请输入昵称', trigger: 'change' }">
                <a-input style="max-width: 500px" v-model:value="form.userName" />
            </a-form-item>
            <a-form-item label="邮箱" name="mail" :rules="{ required: true, message: '请输入邮箱', trigger: 'change' }">
                <a-input style="max-width: 500px" v-model:value="form.mail" />
            </a-form-item>
            <a-form-item label="手机" name="mobile" :rules="{ required: true, message: '请输入手机', trigger: 'change' }">
                <a-input style="max-width: 500px" v-model:value="form.mobile" />
            </a-form-item>
            <a-form-item label="公司" name="relate" :rules="{ required: true, message: '请输入公司', trigger: 'change' }">
                <a-input style="max-width: 500px" v-model:value="form.relate" />
            </a-form-item>
            <a-form-item label="性别" name="gender" :rules="{ required: true, message: '请选择性别', trigger: 'change' }">
                <a-radio-group v-model:value="form.gender">
                    <a-radio value="1">男</a-radio>
                    <a-radio value="0">女</a-radio>
                </a-radio-group>
            </a-form-item>
            <a-form-item label="个人介绍" name="bio" :rules="{ required: true, message: '请输入个人介绍', trigger: 'change' }">
                <a-textarea style="max-width: 500px" v-model:value="form.bio" showCount :maxlength="100" />
            </a-form-item>
            <a-form-item>
                <a-button type="primary" html-type="submit">保存</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {}
        }
    },
    created(){
        let { userInfo } = this.$store.state.app
        this.form = {...userInfo}
    },
    methods: {
        handleFinish(values){
            let userInfo = {...this.form}
            userInfo = Object.assign({}, userInfo, values)
            this.$store.commit('updateUserInformation', userInfo)
            this.$message.success('保存成功')
            this.$refs.ruleForm.resetFields()
        }
    }
}
</script>

<style lang="less">
.base-view{
    padding-top: 10px;
}
.base-header{
    display: flex;
    justify-content: space-between;
    .base-header-right{
        width: 230px;
        img{
            width: 100%;
            display: block;
        }
    }
    .base-header-left{
        .task{
            display: flex;
            align-items: center;
            margin-top: 26px;
            .anticon{
                font-size: 16px;
            }
            .num{
                color: #9ca3ae;
                margin-left: 8px;
                margin-right: 26px;
            }
        }
    }
}
.base-username{
    font-size: 28px;
    font-weight: 500;
    margin-top: 20px;
}
@media screen and (max-width: 768px){
    .base-header{
        .base-header-right{
            display: none;
        }
    }
}
</style>