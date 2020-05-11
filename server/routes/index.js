import route from "express-promise-router";
import { getProducts, getCategories } from "../controllers/productController";

const router = route();

router.get("/products", getProducts);
router.get("/categories", getCategories);

export default router;
