import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private productRepository: Repository<Product>) {}

  async create(product: CreateProductDTO): Promise<Product> {
    // const newProduct = new Product();
    // Object.assign(newProduct, product);
    const newProduct = this.productRepository.create(product);
    return this.productRepository.save(newProduct);
  }

  read(): Promise<Product[]> {
    return this.productRepository.find();
  }

  // getAllForDishId(dishId: number): Product[] {
  //   return this.products.filter((p: Product) => p.dishId === dishId);
  // }

  async getOneById(productId: number): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id: productId } });
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async update(product: UpdateProductDto) {
    await this.getOneById(product.id);

    return this.productRepository.update(product.id, product);
  }

  async delete(productId: number): Promise<Product> {
    const productToRemove = await this.getOneById(productId);

    return this.productRepository.remove(productToRemove);
  }
}
