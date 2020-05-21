import Main from './views/Main.vue'
import Sub from './views/Sub.vue'
import Admin from './views/Admin.vue'


export default [

    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/sub',
        name: 'Sub',
        component: Sub
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    }
]