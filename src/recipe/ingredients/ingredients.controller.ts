import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { IngredientRepository } from './ingredient.repository';
import { IngredientService } from './ingredient.service';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientService: IngredientService) {}

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.ingredientService.findOne(id);
  }
}
