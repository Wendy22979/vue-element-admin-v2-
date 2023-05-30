import Vue from 'vue';
import { Scrollbar,DropdownItem,Dropdown,DropdownMenu,Button,Message,Form,FormItem,Input,Menu,MenuItem,Submenu,Breadcrumb,BreadcrumbItem,Alert} from 'element-ui';


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(DropdownMenu)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(Alert)
Vue.use(Scrollbar)

Vue.prototype.$message = Message;

