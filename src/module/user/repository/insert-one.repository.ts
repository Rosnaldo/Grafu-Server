import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { PrismaService } from 'src/helper/mongodb'
import { IUserDb } from '../entity/user-db'

@Injectable()
export class UserInsertOneRepository {
  constructor(private readonly prisma: PrismaService) {}

  async execute(data: Prisma.UserCreateArgs): Promise<IUserDb> {
    return this.prisma.user.create(data)
  }
}
