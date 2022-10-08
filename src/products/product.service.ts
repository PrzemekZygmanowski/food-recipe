import { Injectable, NotFoundException, forwardRef, Inject } from '@nestjs/common';
import { DishService } from 'src/dishes/dish.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './Products';

@Injectable()
export class ProductService {
  private trackId = 1;
  private products: Product[] = [{ id: this.trackId++, name: 'Oats', amount: 100, unit: 'g', dishId: 1 }];
  private dishService: DishService;

  constructor(@Inject(forwardRef(() => DishService)) dishService: DishService) {
    this.dishService = dishService;
  }

  create(product: CreateProductDTO): Product {
    const newProduct: Product = {
      id: this.trackId++,
      ...product,
    };
    this.dishService.getOneById(product.dishId);
    this.products.push(newProduct);
    return newProduct;
  }

  read(): readonly Product[] {
    return this.products;
  }

  getAllForDishId(dishId: number): Product[] {
    return this.products.filter((p: Product) => p.dishId === dishId);
  }

  getOneById(id: number) {
    const product = this.products.find((p: Product) => p.id === id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  update(product: UpdateProductDto): Product {
    // eslint-disable-next-line prettier/prettier
    const productToUpdate = this.getOneById(product.id);
    Object.assign(productToUpdate, product);

    return productToUpdate;
  }

  delete(productId: number) {
    this.getOneById(productId);
    // eslint-disable-next-line prettier/prettier
    this.products = this.products.filter((p: Product) => p.id !== productId);
    return { productId };
  }
}
