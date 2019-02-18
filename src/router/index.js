import Vue from 'vue'
import Router from 'vue-router'
import menus from '@/config/menu-config'

Vue.use(Router)

var routes = []
// var routes = [
//     {
//         name: "dashboard",
//         path: '/dashboard',
//         component: dashboard
//     }
// ]

menus.forEach((item) => {
    item.sub.forEach((sub) => {
        routes.push({
            path: `/${sub.componentName}`,
            name: sub.componentName,
            component: () => import(`@/views/${sub.componentName}`)
            // component: dashboard
        })
    })
})

console.log(routes)

export default new Router({ routes })