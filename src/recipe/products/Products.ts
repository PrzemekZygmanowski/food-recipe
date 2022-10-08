import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

/* eslint-disable prettier/prettier */
@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  unit: 'kg' | 'g' | 'tsp' | 'sp' | 'pinch' | 'ml' | 'l' | 'item';

  @Column({ type: 'decimal' })
  amount: number;

  @Column({ type: 'int' })
  dishId: number;
}
