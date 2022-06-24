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
          v-on:click="nextStep(16)"
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
  name: "fifthCard",
  methods: {
    // handle user swipe directions
    onSwipeItem() {
      return function (direction) {
        const previousResult = localStorage.getItem("finalResult");
        const nextResult = parseInt(previousResult) + 16;
        console.log("Swiped item in direction ", direction);

        // if user swipe right
        if (direction == "right") {
          // set new result
          localStorage.setItem("finalResult", nextResult);
          router.push({
            name: "sixth_step",
          });
        }

        // if user swipe left
        if (direction == "left") {
          router.push({
            name: "sixth_step",
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
        name: "sixth_step",
      });
    },
  },
  data() {
    return {
      flavorList: [
        { id: "16", name: "Fudge Brownie" },
        { id: "17", name: "Georgia Peach" },
        { id: "18", name: "Green Apple" },
        { id: "19", name: "Guava Passionfruit" },
        { id: "20", name: "Island Fusion" },
        { id: "21", name: "Juicy Pear" },
        { id: "22", name: "Key Lime" },
        { id: "23", name: "Mango Peach" },
        { id: "24", name: "Mango Strawberry" },
        { id: "25", name: "Margarita" },
        { id: "26", name: "Marshmallow Peanut Butter" },
        { id: "27", name: "Mojito" },
        { id: "28", name: "Orange Cream" },
        { id: "29", name: "Pina Colada" },
        { id: "30", name: "Pineapple" },
        { id: "31", name: "Pumpkin Cheesecake" },
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