import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './dishes/dish.entity';
import { DishService } from './dishes/dish.service';
import { DishesController } from './dishes/dishes.controller';
import { ProductService } from './products/product.service';
import { Product } from './products/product.entity';
import { ProductsController } from './products/products.controller';
import { IngredientsController } from './ingredients/ingredients.controller';
import { IngredientService } from './ingredients/ingredient.service';
import { Ingredient } from './ingredients/ingredient.entity';
import { IngredientRepository } from './ingredients/ingredient.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Dish, Ingredient, IngredientRepository])],
  controllers: [DishesController, ProductsController, IngredientsController],
  providers: [DishService, ProductService, IngredientService],
})
export class RecipeModule {}
