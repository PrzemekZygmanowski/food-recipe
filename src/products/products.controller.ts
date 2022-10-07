import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './Products';

@Controller('products')
export class ProductsController {
  trackId = 1;
  products: Product[] = [];

  @Post('')
  createOne(@Body() product: CreateProductDTO) {
    const newProduct: Product = {
      id: this.trackId++,
      ...product,
    };
    this.products.push(newProduct);
    return product;
  }

  @Get()
  readAll() {
    return this.products;
  }

  @Put()
  updateOne(@Body() product: UpdateProductDto) {
    // eslint-disable-next-line prettier/prettier
    const productToUpdate = this.products.find((p: Product) => p.id === Number(product.id));
    if (!productToUpdate) {
      throw new NotFoundException('Product not found');
    } else {
      Object.assign(productToUpdate, product);
    }
    return productToUpdate;
  }

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) productId: number) {
    // eslint-disable-next-line prettier/prettier
    const productRemove = this.products.find((p: Product) => p.id === productId);
    console.log(productRemove);

    if (!productRemove) {
      throw new NotFoundException('product not found');
    }
    // eslint-disable-next-line prettier/prettier
    this.products = this.products.filter((p: Product) => p.id !== productId);
    return { productId };
  }
}
