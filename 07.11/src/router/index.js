import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Products from '../pages/Products'
import Aboutus from '../pages/Aboutus'
import Contacts from '../pages/Contacts'

export default new VueRouter({
    mode: 'history',
    routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/products',
        name: 'products',
        component: Products
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        component: Aboutus
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts
    }
    ]
})