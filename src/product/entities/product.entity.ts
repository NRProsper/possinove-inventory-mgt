import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
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

  @ManyToOne(() => Category, category => category.products, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({name: 'categoryId'})
  category: Category;

  @Column()
  categoryId: number;

}
