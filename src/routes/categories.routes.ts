import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/categoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/CreateCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/categories", (req, res) => {
  const all = categoriesRepository.list();

  return res.json(all);
});

export { categoriesRoutes };
