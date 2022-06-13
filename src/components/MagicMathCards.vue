<template>
    <div class="w-1/2 m-auto">
      <div v-if="!submitted">
        <component
          v-bind:is="steps[currentStep].component"
          v-bind:formValue="formValue[steps[currentStep].label]"
          @formValueChange="updateFormValue"
        />

        <div class="text-center">

          <button v-if="currentStep !== 0 && currentStep !== 7" v-on:click="previous" class="text-center p-5 text-5xl mt-4">
            <i className="ion-arrow-left-c" />
          </button>

          <button v-if="currentStep < steps.length - 1" v-on:click="next" class="text-center p-5 text-5xl mt-4">
            <i className="ion-arrow-right-c" />
          </button>

          <!-- Final result -->
          <div v-else class="shadow-lg p-10 rounded">
            <p class="text-5xl font-bold mb-9 text-center">Your Guess a Number is</p>

            <p class="text-5xl font-bold mb-9 text-center">{{finalResult}}</p>
          </div>
        </div>

      </div>
      <div v-else class="text-5xl font-bold text-center shadow-lg p-10">
        <span><span class="text-green-500">Thank you for submitting the form.</span> <br/><br/> We will get back to you soon.</span>
      </div>
    </div>
</template>

<script>
import guessNumber from '../views/guessNumber.vue';
import firstCard from '../views/firstCard.vue';
import secondCard from '../views/secondCard.vue';
import thirdCard from '../views/thirdCard.vue';
import fourthCard from '../views/fourthCard.vue';
import fifthCard from '../views/fifthCard.vue';
import sixthCard from '../views/sixthCard.vue';
import finalResult from '../views/finalResult.vue';

export default {
  name: 'MagicMathCards',
  data () {
    return {
      currentStep: 0,
      submitted: false,
      finalResult : 0,
      formValue: {
        firstCard: {
          address: '',
          gender: ''
        },
        secondCard: {
          secondCardPicture: '',
          bio: ''
        },
        thirdCard: {
          secondCardPicture: '',
          bio: ''
        },
        fourthCard: {
          secondCardPicture: '',
          bio: ''
        },
        fifthCard: {
          secondCardPicture: '',
          bio: ''
        },
        sixthCard: {
          secondCardPicture: '',
          bio: ''
        },
      },
      steps: [
        {
          component: guessNumber,
          label: 'guessNumber'
        },
        {
          component: firstCard,
          label: 'firstCard'
        },
        {
          component: secondCard,
          label: 'secondCard'
        },
        {
          component: thirdCard,
          label: 'thirdCard'
        },
        {
          component: fourthCard,
          label: 'fourthCard'
        },
        {
          component: fifthCard,
          label: 'fifthCard'
        },
        {
          component: sixthCard,
          label: 'sixthCard'
        },
        {
          component: finalResult,
          label: 'finalResult'
        },
      ]
    }
  },
  methods: {
    next () {
      this.$router.push({
        name: 'sixth_step'
      })

    },
    previous () {
      this.currentStep += 1;
    },
    updateFormValue (payload) {
      this.formValue = {
        ...this.formValue,
        [payload.label]: payload.data
      }
    },
    submit () {
      this.submitted = true;
      console.log(this.formValue)
    }
  },
  components: [
    guessNumber,
    firstCard,
    secondCard,
    thirdCard,
    fourthCard,
    fifthCard,
    sixthCard,
    finalResult,
  ]
}
</script>
