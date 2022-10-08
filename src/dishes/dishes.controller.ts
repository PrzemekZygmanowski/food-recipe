import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Dish } from './Dish';
import { UpdateDishDTO } from './dto/update-dish.dto';
import { CreateDishDTO } from './dto/create-dish.dto';
import { DishService } from './dish.service';

@Controller('dishes')
export class DishesController {
  private dishService;

  constructor(dishService: DishService) {
    this.dishService = dishService;
  }

  @Post('')
  createOne(@Body() dish: CreateDishDTO) {
    return this.dishService.create(dish);
  }

  @Get()
  readAll() {
    return this.dishService.read();
  }

  @Get(':id')
  readOne(@Param('id', ParseIntPipe) dishId: number) {
    return this.dishService.getOneById(dishId);
  }

  @Put()
  updateOne(@Body() dish: UpdateDishDTO) {
    return this.dishService.update(dish);
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) dishId: number) {
    return this.dishService.delete(dishId);
  }
}
