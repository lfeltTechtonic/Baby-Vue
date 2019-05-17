import Vue from 'vue'
import Router from 'vue-router'
import Info from '@/components/Info'
import Photos from '@/components/Photos'
import Countdown from '@/components/Countdown'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/info',
            name: 'Info',
            component: Info
        },
        {
           path: '/photos',
           name: 'Photos',
           component: Photos
       },
       {
           path: '/count',
           name: 'Countdown',
           component: Countdown
       },
    ]
})