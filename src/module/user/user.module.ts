import { Module } from '@nestjs/common'
import { PrismaService } from 'src/helper/mongodb'
import { UserFindController } from './controller/find.controller'
import { UserFindOneRepository } from './repository/find-one.repository'

@Module({
  imports: [],
  controllers: [UserFindController],
  providers: [PrismaService, UserFindOneRepository],
})
export class UserModule {}
