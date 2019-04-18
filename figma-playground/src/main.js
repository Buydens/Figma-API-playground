import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: h => h(App),
}).$mount('#app')

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

