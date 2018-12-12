import Vue from 'vue'
import init from '@common/init'
import router from '@common/route'

Vue.config.productionTip = false

init(() => {
  new Vue({
    router,
    render: h => (
      <router-view/>
    )
  }).$mount('#app')
})
