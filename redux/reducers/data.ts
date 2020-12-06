import { DATA_ACTIONS } from "./../actions/actionTypes";
const initStoreData = {
  products: [],
  productsById: {},
  categories: [],
  categoriesById: {},
};

export const dataReducer = (state = initStoreData, action) => {
  switch (action.type) {
    case DATA_ACTIONS.FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    case DATA_ACTIONS.FETCH_CATEGORIES:
      return { ...state, categories: action.payload };
    default:
      return state;
  }
};
