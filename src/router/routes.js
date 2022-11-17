const routes = [
  {
    path: '/',
    component: () => import('@/layout/navTop.vue'),
    redirect: '/index',
    hidden: true,
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("@/views/Home/index.vue"),
        meta: {
          isActive: false
        }
      },
      {
        path: "/wallpaper",
        name: "wallpaper",
        component: () => import("@/views/Wallpaper/index.vue"),
        meta: {
          isActive: false
        }
      },
      {
        path: "/video",
        name: "video",
        component: () => import("@/views/Video/index.vue"),
        meta: {
          isActive: false
        }
      }
    ]
  },
  {
    path: "/video-detail",
    name: "video-detail",
    component: () => import("@/components/haokanvideo-com/video-detail.vue"),
  }

];
export default routes