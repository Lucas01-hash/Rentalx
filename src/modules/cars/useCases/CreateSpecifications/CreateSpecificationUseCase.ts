import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}
  execute({ name, description }: IRequest): void {
    const SpecificationAlreadyExists = this.specificationsRepository.findByName(
      name
    );

    if (SpecificationAlreadyExists) {
      throw new Error("Especification all ready Exists");
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
