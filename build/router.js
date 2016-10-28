/**
 * app
 */

//加载依赖
import Vue from 'Vue';
import VueRouter from 'vue-router';
import store from './store'; //初始化状态管理器
Vue.use(VueRouter);
//组件列表
import NotFound from './pages/not_found.vue';
import Login from './pages/login.vue';
import Dashboard from './pages/dashboard.vue';
import List from './pages/list.vue';

//路由配置
const routes=[
    {
        path: '/dashboard/',
        name: 'dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    },
    {
        path: '/list/',
        name: 'list',
        component: List,
        meta: { requiresAuth: true }
    },
    {
        path: '/login/',
        name: 'login',
        component: Login
    },
    {
        path: '*',
        name: '404',
        component: NotFound
    }
];
//生成路由
const router = new VueRouter({
    mode: 'history',
    routes
});

//检测登录状态
router.beforeEach((to, from, next) => {
    if(to.path==='/'){ //如果是首页时强制跳转到登录页
        next({name:'login'})
        return false;
    }
    let state=store.store.getState();
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if(parseInt(state.admin.status)===0){
            next({
                name: 'login',
                query: { redirect: to.fullPath }
            });
        }else{
            next();
        }
    } else {
        next() // 确保一定要调用 next()
    }
})
export default router;