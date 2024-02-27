/**
 * Full Documentation for @Processor and @Process can be found here: https://docs.nestjs.com/techniques/queues
 */

import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import {
  AccountRecoveryEmailArgs,
  BullQueueConsumer,
  BullQueueJobs,
  ContactUsEmailArgs,
  ForgotPasswordEmailArgs,
  SignupEmailArgs,
  SubAdminWelcomeEmailArgs,
} from '../types';
import { EmailSubjects, EmailTemplates } from 'core/email/email.constants';
import EmailService from 'core/email/email.service';

/**
 * Initializes New Queue Processor
 * */
@Processor(BullQueueConsumer.EMAIL)
export default class EmailConsumer {
  constructor(private _emailService: EmailService) {}

  @Process(BullQueueJobs.SEND_FORGOT_PASSWORD_EMAIL)
  async SendForgotEmailProcess(job: Job<ForgotPasswordEmailArgs>) {
    const { email } = job.data;

    const contextObject = {
      subject: EmailSubjects.ForgotEmail,
      template: EmailTemplates.FORGOT_EMAIL_TEMPLATE,
      context: job.data,
    };

    await this._emailService.SendEmail(email, contextObject);
  }

  @Process(BullQueueJobs.SEND_ACCOUNT_RECOVERY_EMAIL)
  async SendAccountRecoverEmailProcess(job: Job<AccountRecoveryEmailArgs>) {
    const { email } = job.data;

    const contextObject = {
      subject: EmailSubjects.AccountRecoverEmail,
      template: EmailTemplates.ACCOUNT_RECOVER_EMAIL_TEMPLATE,
      context: job.data,
    };

    await this._emailService.SendEmail(email, contextObject);
  }

  @Process(BullQueueJobs.SEND_CONTACTUS_EMAIL)
  async SendContactUsEmailProcess(job: Job<ContactUsEmailArgs>) {
    const { to, from } = job.data;

    const contextObject = {
      subject: EmailSubjects.ContactUsEmail,
      template: EmailTemplates.CONTACT_US_EMAIL_TEMPLATE,
      context: job.data,
    };

    await this._emailService.SendEmail(to, contextObject, from);
  }

  @Process(BullQueueJobs.SUBADMIN_WELCOME_EMAIL)
  async SubAdminWelcomeEmailProcess(job: Job<SubAdminWelcomeEmailArgs>) {
    const { email } = job.data;

    const contextObject = {
      subject: EmailSubjects.SubAdminWelcomeEmail,
      template: EmailTemplates.SUBADMIN_WELCOME_EMAIL_TEMPLATE,
      context: job.data,
    };

    await this._emailService.SendEmail(email, contextObject);
  }

  @Process(BullQueueJobs.SEND_SIGNUP_EMAIL)
  async SignupWelcomeEmailProcess(job: Job<SignupEmailArgs>) {
    const { email } = job.data;

    const contextObject = {
      subject: EmailSubjects.SignupEmail,
      template: EmailTemplates.SIGNUP_EMAIL_TEMPLATE,
      context: job.data,
    };

    await this._emailService.SendEmail(email, contextObject);
  }
}
