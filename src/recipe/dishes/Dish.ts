import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';
import { Product } from '../products/Products';

/* eslint-disable prettier/prettier */
@Entity()
export class Dish extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'decimal' })
  servings: number;

  @Column({ nullable: true, type: 'text' })
  description?: string;

  @OneToMany(() => Product, (product: Product) => product.dish)
  products: Product[];
}
