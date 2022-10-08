import { Injectable, NotFoundException, forwardRef, Inject } from '@nestjs/common';
import { DishService } from '../dishes/dish.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './Products';

@Injectable()
export class ProductService {
  private dishService: DishService;

  constructor(@Inject(forwardRef(() => DishService)) dishService: DishService) {
    this.dishService = dishService;
  }

  async create(product: CreateProductDTO): Promise<Product> {
    const newProduct = new Product();
    Object.assign(newProduct, product);
    const dish = await this.dishService.getOneById(product.dishId);
    newProduct.dish = dish;
    return newProduct.save();
  }

  read(): Promise<Product[]> {
    return Product.find();
  }

  // getAllForDishId(dishId: number): Product[] {
  //   return this.products.filter((p: Product) => p.dishId === dishId);
  // }

  async getOneById(productId: number): Promise<Product> {
    const product = await Product.findOne({ where: { id: productId } });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async update(product: UpdateProductDto): Promise<Product> {
    // eslint-disable-next-line prettier/prettier
    const productToUpdate = await this.getOneById(product.id);
    Object.assign(productToUpdate, product);

    return productToUpdate.save();
  }

  async delete(productId: number): Promise<Product> {
    this.getOneById(productId);
    const productToRemove = await this.getOneById(productId);

    return productToRemove.remove();
  }
}
