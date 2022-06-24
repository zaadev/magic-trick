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
        <span class="count">1/6</span>
      </div>

      <div class="flavor-box">
        <div class="block" v-for="item in randomList(flavorList)" :key="item.id">
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
        <span class="count">1/6</span>
      </div>
      <div class="button-holder">
        <button v-on:click="nextStep(0)" type="button" class="btn btn-action">
          No
        </button>
        <button
          v-on:click="nextStep(32)"
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
  name: "guessNumber",
  methods: {
    // handle user swipe directions
    onSwipeItem() {
      return function (direction) {
        console.log("Swiped item in direction ", direction);

        // if user swipe
        if (direction == "right") {
          // set new result
          localStorage.setItem("finalResult", 32);
          router.push({
            name: "second_step",
          });
        }

        if (direction == "left") {
          localStorage.setItem("finalResult", 0);

          router.push({
            name: "second_step",
          });
        }
      };
    },
    // forward to next step with saving result
    nextStep(result) {
      localStorage.setItem("finalResult", result);

      router.push({
        name: "second_step",
      });
    },
    // make array indexes randomize
    randomList: function(rand){      
      return rand.sort(() => Math.random() - 0.5);
    }
  },
  data() {
    return {
      flavorList: [
        { id: "32", name: "Pumpkin Pie" },
        { id: "33", name: "S'mores" },
        { id: "34", name: "Shamrock" },
        { id: "35", name: "Sour Patch Kids Red" },
        { id: "36", name: "Strawberries N Cream" },
        { id: "37", name: "Strawberry" },
        { id: "38", name: "Strawberry Banana" },
        { id: "39", name: "Strawberry Cheesecake" },
        { id: "40", name: "Strawberry Colada" },
        { id: "41", name: "Strawberry Lemonade" },
        { id: "42", name: "Strawberry Margarita" },
        { id: "43", name: "Strawberry Watermelon" },
        { id: "44", name: "Sugar-Free Cherry" },
        { id: "45", name: "Sugar-Free Dragon Fruit" },
        { id: "46", name: "Sugar-Free Tangerine" },
        { id: "47", name: "Tropical Daiquiri" },
        { id: "48", name: "Unicorn" },
        { id: "49", name: "Vanilla" },
        { id: "50", name: "Watermelon" },
        { id: "51", name: "Watermelon Chip" },
        { id: "52", name: "Dr. Pepper" },
        { id: "53", name: "Zombie's Blood" },
        { id: "54", name: "Wild Black Cherry" },
        { id: "55", name: "Lemon" },
        { id: "56", name: "Mint Chocolate Chip" },
        { id: "57", name: "Blue Raspberry" },
        { id: "58", name: "Cherry" },
        { id: "59", name: "Cotton Candy" },
        { id: "60", name: "Swedish Fish" },
        { id: "61", name: "Ocean Splash" },
        { id: "62", name: "Root Beer" },
        { id: "63", name: "Mango" },
      ],
    };
  },
};
</script>

