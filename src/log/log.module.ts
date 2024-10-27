import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventLog } from './entities/eventlog.entity';
import { LogService } from './log.service';

@Module({
  imports: [TypeOrmModule.forFeature([EventLog])],
  exports: [TypeOrmModule, LogService],
  providers: [LogService],
})
export class LogModule{}
