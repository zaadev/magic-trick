<template>
  <!-- Page Header -->
  <header class="header">
    <a href="#" class="location"><span class="icon-map-marker-light"></span></a>
    <div class="logo">
      <a href="#"><img src="images/logo.svg" alt="Rita's" /></a>
    </div>
    <span class="menu-opener">
      <img src="images/arrow-up-from-bracket-solid.svg" class="share-button" />
    </span>
  </header>

  <!-- Main Content -->
  <main class="main">
    <div class="top-section">
      <div class="holder">
        <div class="features-image">
          <h1><img src="images/image1.svg" alt="image-description" /></h1>
        </div>
        <div class="top-section__text">
          <strong
            >We can guess the flavor you’re thinking of in just 6 simple
            questions.</strong
          >
        </div>
        <div class="slide-down">
          <a href="#products-area" class="smooth-scroll"
            ><i class="icon-chevron-down-solid"></i
          ></a>
        </div>
      </div>
    </div>
    <div class="ice-products" id="products-area">
      <h2>
        Stare at your favorite flavor from the list of 63 images below for 2
        seconds,<br />
        then hit <span>start</span>.
      </h2>

      <div class="holder">
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

      <button type="button" v-on:click="startGame()" class="btn btn-start">
        Start
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: "guessNumber",
  methods: {
    startGame() {
      this.$router.push({
        name: "first_step",
      });
    },
  },
  data() {
    return {
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
  created() {
    localStorage.removeItem("finalResult");
  },
};
</script>