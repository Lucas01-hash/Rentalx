import { SpecificationsRepository } from "../../repositories/SpecificationRepository";
import { CreateSpecificationsController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);
const createSpecificationsController = new CreateSpecificationsController(
  createSpecificationUseCase
);

export { createSpecificationsController };
