import { createSelector } from "reselect";

const selectData = (state) => state.data;

export const selectProducts = createSelector(
  [selectData],
  (data) => data.products
);

export const selectCategories = createSelector(
  [selectData],
  (data) => data.categories
);

export const selectCategoryByAlias = (alias) =>
  createSelector([selectCategories], (categories) =>
    categories.find((category) => category.alias === alias)
  );

export const selectProductsByCategory = (categoryId) =>
  createSelector([selectProducts], (products) =>
    products.filter((product) => product.categoryId === categoryId)
  );
