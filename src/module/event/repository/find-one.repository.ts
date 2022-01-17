import { Injectable } from '@nestjs/common'
import { Prisma, Event } from '@prisma/client'
import { PrismaService } from 'src/helper/mongodb'

@Injectable()
export class EventFindOneRepository {
  constructor(private readonly prisma: PrismaService) {}

  async execute(eventWhereUniqueInput: Prisma.EventWhereUniqueInput): Promise<Event | null> {
    return this.prisma.event.findUnique({
      where: eventWhereUniqueInput,
    })
  }
}
