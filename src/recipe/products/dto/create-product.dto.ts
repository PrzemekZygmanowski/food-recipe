/* eslint-disable prettier/prettier */
import { OmitType } from '@nestjs/mapped-types';
import { UpdateProductDto } from './update-product.dto';

export class CreateProductDTO extends OmitType(UpdateProductDto, ['id'] as const) {}
