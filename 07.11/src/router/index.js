import VueRouter from 'vue-router'

import Home from '../pages/Home'
import uk from '../pages/uk'
import ru from '../pages/ru'
import en from '../pages/en'

export default new VueRouter({
    mode: 'history',
    routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/uk',
        name: 'uk',
        component: uk
    },
    {
        path: '/ru',
        name: 'ru',
        component: ru
    },
    {
        path: '/en',
        name: 'en',
        component: en
    }
    ]
})