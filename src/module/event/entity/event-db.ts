import { Event as EventPrisma } from '@prisma/client'
import { IUserDb } from 'src/module/user/entity/user-db'

export interface IEventDb extends EventPrisma {
  id: string
  authorId: string
  Author?: IUserDb
  name: string
  description: string
  price: number
  portrait: string
  photos: string[]
  createdAt: Date
  updatedAt: Date
}
