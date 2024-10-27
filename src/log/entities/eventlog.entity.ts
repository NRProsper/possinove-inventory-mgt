import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EventLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  action: string;

  @Column()
  productId: number;

  @Column()
  details: string;

  @CreateDateColumn()
  timestamp: Date;
}