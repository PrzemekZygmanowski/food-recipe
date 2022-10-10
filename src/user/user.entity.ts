import { Dish } from 'src/recipe/dishes/dish.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';

/* eslint-disable prettier/prettier */
@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar' })
  userName: string;

  @OneToMany(() => Dish, (dish: Dish) => dish.user)
  dishes: Dish[];

  //   @Column({ type: 'decimal' })
  //   servings: number;
  //   @Column({ nullable: true, type: 'text' })
  //   description?: string;
  //   @OneToMany(() => Product, (product: Product) => product.dish)
  //   products: Product[];
}
