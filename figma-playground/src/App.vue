<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Base msg="Figma Playground base"/>
  </div>
</template>

<script>
import Base from './components/Base.vue'
import FigmaRouter from './logic/FigmaRouter';

export default {
  name: 'app',
  components: {
    Base
  },
  created: function(){
    this.callApi();
  },
  methods: {
    callApi: async function(){
      console.log(await FigmaRouter.getFile("06gofHh4ah2Hpd69FGccBXNO"));
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
