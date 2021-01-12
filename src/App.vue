<template>
	<a-config-provider :locale="locale">
		<router-view></router-view>
	</a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import enUS from 'ant-design-vue/es/locale/en_US';
export default {
	name: "App",
	data() {
		return {
			locale: zhCN,
			enUS,
			zhCN
		}
	}
};
</script>

<style>
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	min-height: 100%;
}
</style>
