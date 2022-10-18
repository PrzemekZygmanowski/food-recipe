import { Injectable, NotFoundException } from '@nestjs/common';
import { Ingredient } from './ingredient.entity';
import { IngredientRepository } from './ingredient.repository';

@Injectable()
export class IngredientService {
  constructor(private readonly ingredientRepository: IngredientRepository) {}

  async findOne(id: number): Promise<Ingredient> {
    const ingredient = await this.ingredientRepository.findById(id);
    if (!ingredient) {
      throw new NotFoundException(`Ingredient with id ${id} not found`);
    }
    return ingredient;
  }
}
