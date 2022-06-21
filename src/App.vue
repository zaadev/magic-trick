<template>
  <!-- <router-view name="home"></router-view>
  <router-view /> -->
  <router-view v-slot="{ Component }">
    <transition name="slide-left">
      <component :is="Component" />
    </transition>
  </router-view>

  <!-- <div class="w-1/2 m-auto">
    <div class="text-center">      
      <button
        v-if="currentStep !== 0 && currentStep !== 7"
        v-on:click="previous"
        class="text-center p-5 text-5xl mt-4"
      >
        <i className="ion-arrow-left-c" />
      </button>      
      <button
        v-if="currentStep !== 7"
        v-on:click="next"
        class="text-center p-5 text-5xl mt-4"
      >
        <i className="ion-arrow-right-c" />
      </button>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "MagicMathCards",
  data() {
    return {
      currentStep: 0,
      finalResult: 0,
    };
  },
  methods: {
    next() {
      if (this.currentStep == 0) {
        this.$router.push({
          name: "first_step",
        });
      }

      if (this.currentStep == 1) {
        this.finalResult += 32;
        this.$router.push({
          name: "second_step",
        });
      }

      if (this.currentStep == 2) {
        this.finalResult += 8;
        this.$router.push({
          name: "third_step",
        });
      }

      if (this.currentStep == 3) {
        this.finalResult += 4;
        this.$router.push({
          name: "fourth_step",
        });
      }

      if (this.currentStep == 4) {
        this.finalResult += 2;
        this.$router.push({
          name: "fifth_step",
        });
      }

      if (this.currentStep == 5) {
        this.finalResult += 16;
        this.$router.push({
          name: "sixth_step",
        });
      }

      if (this.currentStep == 6) {
        this.finalResult += 1;
        this.$router.push({
          name: "final_result",
          params: { result: this.finalResult },
        });
      }

      this.currentStep += 1;
    },
    previous() {
      if (this.currentStep == 0) {
        this.$router.push({
          name: "first_step",
        });
      }

      if (this.currentStep == 1) {
        this.$router.push({
          name: "second_step",
        });
      }

      if (this.currentStep == 2) {
        this.$router.push({
          name: "third_step",
        });
      }

      if (this.currentStep == 3) {
        this.$router.push({
          name: "fourth_step",
        });
      }

      if (this.currentStep == 4) {
        this.$router.push({
          name: "fifth_step",
        });
      }

      if (this.currentStep == 5) {
        this.$router.push({
          name: "sixth_step",
        });
      }

      if (this.currentStep == 6) {
        this.$router.push({
          name: "final_result",
          params: { result: this.finalResult },
        });
      }

      this.currentStep += 1;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.75s ease-out;
}
.slide-left-enter-to {
  position: absolute;
  right: 0;
}
.slide-left-enter-from {
  position: absolute;
  right: -100%;
}
.slide-left-leave-to {
  position: absolute;
  left: -100%;
}
.slide-left-leave-from {
  position: absolute;
  left: 0;
}
/*----------------------*/
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.75s ease-out;
}
.slide-right-enter-to {
  position: absolute;
  left: 0;
}
.slide-right-enter-from {
  position: absolute;
  left: -100%;
}
.slide-right-leave-to {
  position: absolute;
  right: -100%;
}
.slide-right-leave-from {
  position: absolute;
  right: 0;
}
/*----------------------*/
.fade-enter-active {
  transition: all 0.8s ease-in-out;
} 
.fade-leave-active {
  transition: all 1s ease-in-out;
  } 
.fade-enter-from,
.fade-leave-to {
  transform: translateZ(100px);
  opacity: 0;
}
</style>
