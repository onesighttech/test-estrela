import { createSlice } from "@reduxjs/toolkit";

export const recipeDetailsSlice = createSlice({
  name: "recipeDetails",
  initialState: {
    value: null,
  },
  reducers: {
    saveRecipeDetails: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { saveRecipeDetails } = recipeDetailsSlice.actions;

export const saveRecipeDetailsAsync = (id) => (dispatch) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(
    (response) => {
      response.json().then((data) => {
        const meal = data.meals[0];
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
          let name = meal[`strIngredient${i}`];
          let measure = meal[`strMeasure${i}`];
          if (name && name !== "" && measure && measure !== "")
            ingredients.push({ name, measure });
        }
        const recipeDetails = {
          id: meal.idMeal,
          name: meal.strMeal,
          category: meal.strCategory,
          thumb: meal.strMealThumb,
          youtube: meal.strYoutube,
          instructions: meal.strInstructions,
          ingredients,
        };

        dispatch(saveRecipeDetails(recipeDetails));
      });
    }
  );
};

export const selectRecipeDetails = (state) => state.recipeDetails.value;

export default recipeDetailsSlice.reducer;
