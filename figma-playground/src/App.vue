<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Base msg="Figma Playground base"/>
  </div>
</template>

<script>
import Base from './components/Base.vue'
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Base
  },
    created:function(){
    this.callApi("06gofHh4ah2Hpd69FGccBXNO")
  },
  methods: {
    callApi: function(figmaId){
      axios({
        method: 'get', //you can set what request you want to be
        url: 'https://api.figma.com/v1/files/' + figmaId,
        headers: {
          'X-Figma-Token': process.env.VUE_APP_figmaApiKey
        }
      }).then(response => {
        console.log(response.data.document)
      })
    }
  }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
