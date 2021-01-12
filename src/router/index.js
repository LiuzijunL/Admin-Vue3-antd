import { createRouter, createWebHashHistory } from 'vue-router'
// import menuItems from './addRoutes'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import NotFound from '@/pages/Error/NotFound.vue'

const routeHistory = createWebHashHistory()

// let dynamicRoutes = addDynamicRoutes(menuItems)

const router = createRouter({
    history: routeHistory,
    routes: [
        { path: '/', redirect: '/dashboard/workplace' },
        {
            path: '/',
            name: 'Home',
            component: Home,
            children: [
                {
                    path: '/dashboard/workplace',
                    name: '工作台',
                    component: () => import('@/pages/Dashboard/Workplace.vue')
                },
                {
                    path: '/dashboard/welcomes',
                    name: '欢迎页',
                    component: () => import('@/pages/Dashboard/Welcomes.vue')
                },
                {
                    path: '/account/center',
                    name: '个人中心',
                    component: () => import('@/pages/Account/Center.vue')
                },
                { path: '/account/settings', redirect: '/account/settings/base' },
                {
                    path: '/account/settings',
                    name: '个人设置',
                    component: () => import('@/pages/Account/Settings.vue'),
                    children: [
                        {
                            path: '/account/settings/base',
                            name: '基础设置',
                            meta: { pentPath: '/account/settings' },
                            component: () => import('@/pages/Account/Settings/Base.vue')
                        },
                        {
                            path: '/account/settings/security',
                            name: '安全设置',
                            meta: { pentPath: '/account/settings' },
                            component: () => import('@/pages/Account/Settings/Security.vue')
                        },
                        {
                            path: '/account/settings/custom',
                            name: '个性化',
                            meta: { pentPath: '/account/settings' },
                            component: () => import('@/pages/Account/Settings/Custom.vue')
                        },
                        {
                            path: '/account/settings/binding',
                            name: '账户绑定',
                            meta: { pentPath: '/account/settings' },
                            component: () => import('@/pages/Account/Settings/Binding.vue')
                        },
                        {
                            path: '/account/settings/notification',
                            name: '新消息通知',
                            meta: { pentPath: '/account/settings' },
                            component: () => import('@/pages/Account/Settings/Notification.vue')
                        }
                    ]
                },
                {
                    path: '/system/user-list',
                    name: '账户管理',
                    component: () => import('@/pages/System/UserList.vue')
                },
                {
                    path: '/system/role-list',
                    name: '权限管理',
                    component: () => import('@/pages/System/RoleList.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})


router.beforeEach((to, from, next) => {
    let admin = localStorage.getItem('x-admin') || null
    if(to.path === '/login'){
        next()
    }else{
        if(admin){
            next()
        }else{
            next({ path: '/login' })
        }
    }
})

// function addDynamicRoutes (menuList = [], routes = []) {
//     let temp = []
//     // console.log(menuList, routes)
//     for(var i = 0; i < menuList.length; i++){
//         if(menuList[i].children && menuList[i].children.length >= 1){
//             temp = temp.concat(menuList[i].children)
//         }else{
//             let route = {
//                 path: menuList[i].path,
//                 name: menuList[i].name,
//                 component: null
//             }
//             try {
//                 let array = menuList[i].filePath.split('/')
//                 let url = ''
//                 for (let i = 0; i < array.length; i++) {
//                     url += array[i].substring(0, 1).toUpperCase() + array[i].substring(1) + '/'
//                 }
//                 url = url.substring(0, url.length - 1)
//                 route['component'] = () => import(`../pages${url}.vue`)
//             } catch (e) {
//                 console.log(e)
//             }
//             routes.push(route)
//         }
//     }
//     if(temp.length > 0){
//         addDynamicRoutes(temp, routes)
//     }else{
//         // console.log('加载完毕.......')
//         // console.log(routes)
//     }
//     return routes
// }

export default router