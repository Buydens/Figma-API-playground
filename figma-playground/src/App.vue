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
      //let FigmaFile = await FigmaRouter.getComponents("06gofHh4ah2Hpd69FGccBXNO");
      //console.log(FigmaFile);
      //let Canvasses = FigmaFile.document.children.filter(child => child.type == 'CANVAS');
      
      //let Frames = Canvasses[0].children.filter(child => child.type == 'FRAME')

      //let FigmaImage = await FigmaRouter.getComponents("06gofHh4ah2Hpd69FGccBXNO");

      let figmaId = "06gofHh4ah2Hpd69FGccBXNO";

      let result = await fetch('https://api.figma.com/v1/files/' + figmaId, {
        method: 'GET',
        headers: {
          'X-Figma-Token': process.env.VUE_APP_figmaApiKey
        }
      });

      console.log(await result.json())

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
