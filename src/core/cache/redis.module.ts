import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import AppConfig from 'configs/app.config';
import RedisService from './redis.service';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      password: AppConfig.REDIS.PASSWORD,
      host: AppConfig.REDIS.HOST,
      port: AppConfig.REDIS.PORT,
    }),
  ],
  exports: [RedisService],
  providers: [RedisService],
})
export default class RedisModule {}
