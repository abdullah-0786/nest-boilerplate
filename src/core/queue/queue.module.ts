import { Global, Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import RedisModule from 'core/cache/redis.module';
import BullQueueService from './bull-queue.service';
import AppConfig from 'configs/app.config';
import EmailConsumer from './consumers/email.consumer';
import { BullQueueConsumer } from './types';
import EmailModule from 'core/email/email.module';

@Global()
@Module({
  imports: [
    EmailModule,
    RedisModule,
    BullModule.forRoot({
      redis: { host: AppConfig.REDIS.HOST, port: AppConfig.REDIS.PORT, password: AppConfig.REDIS.PASSWORD },
    }),
    BullModule.registerQueue({ name: BullQueueConsumer.EMAIL }),
    BullModule.registerQueue({ name: BullQueueConsumer.CRON }),
  ],
  providers: [BullQueueService, EmailConsumer],
})
export default class QueueModule {}
