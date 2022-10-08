import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductService } from '../products/product.service';
import { Dish } from './Dish';
import { CreateDishDTO } from './dto/create-dish.dto';
import { UpdateDishDTO } from './dto/update-dish.dto';

@Injectable()
export class DishService {
  constructor(private productService: ProductService) {}

  create(dish: CreateDishDTO): Promise<Dish> {
    const newDish = new Dish();
    Object.assign(newDish, dish);

    return newDish.save();
  }

  read(): Promise<Dish[]> {
    return Dish.find({ relations: ['products'] });
  }

  async getOneById(id: number): Promise<Dish> {
    const dish = await Dish.findOne({ where: { id: id }, relations: ['products'] });
    if (!dish) {
      throw new NotFoundException('Dish not found');
    }
    return dish;
  }

  async update(dish: UpdateDishDTO): Promise<Dish> {
    const dishToUpdate = await this.getOneById(dish.id);
    Object.assign(dishToUpdate, dish);

    return dishToUpdate.save();
  }

  async delete(dishId: number): Promise<Dish> {
    const dishToRemove = await this.getOneById(dishId);

    return dishToRemove.remove();
  }
}
