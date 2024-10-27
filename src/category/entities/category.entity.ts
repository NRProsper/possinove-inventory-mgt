import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Product } from '../../product/entities/product.entity';

@Entity()
@Unique(['name'])
export class Category {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Product, product => product.category, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  products: Product[]

}