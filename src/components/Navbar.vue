<template>
    <nav>
        <ul>
            <li>Home</li>
            <li>Create Blogs</li>
        </ul>
    </nav>
</template>

<script>

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