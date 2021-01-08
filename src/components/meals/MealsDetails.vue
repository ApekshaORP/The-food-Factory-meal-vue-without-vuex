<template>
  <b-card class="overflow-hidden" style="max-width: 1250px">
    <b-row no-gutters>
      <b-col md="6">
        <b-card
          >       
          <strong>{{ mealList && mealList[0] && mealList[0].strMeal }}</strong>
              <hr />
          <b-row >
            <b-col md="6">
              <img
                class="menu_icon"
                alt="Vue logo"
                src="../../assets/menuIcon.jpg"
              />    
              {{ mealList && mealList[0] &&mealList[0].strCategory }}
            </b-col>
            <b-col md="6">
              <b-icon icon="geo-alt" variant="dark"></b-icon>
              {{ mealList &&mealList[0] && mealList[0].strArea }}
            </b-col>
          </b-row >
        </b-card>
        <b-card-img
          :src="mealList && mealList[0] && mealList[0].strMealThumb"
          alt="Image"
          class="rounded-0"
        ></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card>
          <b-row>
            <ingredients v-bind:mealDetails="mealList && mealList" />
            <measure v-bind:mealDetails="mealList && mealList" />
          </b-row>
          <b-row>
            <instructions v-bind:mealDetails="mealList && mealList" />
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
import Ingredient from "./MealsIngredient";
import Measure from "./Measures";
import Instructions from "./Instruction";
export default {
  name: "MealsDetail",
  props: {
    mealList: Array,
  },
  components: {
    ingredients: Ingredient,
    measure: Measure,
    instructions: Instructions,
  },
};
</script>
<style scoped>
.menu_icon {
    width: 38px;
    margin-top: -7px;
    margin-right: -11px;}
</style>