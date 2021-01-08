<template>
  <div class="card">
    <h3>
      <b>{{ categoryName }}</b>
    </h3>
    <hr />
    <div class="main-container">
      <div
        v-for="category in categoryList"
        v-bind:key="category.idMeal"
        class="category"
      >
        <b-card-group class="CardData">
          <b-card
            :img-src="category.strMealThumb"
            img-alt="Image"
            img-top
            style="max-width: 10rem"
            class="mb-2"
            @click="onClickCard(category.idMeal)"
          >
            <template #footer>
              <small class="text-muted"
                ><strong>{{ category.strMeal }}</strong></small
             >
            </template>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
import { getMealById } from "../../services/mealsApi";

export default {
  name: "MealCard",
  data() {
    return {
      // categoryList:[],
    };
  },
  props: {
    categoryName: String,
    categoryList: Array,
  },
  methods: {
    onClickCard: function (Id) {
      document.documentElement.scrollTop = 0; 
      // document.body.scrollTop = 0; // For Safari
      window.scrollTo({ top: 0, behavior: "smooth" });
      getMealById(Id).then((response) =>
        this.$emit("onCardClick", response.meals)
      );
    },
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
  padding: 0.5rem;
  justify-content: center;
}
.CardData {
  cursor: pointer;
}
.card-body {
  padding: 0;
}
.card {
  margin-top: 20px;
}
.card h3 {
  margin-top: 20px;
}
.category {
  margin: 10px;
}
</style>