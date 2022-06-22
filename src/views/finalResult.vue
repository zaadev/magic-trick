<template>
  <div class="shadow-lg p-10 rounded">
    <p class="text-5xl font-bold mb-9 text-center">Your Guess Number is</p>

    <p id="finalResult" class="text-4xl font-bold mb-9 text-center"></p>

    <router-link
      class="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded-full
      "
      to="/"
      >Play Again
    </router-link>

  </div>
</template>

<script>
export default {
  name: "finalResult",

  mounted() {
    document.getElementById("finalResult").innerText =
      localStorage.getItem("finalResult");
    localStorage.removeItem("finalResult");
  },
};
</script>



