import { createSlice } from "@reduxjs/toolkit";

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    value: [],
  },
  reducers: {
    saveRecipes: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { saveRecipes } = recipesSlice.actions;

export const saveRecipesAsync = (category) => (dispatch) => {
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  ).then((response) => {
    response.json().then((data) => {
      const meals = data.meals.map((meal) => {
        return {
          name: meal.strMeal,
          thumb: meal.strMealThumb,
          id: meal.idMeal,
        };
      });
      dispatch(saveRecipes(meals));
    });
  });
};

export const selectRecipes = (state) => state.recipes.value;

export default recipesSlice.reducer;
