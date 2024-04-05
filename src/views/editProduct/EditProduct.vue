<template>
    <div class="container">
  <h2>Create Your Product</h2>

  <form @submit.prevent="addProduct" action="#" method="post" >
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="product.name" name="name" required>
    </div>
    <div>
      <label for="image">Image:</label>
      <input type="text" id="image" v-model="product.image" name="image" required>
    </div>
    <div>
      <label for="description">Description:</label>
      <input type="text" id="description" v-model="product.description" name="description" required>
    </div>
    <div>
      <label for="material">Material:</label>
      <input type="text" id="material" v-model="product.material" name="material" required>
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
</div>
</template>
<script>
import axios from "axios"
export default {
    data(){
        return {
            product: {}
        }
    },
    methods : {
      async  addProduct(){
            const response = await axios.put("https://660bb1a1ccda4cbc75dd6dc3.mockapi.io/product/", this.product)
             if(response.status == 200) {
                this.$router.push ("/singleProduct" + productId)
             }else{
                alert("something went wrong")
             }
        },
        async fetchProduct(){
      const productId = this.$route.params.id
      const response = await axios.get("https://660bb1a1ccda4cbc75dd6dc3.mockapi.io/product/" + productId)
      this.products = response.data
    }, 
    },
    mounted() {
      this.fetchProduct()
    }
}
</script>

<style scoped>

.container {
    max-width: 500px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .container h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .container form {
    display: flex;
    flex-direction: column;
  }

  .container label {
    margin-bottom: 5px;
  }

  .container input[type="text"] {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s ease;
  }

  .container input[type="text"]:focus {
    border-color: #007bff;
  }

  .container button[type="submit"] {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .container button[type="submit"]:hover {
    background-color: #0056b3;
  }
</style>