<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <img class="logo" alt="Vue logo" src="../../assets/mealLogo.png" />
      <b>THE FOOD COURT</b>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <div>
          <b-sidebar id="sidebar-right" title="Categories" right shadow>
            <div class="px-3 py-2">
              <category-list @Categoryname="getCategoryList" />
            </div>
          </b-sidebar>
        </div>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search Recipe"
              list="my-list-id"
              v-model="inputValue"
              @change="onInputChange"
              @input="onInputChange"
            >
            </b-form-input>
            <b-button
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
              v-on:click.stop.prevent="search"
              >Search</b-button
            >
            <datalist id="my-list-id">
              <option v-for="(meal, index) in meals" :key="index">
                {{ meal.strMeal }}
              </option>
            </datalist>
          </b-nav-form>
        </b-navbar-nav>
        <div class="category-list" v-b-toggle.sidebar-right>Food Category</div>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import CategoryList from "../meals/MealsCategoryList";
import { getMealByName } from "../../services/mealsApi";

export default {
  name: "NavBar",
  data() {
    return {
      inputValue: "",
      meals: [],
    };
  },
  methods: {
    onInputChange: function () {
      if (this.inputValue.length > 0) {
        getMealByName(this.inputValue).then(
          (response) => (this.meals = response.meals)
        );
      }
    },
    getCategoryList: function (category) {
      this.$emit("CategoryChange", category);
    },
    search: function () {
      this.$emit("onInputChange", this.inputValue);
    },
  },
  components: {
    "category-list": CategoryList,
  },
};
</script>
<style scoped>
.logo {
  height: 3rem;
}
.btn{
margin-right: 30px;
}
.category-list {
  display: flex;
  align-items: initial;
  /* padding-left: 20px; */
}
</style>