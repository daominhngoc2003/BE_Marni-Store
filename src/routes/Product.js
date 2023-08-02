import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductByCategory,
  getProductById,
  getProductBySlug,
  getall,
  updateProduct,
} from "../controller/Product";
import { authenticate } from "../middleware/Authenticate";
import { authorization } from "../middleware/Authorization";
const Router = express.Router();
Router.get("/products", getall);
Router.get("/products/:id", getProductById);
Router.get("/product/:slug/:id", getProductBySlug);
Router.delete("/products/:id", authorization, authenticate, deleteProduct);
Router.put("/products/:id", authorization, authenticate, updateProduct);
Router.post("/products", authorization, authenticate, createProduct);
Router.get("/products/categoryId/:id", getProductByCategory);
export default Router;
