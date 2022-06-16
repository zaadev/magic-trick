<template>
  <div class="shadow-lg p-10 rounded">
    <p class="text-5xl font-bold mb-9 text-center">Guess a Number Between</p>

    <p class="text-4xl font-bold mb-9 text-center">1 to 63</p>

    <button
      v-on:click="startGame()"
      class="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded-full
      "
    >
      Let's Start
    </button>
  </div>
</template>


<script>
export default {
  name: "guessNumber",
  methods: {
    startGame() {
      this.$router.push({
        name: "first_step"
      });
    },
  },
};
</script>