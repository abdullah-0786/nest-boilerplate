import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { BullQueueConsumer, EmailArgsMap } from './types';

@Injectable()
export default class BullQueueService {
  constructor(@InjectQueue(BullQueueConsumer.EMAIL) private readonly _emailQueue: Queue) {}

  async EnqueueEmail<T extends keyof EmailArgsMap>(job: T, jobData: EmailArgsMap[T]) {
    this._emailQueue.add(job, jobData);
  }
}
