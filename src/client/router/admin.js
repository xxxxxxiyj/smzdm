const category = () => import('../pages/admin/category.vue')

export default [{
  path: '/admin/categories',
  component: category,
  meta: { requiresAdmin: true } // 标识只有admin才能访问此路由
}]