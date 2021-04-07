"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
var express_1 = require("express");
var CreateCategoryService_1 = require("../modules/cars/services/CreateCategoryService");
var categoriesRepository_1 = require("../modules/cars/repositories/categoriesRepository");
var categoriesRoutes = express_1.Router();
exports.categoriesRoutes = categoriesRoutes;
var categoriesRepository = new categoriesRepository_1.CategoriesRepository();
categoriesRoutes.post('/categories', function (req, res) {
    var _a = req.body, name = _a.name, description = _a.description;
    var createCategoryService = new CreateCategoryService_1.CreateCategoryService(categoriesRepository);
    createCategoryService.execute({ name: name, description: description });
    return res.status(201).json({ message: 'Categories created sucess!' });
});
categoriesRoutes.get('/categories', function (req, res) {
    var all = categoriesRepository.list();
    return res.json(all);
});
