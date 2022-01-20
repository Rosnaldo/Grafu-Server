import { Module } from '@nestjs/common'
import { CheckPassword, CreateHash } from 'src/helper/bcrypt'
import { PrismaService } from 'src/helper/mongodb'
import { UserFindController } from './controller/find.controller'
import { UserLoginController } from './controller/login.controller'
import { UserRegisterController } from './controller/register.controller'
import { UserFindOneRepository } from './repository/find-one.repository'
import { UserInsertOneRepository } from './repository/insert-one.repository'

@Module({
  imports: [],
  controllers: [UserFindController, UserLoginController, UserRegisterController],
  providers: [PrismaService, UserFindOneRepository, CheckPassword, CreateHash, UserInsertOneRepository],
})
export class UserModule {}
