import { Specification } from "../models/specification";
import {
  ISpecificationRepository,
  ICreateSpecificatioDTO,
} from "./ISpecificationRepository";

class SpecificationsRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }
  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (Specification) => Specification.name === name
    );
    return specification;
  }

  create({ name, description }: ICreateSpecificatioDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }
}

export { SpecificationsRepository };
