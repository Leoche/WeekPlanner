<template>
  <div id="app" class="bg-gray-300">
    <div class="flex space-x-4 mx-4 my-8">
      <Day v-for="index in [0,1,2,3,4]" v-bind:key="index" v-bind:day-number='index'></Day>
    </div>
  </div>
</template>

<script>
import Day from './components/Day.vue'

export default {
  name: 'App',
  components: {
    Day
  }
}
</script>

<style>
@import("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap");
#app {
  font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html, body, #app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
body{
  background: #EEE center center;
  background-size:cover;
}
</style>
