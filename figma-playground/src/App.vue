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
    this.getIds();
  },
  methods: {
    getIds: async function(){
      //let nodes = await FigmaRouter.getFile("06gofHh4ah2Hpd69FGccBXNO").document.children;
      let FigmaFile = await FigmaRouter.getFile("06gofHh4ah2Hpd69FGccBXNO");
      console.log(FigmaFile);
      //let Canvasses = FigmaFile.document.children.filter(child => child.type == 'CANVAS');
      
      //let Frames = Canvasses[0].children.filter(child => child.type == 'FRAME')

      let FigmaImage = await FigmaRouter.getImage("06gofHh4ah2Hpd69FGccBXNO");

      console.log(FigmaImage);

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
