<template>
    <a-list item-layout="horizontal" :data-source="dataSource">
        <template #renderItem="{ item }">
            <a-list-item>
                <template #actions v-if="item.swicth">
                    <a-switch checked-children="暗色" un-checked-children="白色" defaultChecked disabled/>
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
                { title: '风格配色', description: '整体风格配色设置', swicth: true },
                { title: '主题色', description: '页面风格配色' }
            ]
        }
    }
}
</script>