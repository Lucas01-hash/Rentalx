import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationRepository";
import { createSpecificationsController } from "../modules/cars/useCases/CreateSpecifications";

const specificationRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationRoutes.post("/", (request, response) => {
  return createSpecificationsController.handle(request, response);
});

export { specificationRoutes };
