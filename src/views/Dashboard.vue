<template>
  <div>
    <header-component
      @onInputChange="inputChange"
      @CategoryChange="OnCategoryChange"
    />
    <div  v-if="mealList.length >0">
    <div class="main_container">
      <div class="container">
        <meals-details v-bind:mealList="mealList" />
        <meal-card
          v-bind:categoryName="category"
          v-bind:categoryList="categoryList"
          @onCardClick="getCardDetails"
        />
      </div>
    </div>
   
  </div>
  <div v-else>
    <spinner />
  </div>
   </div>
</template>
<script>
import MealsDetail from "../components/meals/MealsDetails";
import Spinner from "../components/spinner/Spinner";
import {
  getRandomMeal,
  getMealByName,
  getMealCategoryByName,
} from "../services/mealsApi";
import HeaderComponent from "../components/header/Header";
import MealsCard from "../components/meals/MealsCard";

export default {
  name: "MealsDetail",
  data() {
    return {
      mealList: [],
      spinner: true,
      inputValue: "",
      category: "Dessert",
      categoryList: [],
    };
  },
  mounted() {
    getRandomMeal().then(
      (response) => (this.mealList = response.meals),
      (this.spinner = false)
    );
    getMealCategoryByName(this.category).then(
      (response) => (this.categoryList = response.meals)
    );
  },
  components: {
    "meals-details": MealsDetail,
    "spinner": Spinner,
    "header-component": HeaderComponent,
    "meal-card": MealsCard,
  },
  methods: {
    getCardDetails: function (meal) {
      this.mealList = meal;
    },
    OnCategoryChange: function (category) {
      getMealCategoryByName(category).then(
        (response) => (this.categoryList = response.meals),
        (this.category = category)
      );
    },
    inputChange: function (value) {
      this.mealList = value;
      if (value.length > 0) {
        getMealByName(value).then(
          (response) => (this.mealList = response.meals),
          (this.spinner = false)
        );
      }
    },
  },
};
</script>
<style scoped>
.main_container {
  display: flex;
  padding: 1rem;
  flex-wrap: wrap;
  /* background-image: url('../assets/food-background.jpg'); */
  background-color: rgb(230, 243, 243);
  height: 100%;
}
.container {
  margin-top: 2rem;
}
</style>