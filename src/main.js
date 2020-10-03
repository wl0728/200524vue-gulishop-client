import App from '@/App'
// import Vue from 'vue/dist/vue.esm.js' //带解析器的vue版本
import Vue from 'vue'
import router from '@/router'

Vue.config.productionTip = false


new Vue({
  el:'#app',
  render:h =>(App)//1.定义带注册 2，使用插件 
})
// new Vue({
//   el:'app',
//   component:{
//     App //定义带注册
//   },
//   template:'<App />'
// })