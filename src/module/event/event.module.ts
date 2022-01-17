import { Module } from '@nestjs/common'
import { PrismaService } from 'src/helper/mongodb'
import { EventFindController } from './controller/find.controller'
import { EventFindOneRepository } from './repository/find-one.repository'

@Module({
  imports: [],
  controllers: [EventFindController],
  providers: [PrismaService, EventFindOneRepository],
})
export class EventModule {}
