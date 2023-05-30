import Layout from '@/layout'
export default {
  path: 'external-link',
  name:"externalLink",
  meta:{
    url:"/external-link",
    title: 'External Link',
    icon: 'link'
  },
  component: Layout,
  children: [
    {
      path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
      name:"https",
      meta: { title: 'External Link', icon: 'link' ,url:"https://panjiachen.github.io/vue-element-admin-site/#/"}
    }
  ]
}