import { createRouter, createWebHistory  } from "vue-router";
import Home from "/src/views/home/Home.vue"
import AddProduct from '/src/views/addProduct/AddProduct.vue'
import SingleProduct from "/src/views/singleProduct/SingleProduct.vue"
import EditProduct from "/src/views/editProduct/EditProduct.vue"
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
},
{
    path : "/addproduct",
    component : AddProduct
},
{
    path : "/editproduct/:id",
    component : EditProduct
}
    
]})

export default router