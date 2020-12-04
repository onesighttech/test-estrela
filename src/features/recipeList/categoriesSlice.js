import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "category",
  initialState: {
    value: [],
  },
  reducers: {
    saveCategories: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { saveCategories } = categoriesSlice.actions;

export const saveCategoriesAsync = () => (dispatch) => {
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php").then(
    (response) => {
      response.json().then((data) => {
        const categories = data.categories.map((category) => {
          return {
            value: category.strCategory,
            label: category.strCategory,
          };
        });
        dispatch(saveCategories(categories));
      });
    }
  );
};

export const selectCategories = (state) => state.categories.value;

export default categoriesSlice.reducer;
