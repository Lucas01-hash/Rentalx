"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const uuid_1 = require("uuid");
class Category {
    constructor() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
}
exports.Category = Category;
