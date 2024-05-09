export default [
  {
    path: "/",
    name: "Home",
    component: () => import('@/pages/Home.vue'),
    meta: {
        label: "Домашняя страница"
    }
  },
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
