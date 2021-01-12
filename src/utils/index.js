'use sitic'
import moment from 'moment'

class Utils {
    /**
     * 时间格式化
     * 将 2018-09-23T11:54:16.000+0000 格式化成 2018-09-23 11:54:16
     * @param datetime
     * @param value 时间格式
     * @param isPase 是否为时间搓
     */
    static format (datetime, value = 'YYYY-MM-DD HH:mm:ss', isPase = false) {
        if(!datetime) return ''
        if(isPase) return moment(datetime).valueOf()
        return moment(datetime).format(value)
    }
    /**
     * 默认头像地址
     */
    static userInfo = {
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
        userName: 'Serati Jac',
        bio: '海纳百川，有容乃大',
        occupation: 'web开发',
        relate: '凡点科技－某某某－某某某某某－某某技术部－WEB技术',
        address: '湖北省武汉市',
        mail: '836200461@qq.com',
        mobile: '15871488995',
        gender: 1
    }
    /**
     * 团队信息
     */
    static projectList = [
        { title: 'Vue3', src: 'https://vue3js.cn/docs/logo.png', description: '那是一种内在的东西，他们到达不了，也无法触及的' },
        { title: 'Angular', src: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', description: '希望是一个好东西，也许是最好的，好东西是不会消亡的' },
        { title: 'Ant Design', src: 'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆' },
        { title: 'Ant Design Pro', src: 'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', description: '那时候我只会想自己想要什么，从不想自己拥有什么' },
        { title: 'Bootstrap', src: 'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', description: '凛冬将至' },
        { title: 'React', src: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', description: '生命就像一盒巧克力，结果往往出人意料' }
    ]
}

export default Utils