
import { Router } from 'express';
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';
import { CategoriesRepository } from '../modules/cars/repositories/categoriesRepository';


const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();


categoriesRoutes.post('/categories', (req, res) => {
  const { name, description } = req.body

  const createCategoryService = new CreateCategoryService(categoriesRepository)

  createCategoryService.execute({ name, description })

  return res.status(201).json({ message: 'Categories created sucess!' });

})

categoriesRoutes.get('/categories', (req, res) => {
  const all = categoriesRepository.list();

  return res.json(all);
})

export { categoriesRoutes };
