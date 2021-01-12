/**
 * @param path 路由跳转路径
 * @param name 菜单栏文本内容
 * @param icon 图标
 * @param filePath 文件路径
 */

//左侧菜单栏数据
const menuItems = [
    {
        name: 'Dashboard',
        icon: 'PieChartOutlined',
        children: [
            {
                path: '/dashboard/workplace',
                name: '工作台',
                filePath: '/dashboard/workplace'
            },
            {
                path: '/dashboard/welcomes',
                name: '欢迎页',
                filePath: '/dashboard/welcomes'
            }
        ]
    },
    {
        name: '个人页',
        icon: 'UserAddOutlined',
        children: [
            {
                path: '/account/center',
                name: '个人中心',
                filePath: '/account/center'
            },
            {
                path: '/account/settings',
                name: '个人设置',
                filePath: '/account/settings'
            }
        ]
    },
    {
        name: '系统设置',
        icon: 'SettingOutlined',
        children: [
            {
                path: '/system/user-list',
                name: '账户管理',
                filePath: '/system/userList'
            },
            {
                path: '/system/role-list',
                name: '权限管理',
                filePath: '/system/roleList'
            }
        ]
    }
]

export default menuItems