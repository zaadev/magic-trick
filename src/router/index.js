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

export default router
