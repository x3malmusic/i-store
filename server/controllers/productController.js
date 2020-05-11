import products from "../database/products";
import categories from "../database/categories";
import { asyncHandler } from "../middleware/async";

export const getProducts = asyncHandler((req, res, next) => {
  res.json(products);
});

export const getCategories = asyncHandler((req, res, next) => {
  res.json(categories);
});
