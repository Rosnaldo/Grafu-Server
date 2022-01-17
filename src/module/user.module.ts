import { Module } from '@nestjs/common';
import { PrismaService } from 'src/helper/mongodb';
import { UserFindController } from './user/controller/find.controller';
import { UserFindOneRepository } from './user/repository/find-one.repository';

@Module({
  imports: [],
  controllers: [UserFindController],
  providers: [PrismaService, UserFindOneRepository],
})
export class UserModule {}
