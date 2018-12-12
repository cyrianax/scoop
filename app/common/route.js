import Vue from 'vue'
import Router from 'vue-router'

import base from '@module/base'
// import sign from '@module/sign'
// import task from '@module/task'
// import rule from '@module/rule'

Vue.use(Router)

const flatten = routes => routes.reduce((flattened, current) => {
  const route = {
    path: current.path,
    component: current.layout,
    children: [
      {
        path: '',
        component: current.component
      }
    ]
  }
  return flattened.concat(
    Array.isArray(current.children)
      ? [route].concat(flatten(current.children))
      : [route]
  )
}, [])

export default new Router({
  routes: flatten([
    base,
    // sign,
    // task,
    // rule,
  ]),
})
