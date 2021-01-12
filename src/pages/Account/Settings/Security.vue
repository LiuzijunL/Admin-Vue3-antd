<template>
    <a-list item-layout="horizontal" :data-source="dataSource">
        <template #renderItem="{ item }">
            <a-list-item>
                <template #actions>
                    <a>{{ item.btnName || '修改' }}</a>
                </template>
                <a-list-item-meta :description="item.description">
                    <template #title>
                        <a>{{ item.title }}</a>
                    </template>
                </a-list-item-meta>
            </a-list-item>
        </template>
    </a-list>
</template>

<script>
export default {
    data() {
        return {
            dataSource: [
                { title: '账户密码', description: '当前密码强度:强' },
                { title: '密保手机', description: '已绑定手机:158****88995' },
                { title: '密保问题', description: '未设置密保问题，密保问题可有效保护账户安全', btnName: '设置' },
                { title: '备用邮箱', description: '已绑定邮箱:836***461@qq.com' },
                { title: 'MFA 设备', description: '未绑定 MFA 设备，绑定后，可以进行二次确认', btnName: '绑定' }
            ]
        }
    },
}
</script>