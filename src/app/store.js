import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/recipeList/categoriesSlice";
import recipesReducer from "../features/recipeList/recipesSlice";
import recipeDetailsReducer from "../features/recipeDetails/recipeDetailsSlice";
import loginReducer from "../features/login/loginSlice";

export default configureStore({
  reducer: {
    login: loginReducer,
    categories: categoriesReducer,
    recipes: recipesReducer,
    recipeDetails: recipeDetailsReducer,
  },
});
