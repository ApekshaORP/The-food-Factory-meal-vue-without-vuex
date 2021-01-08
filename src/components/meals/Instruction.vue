<template>
  <b-col>
    <hr />
    <div class="text-left">
      <strong>Instructions</strong>
    </div>
    <b-card-text class="text-left pb-5">{{mealDetails &&mealDetails[0]&&mealDetails[0].strInstructions}}</b-card-text>
  </b-col>
</template>
<script>
export default {
  name: 'Instructions',
  props:{
    mealDetails:Array
    } ,
    data(){
    return{
      mealDetail:this.mealDetails &&this.mealDetails[0]
    }
  },
};
</script>
