import { createRouter, createWebHashHistory } from "vue-router";
import PageHome from './views/PageHome.vue';
import PageTimetable from './views/PageTimetable.vue';
import PageSettings from './views/PageSettings.vue';
import PageAnnouncements from './views/PageAnnouncements.vue';
import PagePerformance from './views/PagePerformance.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/timetable',
            component: PageTimetable,
            name: 'Schedule'
        },
        {
            path: '/performance',
            component: PagePerformance,
        },
        {
            path: '/',
            component: PageHome,
        },
        {
            path: '/announcements',
            component: PageAnnouncements,
        },
        {
            path: '/settings',
            component: PageSettings,
        }
    ]
});

router.beforeEach((to, from, next) => {
    const regexImageURL = /\.(jpeg|jpg|gif|png|svg)$/i;

    if (regexImageURL.test(to.path)) {
        next(false); 
    } else {
        next();
    }
});

export default router;