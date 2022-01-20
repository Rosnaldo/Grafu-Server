import { Module } from '@nestjs/common'
import { PrismaService } from 'src/helper/mongodb'
import { EventFindByIdController } from './controller/find-by-id.controller'
import { EventFindOneRepository } from './repository/find-one.repository'

@Module({
  imports: [],
  controllers: [EventFindByIdController],
  providers: [PrismaService, EventFindOneRepository],
})
export class EventModule {}
