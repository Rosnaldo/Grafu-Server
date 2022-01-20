import { Module } from '@nestjs/common'
import { PrismaService } from 'src/helper/mongodb'

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService],
})
export class TicketModule {}
