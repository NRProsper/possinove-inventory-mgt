import { DataSource, EntitySubscriberInterface, EventSubscriber, InsertEvent, RemoveEvent, UpdateEvent } from 'typeorm';
import { Product } from '../product/entities/product.entity';
import { Injectable, Logger } from '@nestjs/common';
import { EventLog } from '../log/entities/eventlog.entity';

@EventSubscriber()
@Injectable()
export class  ProductSubscriber implements EntitySubscriberInterface<Product> {
  private readonly logger = new Logger(ProductSubscriber.name, {timestamp: true});
  private dataSource: DataSource;
  constructor(
    dataSource: DataSource
  ) {
    this.listenTo();
    this.dataSource = dataSource;
  }

  listenTo(): Function | string {
    return Product;
  }

  async afterInsert(event: InsertEvent<Product>): Promise<void> {
    this.logger.log(`Action: added, Product ID: ${event.entity.id}, Details: Product added`);
  }

  async afterUpdate(event: UpdateEvent<Product>): Promise<void> {
    this.logger.log(`Action: added, Product ID: ${event.entity.id}, Details: Product updated`);

  }

  async afterRemove(event: RemoveEvent<Product>): Promise<void> {
    this.logger.log(`Action: added, Product ID: ${event.entity.id}, Details: Product updated`);

  }

  private async saveLog(eventLog: EventLog) {
    const logRepository = this.dataSource.getRepository(EventLog);
    await logRepository.save(eventLog);
  }

}