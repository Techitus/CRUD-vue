<template>
<div class="product-container">
  <img class="product-image" :src="products.image" alt="Product Image">
  <div class="product-details">
    <h2 class="product-title">{{ products.name}}</h2>
    <p class="product-description">{{ products.description}} </p>
    <p>{{products.createdAt}}</p>
    <a href="#" class="product-button">Delete</a>
  </div>
</div>
</template>

<script>
import axios from "axios"
export default {
data(){
  return {
    products : {}
  }
},
methods : {
 async fetchProduct(){
    const productId = this.$route.params.id
    const response = await axios.get('https://660bb1a1ccda4cbc75dd6dc3.mockapi.io/product/' + productId)
    this.products = response.data
  }
},
mounted(){
  this.fetchProduct()
}
}

</script>





<style scoped>
 .product-container {
    max-width: 600px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    margin: 20px auto;
  }

  .product-image {
    width: 100%;
    height: auto;
  }

  .product-details {
    padding: 20px;
  }

  .product-title {
    font-size: 24px;
    font-weight: bold;
    margin: 0 0 10px;
  }

  .product-description {
    font-size: 16px;
    color: #666;
    margin: 0 0 20px;
  }

  .product-price {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin: 0 0 20px;
  }

  .product-button {
    display: inline-block;
    padding: 10px 20px;
    background-color:red;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    text-decoration: none;
  }

  .product-button:hover {
    background-color: #570e14;
  }
</style>