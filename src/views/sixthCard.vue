<template>
  <!-- Header -->
  <header class="header">
    <a href="#" class="location"><span class="icon-map-marker-light"></span></a>
    <div class="logo">
      <a href="#"><img src="images/logo.svg" alt="Rita's" /></a>
    </div>
    <span class="menu-opener"
      ><img src="images/arrow-up-from-bracket-solid.svg" class="share-button"
    /></span>
  </header>

  <!-- Main content -->
  <main class="main">
    <div class="main-section">
      <div class="head">
        <h1>Do you see your flavor?</h1>
        <span class="count">6/6</span>
      </div>

      <div class="flavor-box">
        <div
          class="block"
          v-for="item in randomList(flavorList)"
          :key="item.id"
        >
          <div class="image">
            <img
              :src="'./images/flavors/' + item.id + '.png'"
              :alt="item.name"
            />
          </div>
          <span class="text"> {{ item.name }} </span>
        </div>
      </div>

      <div class="head">
        <h1>Do you see your flavor?</h1>
        <span class="count">6/6</span>
      </div>
      <div class="button-holder">
        <button v-on:click="nextStep(0)" type="button" class="btn btn-action">
          No
        </button>
        <button
          v-on:click="nextStep(1)"
          type="button"
          class="btn btn-action add"
        >
          Yes
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import router from "@/router";

export default {
  name: "sixthCard",
  methods: {
    // handle user swipe directions
    onSwipeItem() {
      return function (direction) {
        const previousResult = localStorage.getItem("finalResult");
        const nextResult = parseInt(previousResult) + 1;
        console.log("Swiped item in direction ", direction);

        // if user swipe
        if (direction == "right") {
          // set new result
          localStorage.setItem("finalResult", nextResult);
          router.push({
            name: "final_result",
          });
        }

        if (direction == "left") {
          router.push({
            name: "final_result",
          });
        }
      };
    },
    // forward to next step with saving result
    nextStep(result) {
      const previousResult = localStorage.getItem("finalResult");
      const nextResult = parseInt(previousResult) + parseInt(result);

      localStorage.setItem("finalResult", nextResult);

      router.push({
        name: "final_result",
      });
    },
    // make array indexes randomize
    randomList: function (rand) {
      return rand.sort(() => Math.random() - 0.5);
    },
  },
  data() {
    return {
      flavorList: [
        { id: "1", name: "Banana" },
        { id: "3", name: "Blueberry" },
        { id: "5", name: "Cheesecake" },
        { id: "7", name: "Cherry Limeade" },
        { id: "9", name: "Chocolate Chip Cheesecake" },
        { id: "11", name: "Chocolate Peanut Butter" },
        { id: "13", name: "Cookie Dough" },
        { id: "15", name: "Florida Orange" },
        { id: "17", name: "Georgia Peach" },
        { id: "19", name: "Guava Passionfruit" },
        { id: "21", name: "Juicy Pear" },
        { id: "23", name: "Mango Peach" },
        { id: "25", name: "Margarita" },
        { id: "27", name: "Mojito" },
        { id: "29", name: "Pina Colada" },
        { id: "31", name: "Pumpkin Cheesecake" },
        { id: "33", name: "S'mores" },
        { id: "35", name: "Sour Patch Kids Red" },
        { id: "37", name: "Strawberry" },
        { id: "39", name: "Strawberry Cheesecake" },
        { id: "41", name: "Strawberry Lemonade" },
        { id: "43", name: "Strawberry Watermelon" },
        { id: "45", name: "Sugar-Free Dragon Fruit" },
        { id: "47", name: "Tropical Daiquiri" },
        { id: "49", name: "Vanilla" },
        { id: "51", name: "Watermelon Chip" },
        { id: "53", name: "Zombie's Blood" },
        { id: "55", name: "Lemon" },
        { id: "57", name: "Blue Raspberry" },
        { id: "59", name: "Cotton Candy" },
        { id: "61", name: "Ocean Splash" },
        { id: "63", name: "Mango" },
      ],
    };
  },
};
</script>
