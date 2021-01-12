const state = {
    collapsed: false,// 导航栏收缩状态
    collapsedWidth: 58, //导航栏收缩默认宽度
    userInfo: {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
        userName: 'Serati Jac',
        bio: '海纳百川，有容乃大',
        occupation: 'web开发',
        relate: '凡点科技－某某某－某某某某某－某某技术部－WEB技术',
        address: '湖北省武汉市',
        mail: '836200461@qq.com',
        mobile: '15871488995',
        gender: '1'
    }
}

// const getters = {}

const mutations = {
    onCollapse: (state) => {
        state.collapsed = !state.collapsed
    },
    updateUserInformation: (state, user) => {
        state.userInfo = user
    },
    updateCollapsedWidth: (state, value) => {
        state.collapsedWidth = value
    }
}

export default {
    state,
    mutations
}