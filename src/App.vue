<template>
  <div id="app">
    <div class="franjaColor">
      
    </div>

    <div class="logo"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  width: 100%;
}


.franjaColor{
    position: absolute;
    top: 0;
    margin-bottom: 15px;
    height: 5px;
    width: 100%;
    background: linear-gradient(to bottom right, #4a3838, #c28e3b)
}
.bloqueColor{
    position: relative;
    height: inherit;
    float: left;
    width: 20%;
    margin: 0;
    padding:0;
}

*{
  font-weight: normal !important;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600 !important;
}



</style>
