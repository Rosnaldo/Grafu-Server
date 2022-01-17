import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SentryModule } from '@ntegral/nestjs-sentry';
import { LogLevel } from '@sentry/types';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      load: [],
    }),
    SentryModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        dsn: config.get('sentry.dsn'),
        debug: process.env.NODE_ENV !== 'production',
        enabled: ['production', 'development'].includes(process.env.NODE_ENV),
        environment: process.env.NODE_ENV,
        release: `${process.env.npm_package_name}@${process.env.npm_package_version}`,
        logLevel: LogLevel.Debug,
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [],
})
export class CommonModule {}
