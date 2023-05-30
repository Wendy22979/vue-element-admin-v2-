import Layout from '@/layout'
export default {
  path: '/form',
  name:"form",
  meta:{url:"/form",icon: 'el-icon-delete-solid'},
  component: Layout,
  children: [
    {
      path: 'index',
      name: 'formIndex',
      component: () => import('@/views/form/index'),
      meta: { title: 'Form', icon: 'el-icon-delete-solid',url:"/form/index"}
    }
  ]
}