import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Category } from '../../category/entities/category.entity';

@Entity()
@Unique(['name'])
export class Product {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @ManyToOne(() => Category, category => category.products)
  category: Category

}
