<template>
  <div id="app">
      {{commits.message}}
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
      commits: null
    }
  },
  mounted() {
    axios.get('http://localhost:3000/random')
    .then(res => (this.commits = res.data))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
