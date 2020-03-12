// import Mister from '../page/Mister/Mister.vue'
// import Classer from '../page/Classer/Classer.vue'
// import Shopping from '../page/Shopping/Shopping.vue'
// import Login from '../page/Login/Login.vue'
// 性能优化 路由懒加载
const Mister = () => import ('../page/Mister/Mister.vue')
const Classer = () => import ('../page/Classer/Classer.vue')
const Shopping = () => import ('../page/Shopping/Shopping.vue')
const Login = () => import ('../page/Login/Login.vue')
const Search = () => import ('../page/Search/Search.vue')

export default [
    {
        path:'/mister',
        component:Mister,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/classer',
        component:Classer,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/shopping',
        component:Shopping,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/login',
        component:Login,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/search',
        component:Search
    },
    {
        path:'/',
        redirect:'/mister',
        meta:{
            isShowFooter:true
        }
    }
]