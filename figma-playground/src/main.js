import Vue from 'vue'
import App from './App.vue'

//VUE APP INITIATION

new Vue({
  render: h => h(App),
}).$mount('#app')

//FIGMA API COUPLING

/*
TODO: Add check for local / server
TODO: Document CORS issue in MD
TODO: Manage CORS fix via .ENV
*/

const figmaApiKey = process.env.figmaApiKey

async function getThree(figmaId) {
  let result = await fetch('https://api.figma.com/v1/files/' + figmaId, {
    method: 'GET',
    headers: {
      'X-Figma-Token': figmaApiKey
    }
  })

let figmaTreeStructure = await result.json()
console.log(figmaTreeStructure)
}

getThree("06gofHh4ah2Hpd69FGccBXNO")

