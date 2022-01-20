import { INVITE_STATUS, Ticket as TicketPrisma } from '@prisma/client'
import { IEventDb } from 'src/module/event/entity/event-db'
import { IUserDb } from 'src/module/user/entity/user-db'

export interface ITicketDb extends TicketPrisma {
  id: string
  Customer?: IUserDb
  customerId: string
  Event?: IEventDb
  eventId: string
  status: INVITE_STATUS
  createdAt: Date
  updatedAt: Date
}
