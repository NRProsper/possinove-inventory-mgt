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
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('HOSTNAME'),
        port: configService.get<number>('PORT'),
        username: configService.get<string>('USERNAME'),
        password: configService.get<string>('PASSWORD'),
        database: configService.get<string>('DATABASE'),
        entities: [Product, Category, EventLog],
        subscribers: [ProductSubscriber],
        synchronize: true //for dev env only
      })
    }),
    TypeOrmModule.forFeature([Category, Product]),
    ProductModule, CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService, SeedService],
})
export class AppModule {}
