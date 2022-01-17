import { Module } from '@nestjs/common';
import { UserFindController } from './user/controller/find.controller';

@Module({
  imports: [],
  controllers: [UserFindController],
  providers: [],
})
export class UserModule {}
