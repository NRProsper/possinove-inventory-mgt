import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { LogService } from '../log/log.service';
import { EventLog } from '../log/entities/eventlog.entity';
import { Category } from '../category/entities/category.entity';
import { ProductSubscriber } from '../subscribers/product.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Product, EventLog, Category])],
  controllers: [ProductController],
  providers: [ProductService, LogService],
})
export class ProductModule {}
