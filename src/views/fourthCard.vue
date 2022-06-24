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
        <span class="count">4/6</span>
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
        <span class="count">4/6</span>
      </div>
      <div class="button-holder">
        <button v-on:click="nextStep(0)" type="button" class="btn btn-action">
          No
        </button>
        <button
          v-on:click="nextStep(2)"
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
  name: "fourthCard",
  methods: {
    // handle user swipe directions
    onSwipeItem() {
      return function (direction) {
        const previousResult = localStorage.getItem("finalResult");
        const nextResult = parseInt(previousResult) + 2;
        console.log("Swiped item in direction ", direction);

        // if user swipe
        if (direction == "right") {
          // set new result
          localStorage.setItem("finalResult", nextResult);
          router.push({
            name: "fifth_step",
          });
        }

        if (direction == "left") {
          router.push({
            name: "fifth_step",
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
        name: "fifth_step",
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
        { id: "2", name: "Birthday Cake" },
        { id: "3", name: "Blueberry" },
        { id: "6", name: "Cherry Lemonade" },
        { id: "7", name: "Cherry Limeade" },
        { id: "10", name: "Chocolate Chocolate Chip" },
        { id: "11", name: "Chocolate Peanut Butter" },
        { id: "14", name: "Cookies N Cream" },
        { id: "15", name: "Florida Orange" },
        { id: "18", name: "Green Apple" },
        { id: "19", name: "Guava Passionfruit" },
        { id: "22", name: "Key Lime" },
        { id: "23", name: "Mango Peach" },
        { id: "26", name: "Marshmallow Peanut Butter" },
        { id: "27", name: "Mojito" },
        { id: "30", name: "Pineapple" },
        { id: "31", name: "Pumpkin Cheesecake" },
        { id: "34", name: "Shamrock" },
        { id: "35", name: "Sour Patch Kids Red" },
        { id: "38", name: "Strawberry Banana" },
        { id: "39", name: "Strawberry Cheesecake" },
        { id: "42", name: "Strawberry Margarita" },
        { id: "43", name: "Strawberry Watermelon" },
        { id: "46", name: "Sugar-Free Tangerine" },
        { id: "47", name: "Tropical Daiquiri" },
        { id: "50", name: "Watermelon" },
        { id: "51", name: "Watermelon Chip" },
        { id: "54", name: "Wild Black Cherry" },
        { id: "55", name: "Lemon" },
        { id: "58", name: "Cherry" },
        { id: "59", name: "Cotton Candy" },
        { id: "62", name: "Root Beer" },
        { id: "63", name: "Mango" },
      ],
    };
  },
};
</script>