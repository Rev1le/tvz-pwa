export default [
    // {
    //     path: "/",
    //     name: "MobileLayout",
    //     component: () => import('@/pages/MobileLayout.vue')
    // },
    {
        path: "/service-order/",
        name: "ServiceOrderForm",
        component: () => import('@/pages/ServiceOrderForm.vue'),
    },
    {
        path: "/service-order-list/",
        name: "ServiceOrderList",
        component: () => import('@/pages/ServiceOrderList.vue'),
        meta: {
            label: "Заявки"
        }
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: () => import('@/pages/NotFound.vue')
    }
];
