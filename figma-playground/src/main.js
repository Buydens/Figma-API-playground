import Vue from 'vue'
import App from './App.vue'

//VUE APP INITIATION

var vue = new Vue({
  render: h => h(App),
}).$mount('#app')

//FIGMA API COUPLING

/*
TODO: Add check for local / server
TODO: Document CORS issue in MD
TODO: Manage CORS fix via .ENV
*/