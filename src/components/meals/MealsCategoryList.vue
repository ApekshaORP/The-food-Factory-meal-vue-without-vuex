<template>
  <div>
    <ul>
      <li
        v-for="category in categoryList"
        v-bind:key="category.idCategory"
        :class="categoryname === category.strCategory ? 'activeClass' : ''"
      >
        <div class="category-img" v-on:click="List(category.strCategory)">
          <img :src="category.strCategoryThumb" />
          <strong class="category-name"> {{ category.strCategory }}</strong>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getMealCategory } from "../../services/mealsApi";

export default {
  name: "CategoryList",
  data() {
    return {
      categoryList: [],
      categoryname: "Dessert",
    };
  },
  mounted() {
    getMealCategory().then(
      (response) => (this.categoryList = response.categories)
    );
  },
  methods: {
    List: function (data) {
      this.categoryname = data;
      this.$emit("Categoryname", data);
    },
  },
};
</script>

<style>
.category-img {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  cursor: pointer;
}
.activeClass {
  background-color: #17a2b8 
}
.category-img img {
  width: 5rem;
}
ul {
  list-style-type: none;
}
.category-name {
  margin-top: 12px;
}
</style>