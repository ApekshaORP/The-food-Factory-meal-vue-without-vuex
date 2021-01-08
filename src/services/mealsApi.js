import slugs from '../common/constant';
import clientApi from './api';

// a request for random meal
export const getRandomMeal = () => clientApi.get(slugs.randomMeal);

// a request for meal category list
export const getMealCategory = () => clientApi.get(slugs.categoryList);

// a request for meal by provided meal name
export const getMealByName = (mealName) => clientApi.get(`${slugs.searchMealByName}${mealName}`);

//filter a meal by category
export const getMealCategoryByName = (categoryName) => clientApi.get(`${slugs.filterByCategory}${categoryName}`);

//get a meal by Id
export const getMealById = (categoryId) => clientApi.get(`${slugs.mealById}${categoryId}`);


