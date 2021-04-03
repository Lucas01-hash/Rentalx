"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const categoriesRepository_1 = require("../repositories/categoriesRepository");
const categoriesRoutes = express_1.Router();
exports.categoriesRoutes = categoriesRoutes;
const categoriesRepository = new categoriesRepository_1.CategoriesRepository();
categoriesRoutes.post('/categories', (req, res) => {
    const { name, description } = req.body;
    categoriesRepository.create({ name, description });
    return res.status(201).json({ message: 'Categories created sucess!' });
});
categoriesRoutes.get('categories', (req, res) => {
    const all = categoriesRepository.list();
    return res.json(all);
});
