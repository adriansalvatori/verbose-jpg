<template>
<div class="all">
  <div class="header">
    <img class="logo_header" src="static/logo04.png" alt="">
    
  </div>

  <router-link to="/banner-1">
    <img src="static/banners-1.jpg" alt="">
  </router-link>

  <router-link to="/banner-2">
    <img src="static/banners-2.jpg" alt="">
  </router-link>


  <router-link to="/banner-3">
    <img src="static/banners-3.jpg" alt="">
  </router-link>


  <router-link to="/banner-4">
    <img src="static/banners-4.jpg" alt="">
  </router-link>


  <router-link to="/banner-5">
    <img src="static/banners-5.jpg" alt="">
  </router-link>


  <router-link to="/banner-6">
    <img src="static/banners-6.png" alt="">
  </router-link>


  <router-link to="/banner-7">
    <img src="static/banners-7.png" alt="">
  </router-link>


  <router-link to="/banner-8">
    <img src="static/banners-8.png" alt="">
  </router-link>

</div>
</template>

<script>
export default {
  name: 'Home',

  data () {
    return {
    }
  },

  methods: {
  }
}
</script>


<style scoped>

.salir{
  position:absolute;
  float: right;
  right: 50px;
}

.all{
  top:15px;
  position: relative;
  margin: auto;
  height: auto;
  width: 75%;
  background-color: #3d3f42;
}

.all img{

  transform: scale(0.95);
  transition: transform 0.2s;
}

.all img:hover{
  transform: scale(1);
}
.header{
  position:relative;
  display: block;
  float: left;
  height: auto;
  width: 100%;
  margin-bottom: 60px;
}

.logo_header{
    position: relative;
    display: block;
    top: 35px;
    left: 35px;
    display: block;
    height: 80px;
    width: auto;
}


</style>
