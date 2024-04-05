<template>
    <nav>
        <ul>
          <li @click="redirect"> Home</li>
         <li><router-link to="/addProduct">Add product</router-link> </li>
        </ul>
    </nav>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    redirect(){
      this.$router.push('/')
    }
  }
}
</script>

 <style scoped>
 nav {
    background: black;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;

 }
 ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
 }
  li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-size: 20px;
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
  li:hover{
opacity: 0.8;  }
 </style>