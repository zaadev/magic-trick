import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/guessNumber.vue'
import FirstStep from '../views/firstCard.vue'
import SecondStep from '../views/secondCard.vue'
import ThirdStep from '../views/thirdCard.vue'
import FourthStep from '../views/fourthCard.vue'
import FifthStep from '../views/fifthCard.vue'
import SixthStep from '../views/sixthCard.vue'
import FinalResult from '../views/finalResult.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/first-step',
    name: 'first_step',
    component: FirstStep
  },
  {
    path: '/second-step',
    name: 'second_step',
    component: SecondStep
  },
  {
    path: '/third-step',
    name: 'third_step',
    component: ThirdStep
  },
  {
    path: '/fourth-step',
    name: 'fourth_step',
    component: FourthStep
  },
  {
    path: '/fifth-step',
    name: 'fifth_step',
    component: FifthStep
  },
  {
    path: '/sixth-step',
    name: 'sixth_step',
    component: SixthStep
  },
  {
    path: '/final-result/:result',
    name: 'final_result',
    component: FinalResult
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


router.beforeEach((to, from, next) => {  
  // restriction for first step
  if (to.name == 'first_step' && from.name != 'home') next({ name: 'home' })
  // restriction for second step
  if (to.name == 'second_step' && from.name != 'first_step') next({ name: 'home' })
  // restriction for third step
  if (to.name == 'third_step' && from.name != 'second_step') next({ name: 'home' })
  // restriction for fourth step
  if (to.name == 'fourth_step' && from.name != 'third_step') next({ name: 'home' })
  // restriction for fifth step
  if (to.name == 'fifth_step' && from.name != 'fourth_step') next({ name: 'home' })
  // restriction for sixth step
  if (to.name == 'sixth_step' && from.name != 'fifth_step') next({ name: 'home' })
  // restriction for result page
  if (to.name == 'final_result' && from.name != 'sixth_step') next({ name: 'home' })

  else next()
})

export default router
