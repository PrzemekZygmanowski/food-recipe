import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, ManyToOne } from 'typeorm';
import { Dish } from '../dishes/dish.entity';
import { Product } from '../products/product.entity';

/* eslint-disable prettier/prettier */
@Entity()
export class Ingredient extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal' })
  amount: number;

  @ManyToOne(() => Product, (product: Product) => product.ingredients)
  product: Product;

  @ManyToOne(() => Dish, (product: Dish) => product.ingredients)
  dish: Dish;

  //   @Column({ type: 'varchar' })
  //   name: string;

  //   @Column({ type: 'decimal' })
  //   servings: number;

  //   @Column({ nullable: true, type: 'text' })
  //   description?: string;

  //   @OneToMany(() => Product, (product: Product) => product.dish)
  //   products: Product[];

  //   @ManyToOne(() => User, (user: User) => user.dishes, { onDelete: 'CASCADE' })
  //   user: User;

  //   @Column({ type: 'boolean', default: false })
  //   isPublic: number;
}
