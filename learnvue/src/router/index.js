import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Work from '@/components/Work'
import Stark from '@/components/Stark'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    mode: 'hash',
    routes: [{
            path: '/',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/work',
            name: 'Work',
            component: Work
        },
        {
            path: '/stark',
            name: 'stark',
            component: Stark
        },
    ]
})