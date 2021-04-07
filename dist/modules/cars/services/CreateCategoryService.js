"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryService = void 0;
var CreateCategoryService = /** @class */ (function () {
    function CreateCategoryService(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    CreateCategoryService.prototype.execute = function (_a) {
        var name = _a.name, description = _a.description;
        var categoryAlreadyExists = this.categoriesRepository.findByName(name);
        if (categoryAlreadyExists) {
            throw new Error("Categories already exists !");
        }
        this.categoriesRepository.create({ name: name, description: description });
    };
    return CreateCategoryService;
}());
exports.CreateCategoryService = CreateCategoryService;
