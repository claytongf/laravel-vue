import Vue from 'vue'
import VueRouter from 'vue-router'

import AdminComponent from '../components/admin/AdminComponent'
import CategoriesComponent from '../components/admin/pages/categories/CategoriesComponent'
import DashboardComponent from '../components/admin/pages/dashboard/DashboardComponent'
import AddCategoryComponent from '../components/admin/pages/categories/AddCategoryComponent'
import EditCategoryComponent from '../components/admin/pages/categories/EditCategoryComponent'
import ProductsComponent from '../components/admin/pages/products/ProductsComponent'
import HomeComponent from '../components/frontend/pages/home/HomeComponent'
import ContactComponent from '../components/frontend/pages/contact/ContactComponent'
import SiteComponent from '../components/frontend/SiteComponent'
import ProductDetail from '../components/frontend/pages/product/ProductDetail'
import CartComponent from '../components/frontend/pages/cart/CartComponent'

Vue.use(VueRouter)

const routes = [
    {path: '/', component: SiteComponent, children: [
        {path: 'carrinho', component: CartComponent, name: 'cart'},
        {path: 'product/:id', component: ProductDetail, name: 'product.detail', props: true},
        {path: 'contact', component: ContactComponent, name: 'contact'},
        {path: '', component: HomeComponent, name: 'home'}
    ]},
    {path: '/admin', component: AdminComponent, children: [
        {path: '', component: DashboardComponent, name: 'admin.dashboard'},
        {path: 'categories', component: CategoriesComponent, name: 'admin.categories'},
        {path: 'categories/create', component: AddCategoryComponent, name: 'admin.categories.create'},
        {path: 'categories/:id/edit', component: EditCategoryComponent, name: 'admin.categories.edit', props: true},
        {path: 'products', component: ProductsComponent, name: 'admin.products'},
    ]},

]

const router = new VueRouter({
    routes
})

export default router
