import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class EmailService {
  constructor(private mailerService: MailerService) {}

  async SendEmail(email: string | string[], contextObject: any, from?: string) {
    await this.mailerService.sendMail({
      ...(from && { from }),
      to: Array.isArray(email) ? email : [email],
      subject: contextObject.subject,
      template: contextObject.template,
      context: contextObject.context,
    });
  }
}
