<template>
    <div style="padding: 20px;background-color:#fff">
        <a-form style="" @finish="handleFinish" :model="formState" :labelCol="{ span: 4 }" :wrapperCol="{ span: 18 }">
            <a-form-item label="标题" name="title" :rules="{ required: true, message: '请输入标题', trigger: 'change' }">
                <a-input v-model:value="formState.title" autocomplete="off"/>
            </a-form-item>
            <a-form-item label="描述" name="describe" :rules="{ required: true, message: '请输入描述', trigger: 'change' }">
                <a-input v-model:value="formState.describe" autocomplete="off"/>
            </a-form-item>
            <a-form-item label="缩略图" name="imgUrl" :rules="{ required: true, message: '请上传缩略图', trigger: 'change' }">
                <a-select v-model:value="formState.imgUrl">
                    <a-select-option value="https://zyj_yida.gitee.io/source/img/indexbg/16.jpg">默认图片</a-select-option>
                </a-select>
            </a-form-item>
            <a-form-item label="内容" name="content" :rules="{ required: true, message: '请输入内容', trigger: 'blur' }">
                <vue-editor
                    v-model="formState.content"
                    useCustomImageHandler
                    placeholder="写出你想发布的文章..."
                    @image-added="handleImageAdded"
                    :editorToolbar="customToolbar"
                ></vue-editor>
            </a-form-item>
            <a-form-item :wrapperCol="{ span: 18, offset: 4 }">
                <a-button type="primary" html-type="submit">提交</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import { VueEditor } from 'vue3-editor'
export default {
    data() {
        return {
            formState: {},
            customToolbar: [
                ["bold", "italic", "underline"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["image", "code-block"]
            ]
        }
    },
    components: {
        'vue-editor': VueEditor
    },
    methods: {
        handleImageAdded(file, Editor, cursorLocation, resetUploader){
            let formData = new FormData()
            formData.append("image", file)
            // 将formData放入接口data，调用接口获取地址后的操作
            let url = '' //图片地址
            Editor.insertEmbed(cursorLocation, "image", url)
            resetUploader()
        },
        handleFinish(){
            console.log(this.formState)
        }
    }
}
</script>

<style lang="less">
.ql-editor{
    height: 350px;
}
</style>