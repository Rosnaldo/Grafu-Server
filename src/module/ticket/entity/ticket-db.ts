import { Ticket as TicketPrisma } from '@prisma/client'
import { IEventDb } from 'src/module/event/entity/event-db'
import { IUserDb } from 'src/module/user/entity/user-db'

export interface ITicketDb extends TicketPrisma {
  id: string
  customerId: string
  Customer?: IUserDb
  EventId: string
  Event?: IEventDb
  createdAt: Date
  updatedAt: Date
}
