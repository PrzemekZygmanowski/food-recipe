import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Dish } from './Dish';
import { UpdateDishDTO } from './dto/update-dish.dto';
import { CreateDishDTO } from './dto/create-dish.dto';

@Controller('dishes')
export class DishesController {
  trackId = 1;
  dishes: Dish[] = [
    {
      id: this.trackId++,
      name: 'overnight oats',
      servings: 2,
      description: 'yummy breakfast',
    },
  ];
  @Post('')
  createOne(@Body() dish: CreateDishDTO) {
    const newDish: Dish = {
      id: this.trackId,
      ...dish,
    }
    this.dishes.push(newDish);
    return dish;
  }

  @Get()
  readAll() {
    return this.dishes;
  }

  @Put()
  updateOne(@Body() dish: UpdateDishDTO) {
    const dishToUpdate = this.dishes.find(
      (d: Dish) => d.id === Number(dish.id),
    );
    if (dishToUpdate) Object.assign(dishToUpdate, dish);
    return dishToUpdate;
  }

  @Delete(':id')
  deleteOne(@Param('id') dishId: string) {
    this.dishes = this.dishes.filter((d: Dish) => d.id !== Number(dishId));
    return { dishId };
  }
}
