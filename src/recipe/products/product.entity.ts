import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne, OneToMany } from 'typeorm';
import { Ingredient } from '../ingredients/ingredient.entity';

/* eslint-disable prettier/prettier */
@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  unit: 'kg' | 'g' | 'tsp' | 'sp' | 'pinch' | 'ml' | 'l' | 'item';

  @OneToMany(() => Ingredient, (ingredient: Ingredient) => ingredient.product, { onDelete: 'CASCADE' })
  ingredients: Ingredient[];
}
