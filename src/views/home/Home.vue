<template>
<div class="container">

  <div v-for="product in products" :key="product.id" class="card">
    <img :src="product.image" alt="Product 1">
    <div class="card-content">
      <h3>{{product.name}}</h3>
      <p>{{product.description}}</p> <br>
      <p>{{product.material}}</p>
      <p>{{product.createdAt}}</p> <br>
      <router-link :to="'/SingleProduct/' + product.id">see more</router-link>
    </div>
  </div>

</div>
  </template>

<script>
   import axios from "axios"
export default {
  data(){
    return {
      products : []
    }
  },
  methods : {
    async getProduct(){
      const response =  await axios.get("https://660bb1a1ccda4cbc75dd6dc3.mockapi.io/product")
      this.products = response.data
    }
  },
   mounted(){
    this.getProduct()
   }
}
</script>

<style src="./Home.css">

</style>