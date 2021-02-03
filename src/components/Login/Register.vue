<template>
    <a-form :model="form" :wrapperCol="wrapperCol" @finish="handleFinish">
        <a-form-item :rules="{ required: true, message: '请输入手机号'}" name="mobile">
            <a-input v-model:value="form.mobile" size="large" autocomplete="off" maxlength="11" placeholder="手机号">
                <template #prefix><component :is="$antIcons['MobileOutlined']" /></template>
            </a-input>
        </a-form-item>
        <a-row :gutter="30">
            <a-col :span="15">
                <a-form-item :rules="{ required: true, message: '请输入验证码'}" name="smsCode">
                    <a-input v-model:value="form.smsCode" size="large" autocomplete="off" placeholder="验证码">
                        <template #prefix><component :is="$antIcons['CodepenOutlined']" /></template>
                    </a-input>
                </a-form-item>
            </a-col>
            <a-col :span="9">
                <a-button size="large" @click="handleSmsCode">获取验证码</a-button>
            </a-col>
        </a-row>
        <a-form-item :rules="{ required: true, message: '请输入邮箱'}" name="mail">
            <a-input v-model:value="form.mail" size="large" autocomplete="off" placeholder="邮箱">
                <template #prefix><component :is="$antIcons['MailOutlined']" /></template>
            </a-input>
        </a-form-item>
        <a-form-item :rules="{ required: true, message: '请输入密码'}" name="password">
            <a-input-password v-model:value="form.password" size="large" placeholder="至少6位数密码，区分大小写">
                <template #prefix><component :is="$antIcons['LockOutlined']" /></template>
            </a-input-password>
        </a-form-item>
        <a-form-item :rules="{ required: true, message: '请确认密码'}" name="chekPassword">
            <a-input-password v-model:value="form.chekPassword" size="large" placeholder="确认密码">
                <template #prefix><component :is="$antIcons['LockOutlined']" /></template>
            </a-input-password>
        </a-form-item>
        <a-form-item :rules="{ required: true }" name="gender">
            <a-radio-group v-model:value="form.gender">
                <a-radio :value="1"><component :is="$antIcons['ManOutlined']" /></a-radio>
                <a-radio :value="0"><component :is="$antIcons['WomanOutlined']" /></a-radio>
            </a-radio-group>
        </a-form-item>
        <a-form-item>
            <a-button type="primary" html-type="submit" block size="large">Register</a-button>
        </a-form-item>
    </a-form>
</template>

<script>
export default {
    data() {
        return {
            form: { gender: 1 },
            wrapperCol: { span: 24 }
        }
    },
    methods: {
        handleFinish(){
            console.log(this.form)
        },
        handleSmsCode(){
            this.$message.info('验证码：8888')
        }
    }
}
</script>