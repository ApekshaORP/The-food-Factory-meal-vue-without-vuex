<template>
  <b-col>
    <div class="text-left">
      <strong>Measure</strong>
    </div>
    <b-card-text class="text-left">
      <template v-for="(index) in 20">
        <li class="no-list-style" v-if="getMeasure(index)" :key="index">
          <b-icon icon="vinyl-fill" variant="info"></b-icon>
          {{ getMeasure(index) }}
        </li>
      </template>
    </b-card-text>
  </b-col>
</template>
<script>
export default {
  name: 'Measurement',
    props:{
    mealDetails:Array
    } ,
  methods: {
    getMeasure(index) {
      const measureKey = `strMeasure${index}`;
      const measure = this.mealDetails &&this.mealDetails[0]&&this.mealDetails[0][measureKey];
      return measure && measure.trim();
    },
  },
};
</script>
<style scoped>
.no-list-style {
  list-style-type: none;
}
</style>
