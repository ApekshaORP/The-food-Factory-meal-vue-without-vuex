<template>
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Footer from './components/footer/Footer';
export default {
 components:{
   Footer
 } 
}
</script>
<style>

/* imported font family */
@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');
#app {
font-family: 'PT Sans Narrow', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
