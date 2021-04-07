import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationsController {
  constructor(
    private createSpecificationsUseCase: CreateSpecificationUseCase
  ) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createSpecificationsUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationsController };
