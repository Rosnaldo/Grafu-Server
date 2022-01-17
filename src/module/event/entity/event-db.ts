import { Event as EventPrisma } from '@prisma/client'
import { ObjectId } from 'mongod'
import { IUserDb } from 'src/module/user/entity/user-db'

export interface IEventDb extends EventPrisma {
  id: string | ObjectId
  authorId: string | ObjectId
  Author?: IUserDb
  name: string
  description: string
  price: number
  portrait: string
  photos: string[]
  createdAt: Date
  updatedAt: Date
}
