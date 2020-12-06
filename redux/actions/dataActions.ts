import { selectProducts } from "../selectors/products";
import { DATA_ACTIONS } from "./actionTypes";

const fetchProductsStart = { type: DATA_ACTIONS.FETCH_PRODUCTS_START };
const fetchProductsSuccess = { type: DATA_ACTIONS.FETCH_PRODUCTS_SUCCESS };
const fetchProductsError = { type: DATA_ACTIONS.FETCH_PRODUCTS_ERROR };

export const fetchProducts = () => async (dispatch, getState) => {
  console.log(getState());

  dispatch(fetchProductsStart);

  const res = await fetch("https://morgan-shop.herokuapp.com/products");
  const data = await res.json();

  const products = data && data.products;

  dispatch({ type: DATA_ACTIONS.FETCH_PRODUCTS, payload: products });
  dispatch(fetchProductsSuccess);
};

const fetchCategoriesStart = { type: DATA_ACTIONS.FETCH_CATEGORIES_START };
const fetchCategoriesSuccess = { type: DATA_ACTIONS.FETCH_CATEGORIES_SUCCESS };
const fetchCategoriesError = { type: DATA_ACTIONS.FETCH_CATEGORIES_ERROR };

export const fetchCategories = () => async (dispatch) => {
  dispatch(fetchCategoriesStart);

  const res = await fetch("https://morgan-shop.herokuapp.com/categories");
  const data = await res.json();

  const categories = data && data.categories;

  dispatch({ type: DATA_ACTIONS.FETCH_CATEGORIES, payload: categories });
  dispatch(fetchCategoriesSuccess);
};
