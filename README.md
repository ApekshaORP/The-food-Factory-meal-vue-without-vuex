# food_factory Application with VueJS

A single‐page web application which allows users to browse Recipes. It uses the following open api: https://www.themealdb.com/api.php
On the Dashboard, it loads random meals. However you can search any meals, and you will get details regarding meals.
When the user selects a meal from the search results, the details of that meal show:
• Name of the dish
• Image of the dish
• A List of ingredients including measures
• Instructions how to prepare the dish

## Installations
## Vue CLI
```
This has some advantages.
Please refer below urls

https://cli.vuejs.org/

https://cli.vuejs.org/guide/

```
## Installation of vue/cli
Note: You need administrator privileges to execute these unless npm was installed on your system through a Node.js version manager.

```
npm install -g @vue/cli

```
Note: You can check you have the right version with this command:
vue --version

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Project Guidelines ------------

1) Method Naming Convention, 
   variable, object declaration : camelCase
   Example : mealDetails, searchMeal() etc..

2) Folder Naming Convention, File Naming Convention: kabab-case
   Example : header, client-api.js
   Components in vue : PascalCase
   Example : Header.vue 

### Project dependencies and devDependencies ------------
1. axios:
   Promise based HTTP client for the browser.
   Please refer below url for more details:
   https://www.npmjs.com/package/axios   

2. bootstrap and bootstrap-vue:
   With BootstrapVue we can build responsive, mobile-first, and ARIA accessible projects on the web using Vue.js and the world's most popular front-end CSS library — Bootstrap v4.
   Please refer below url for more details:
   https://bootstrap-vue.js.org/docs
