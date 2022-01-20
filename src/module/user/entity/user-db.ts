import { User as UserPrisma } from '@prisma/client'

export interface IUserDb extends Omit<UserPrisma, 'id'> {
  id?: string
  email: string
  firstName: string | null | undefined
  lastName: string | null | undefined
  password: string
  avatar: string | null | undefined
  createdAt: Date
  updatedAt: Date
}
