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
        <div class="block" v-for="item in flavorList" :key="item.id">
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
          v-on:click="nextStep(8)"
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
  name: "secondCard",
  methods: {
    // handle user swipe directions
    onSwipeItem() {
      return function (direction) {
        const previousResult = localStorage.getItem("finalResult");
        const nextResult = parseInt(previousResult) + 8;
        console.log("Swiped item in direction ", direction);

        // if user swipe
        if (direction == "right") {
          // set new result
          localStorage.setItem("finalResult", nextResult);
          router.push({
            name: "third_step",
          });
        }

        if (direction == "left") {
          router.push({
            name: "third_step",
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
        name: "third_step",
      });
    },
  },
  data() {
    return {
      flavorList: [
        { id: "8", name: "Chocolate" },
        { id: "9", name: "Chocolate Chip Cheesecake" },
        { id: "10", name: "Chocolate Chocolate Chip" },
        { id: "11", name: "Chocolate Peanut Butter" },
        { id: "12", name: "Coconut Cream" },
        { id: "13", name: "Cookie Dough" },
        { id: "14", name: "Cookies N Cream" },
        { id: "15", name: "Florida Orange" },
        { id: "24", name: "Mango Strawberry" },
        { id: "25", name: "Margarita" },
        { id: "26", name: "Marshmallow Peanut Butter" },
        { id: "27", name: "Mojito" },
        { id: "28", name: "Orange Cream" },
        { id: "29", name: "Pina Colada" },
        { id: "30", name: "Pineapple" },
        { id: "31", name: "Pumpkin Cheesecake" },
        { id: "40", name: "Strawberry Colada" },
        { id: "41", name: "Strawberry Lemonade" },
        { id: "42", name: "Strawberry Margarita" },
        { id: "43", name: "Strawberry Watermelon" },
        { id: "44", name: "Sugar-Free Cherry" },
        { id: "45", name: "Sugar-Free Dragon Fruit" },
        { id: "46", name: "Sugar-Free Tangerine" },
        { id: "47", name: "Tropical Daiquiri" },
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