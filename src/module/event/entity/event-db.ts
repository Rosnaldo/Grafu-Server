import { Event as EventPrisma } from '@prisma/client'
import { ObjectId } from 'mongod'

export interface IEventDb extends EventPrisma {
  id: string | ObjectId
  authorId: string | ObjectId
  // Author?: UserDb
  name: string
  description: string
  price: number
  portrait: string
  photos: string[]
  createdAt: Date
  updatedAt: Date
}
