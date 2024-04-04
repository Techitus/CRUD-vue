import { createRouter, createWebHistory  } from "vue-router";
import Home from "/src/views/home/Home.vue"
import SingleProduct from "/src/views/singleProduct/SingleProduct.vue"
const router = createRouter({
    history:createWebHistory(),

   routes : [
    {
        path : '/',
        component : Home
    },
{
    path : "/singleProduct/:id" ,
    component : SingleProduct
}
    
]})

export default router