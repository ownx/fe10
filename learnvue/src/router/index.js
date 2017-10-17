import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Work from '@/components/Work'

Vue.use(Router)

export default new Router({
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
    ]
})