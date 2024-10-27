import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EventLog } from './entities/eventlog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LogService {
  private readonly logger = new Logger(LogService.name, {timestamp: true});

  constructor(
    @InjectRepository(EventLog)
    private readonly eventLogRepository: Repository<EventLog>
  ) {
    console.log('Logger initialised');
  }

  async logEvent(action: string, productId: number,details: string): Promise<void> {
    const logEntry = this.eventLogRepository.create({
      action,
      productId,
      details
    })

    await this.eventLogRepository.save(logEntry);

    this.logger.log(`Action: ${action}, Product ID: ${productId}, Details: ${details}`);

  }

}