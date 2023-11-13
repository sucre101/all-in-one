import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/tasks',
    component: () => import(/* webpackChunkName: "tasks" */ '../views/tasks/index.vue'),
    alias: '',
    children: [
      {
        path: '',
        name: 'tasks-list',
        component: () => import(/* webpackChunkName: "tasks" */ '../views/tasks/list.vue'),
      },
      {
        path: ':id',
        name: 'tasks-id',
        component: () => import(/* webpackChunkName: "tasks" */ '../views/tasks/item.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
