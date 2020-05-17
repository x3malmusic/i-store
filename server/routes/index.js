import route from "express-promise-router";
import {
  getProducts,
  getCategories,
  buyNotification,
} from "../controllers/productController";

const router = route();

router.get("/products", getProducts);
router.get("/categories", getCategories);
router.post("/buy", buyNotification);

export default router;
