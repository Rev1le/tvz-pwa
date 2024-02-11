export default [
    // {
    //     path: "/",
    //     name: "MobileLayout",
    //     component: () => import('@/pages/MobileLayout.vue')
    // },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: () => import('@/pages/NotFound.vue')
    }
];
