import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { LoggerModule } from 'nestjs-pino'
import { ThrottlerModule } from '@nestjs/throttler'

import databaseConfig from './config/database.config'
import local from './config/local.config'
import { CommonModule } from './common/common.module'
import { UserModule } from './module/user/user.module'
import { EventModule } from './module/event/event.module'
import { TicketModule } from './module/ticket/ticket.module'
import { InviteModule } from './module/invite/invite.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [databaseConfig, local],
    }),
    LoggerModule.forRoot(),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        ttl: config.get('THROTTLE_TTL', 1000),
        limit: config.get('THROTTLE_LIMIT', 30),
      }),
    }),
    CommonModule,
    UserModule,
    EventModule,
    TicketModule,
    InviteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
