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
          v-on:click="nextStep(4)"
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
  name: "thirdCard",
  methods: {
    // handle user swipe directions
    onSwipeItem() {
      return function (direction) {
        const previousResult = localStorage.getItem("finalResult");
        const nextResult = parseInt(previousResult) + 4;
        console.log("Swiped item in direction ", direction);

        // if user swipe
        if (direction == "right") {
          // set new result
          localStorage.setItem("finalResult", nextResult);
          router.push({
            name: "fourth_step",
          });
        }

        if (direction == "left") {
          router.push({
            name: "fourth_step",
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
        name: "fourth_step",
      });
    },
  },
  data() {
    return {
      flavorList: [
        { id: "4", name: "Cantaloupe" },
        { id: "5", name: "Cheesecake" },
        { id: "6", name: "Cherry Lemonade" },
        { id: "7", name: "Cherry Limeade" },
        { id: "12", name: "Coconut Cream" },
        { id: "13", name: "Cookie Dough" },
        { id: "14", name: "Cookies N Cream" },
        { id: "15", name: "Florida Orange" },
        { id: "20", name: "Island Fusion" },
        { id: "21", name: "Juicy Pear" },
        { id: "22", name: "Key Lime" },
        { id: "23", name: "Mango Peach" },
        { id: "28", name: "Orange Cream" },
        { id: "29", name: "Pina Colada" },
        { id: "30", name: "Pineapple" },
        { id: "31", name: "Pumpkin Cheesecake" },
        { id: "36", name: "Strawberries N Cream" },
        { id: "37", name: "Strawberry" },
        { id: "38", name: "Strawberry Banana" },
        { id: "39", name: "Strawberry Cheesecake" },
        { id: "44", name: "Sugar-Free Cherry" },
        { id: "45", name: "Sugar-Free Dragon Fruit" },
        { id: "46", name: "Sugar-Free Tangerine" },
        { id: "47", name: "Tropical Daiquiri" },
        { id: "52", name: "Dr. Pepper" },
        { id: "53", name: "Zombie's Blood" },
        { id: "54", name: "Wild Black Cherry" },
        { id: "55", name: "Lemon" },
        { id: "60", name: "Swedish Fish" },
        { id: "61", name: "Ocean Splash" },
        { id: "62", name: "Root Beer" },
        { id: "63", name: "Mango" },
      ],
    };
  },
};
</script>

