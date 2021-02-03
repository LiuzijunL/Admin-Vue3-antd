const state = {
    collapsed: false,// 导航栏收缩状态
    collapsedWidth: 58, //导航栏收缩默认宽度
    userInfo: {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
        userName: 'Serati Jac',
        bio: '海纳百川，有容乃大',
        occupation: 'web开发',
        company: '某某科技－某某某－某某某某某－某某技术部－WEB技术',
        address: '某某省某某市',
        mail: '83******61@qq.com',
        mobile: '158****8995',
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