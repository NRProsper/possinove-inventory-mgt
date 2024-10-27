import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { Product } from './product/entities/product.entity';
import { Category } from './category/entities/category.entity';
import { CategoryModule } from './category/category.module';
import { EventLog } from './log/entities/eventlog.entity';
import { ProductSubscriber } from './subscribers/product.subscriber';
import { SeedService } from './seed.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [Product, Category, EventLog],
      subscribers: [ProductSubscriber],
      synchronize: true //for dev env only
    }),
    TypeOrmModule.forFeature([Category, Product]),
    ProductModule, CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService, SeedService],
})
export class AppModule {}
