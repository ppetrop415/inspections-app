const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", redirect: "/home" },
      {
        path: "/home",
        component: () => import("pages/Home/Home.vue"),
        name: "home",
        meta: { requiresAuth: false },
        props: true,
        children: [
          {
            path: "/home/child",
            component: () => import("src/pages/Home/ViewInspection.vue"),
            meta: { requiresAuth: false },
            name: "inspection-detail",
            props: true,
            children: [
              {
                path: "/home/child/grandchild",
                component: () => import("pages/Home/Grandchild.vue"),
                meta: { requiresAuth: true },
              },
            ],
          },
        ],
      },
      {
        path: "/new-inspection",
        component: () => import("pages/NewInspection/Questions.vue"),
        meta: { requiresAuth: false },
        children: [
          {
            path: "/new-inspection/answer",
            component: () => import("pages/NewInspection/Answer.vue"),
            meta: { requiresAuth: false },
          },
        ],
      },
      {
        path: "/images",
        component: () => import("pages/Profile/Images.vue"),
        meta: { requiresAuth: false },
      },
    ],
  },

  {
    path: "/login",
    component: () => import("layouts/LoginLayout.vue"),

    children: [
      {
        path: "/login",
        component: () => import("pages/Users/Login.vue"),
        name: "login",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
