
<template>
  <b-col>
    <div class="text-left">
      <strong>Ingredient</strong>
    </div>
    <b-card-text class="text-left">
      <template v-for="(index) in 20">
        <li class="no-list-style" v-if="getIngredient(index)" :key="index">
          <b-icon icon="vinyl-fill" variant="info"></b-icon>
          {{ getIngredient(index) }}
        </li>
      </template>
    </b-card-text>
  </b-col>
</template>
<script>
export default {
  name: 'Ingredient',
  props:{
    mealDetails:Array
    } ,
   methods: {
    getIngredient(index) {
      const ingredientKey = `strIngredient${index}`;
      const ingredient =this.mealDetails &&this.mealDetails[0]&&this.mealDetails[0][ingredientKey];
      return ingredient && ingredient.trim();
    },
  },
};
</script>
<style scoped>
.no-list-style {
  list-style-type: none;
}
</style>
