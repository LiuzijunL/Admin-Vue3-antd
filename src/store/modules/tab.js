const state = {
    // 主入口标签页
    mainTabs: [],
    // 当前标签页名
    mainTabsActiveName: ''
}

const mutations = {
    updateMainTabs: (state, tabs) => {
        state.mainTabs = tabs
    },
    updateMainTabsActiveName: (state, name) => {
        state.mainTabsActiveName = name
    }
}

export default {
    state,
    mutations
}