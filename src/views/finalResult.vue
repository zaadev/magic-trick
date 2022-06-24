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
    <div class="top-section add">
      <div class="holder text-center" v-for="item in flavorList" :key="item.id">
        <span v-if="finalResult == item.id">
          <span id="rounded-text">
            <img src="images/curved.png" />
          </span>

          <div class="features-image2">
            <img
              :src="'./images/flavors/' + item.id + '.png'"
              :alt="item.name"
            />
          </div>

          <div class="top-section__text">
            <h1>{{ item.name }}</h1>
          </div>

          <!-- <button type="button" class="btn btn-primary">Share</button> -->
          <button v-on:click="playAgain()" type="button" class="btn btn-play">
            Play Again
          </button>
        </span>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "finalResult",
  mounted() {
    localStorage.removeItem("finalResult");
  },
  data() {
    return {
      finalResult: localStorage.getItem("finalResult"),

      flavorList: [
        { id: "1", name: "Banana" },
        { id: "2", name: "Birthday Cake" },
        { id: "3", name: "Blueberry" },
        { id: "4", name: "Cantaloupe" },
        { id: "5", name: "Cheesecake" },
        { id: "6", name: "Cherry Lemonade" },
        { id: "7", name: "Cherry Limeade" },
        { id: "8", name: "Chocolate" },
        { id: "9", name: "Chocolate Chip Cheesecake" },
        { id: "10", name: "Chocolate Chocolate Chip" },
        { id: "11", name: "Chocolate Peanut Butter" },
        { id: "12", name: "Coconut Cream" },
        { id: "13", name: "Cookie Dough" },
        { id: "14", name: "Cookies N Cream" },
        { id: "15", name: "Florida Orange" },
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
  methods: {
    playAgain() {
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>



