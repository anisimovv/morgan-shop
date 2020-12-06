import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchCategories,
} from "../../redux/actions/dataActions";
import {
  selectCategories,
  selectProducts,
} from "../../redux/selectors/products";

export const useFetchShopData = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const categories = useSelector(selectCategories);

  useEffect(() => {
    if (products.length === 0 || categories.length === 0) {
      dispatch(fetchProducts());
      dispatch(fetchCategories());
    }
    console.log(products)
  }, []);

  return { products, categories };
};
