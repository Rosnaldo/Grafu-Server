import { User as UserPrisma } from '@prisma/client'
import { ObjectId } from 'mongod'

export interface IUserDb extends UserPrisma {
  id: string | ObjectId
  email: string
  firstName: string | null
  lastName: string | null
  password: string
  avatar: string | null
  createdAt: Date
  updatedAt: Date
}
