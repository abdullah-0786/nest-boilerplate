import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import EmailService from './email.service';
import AppConfig from 'configs/app.config';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: AppConfig.EMAIL.HOST,
        port: AppConfig.EMAIL.PORT,
        secure: false,
        requireTLS: true,
        auth: {
          user: AppConfig.EMAIL.USER,
          pass: AppConfig.EMAIL.PASSWORD,
        },
      },
      defaults: {
        from: AppConfig.EMAIL.FROM,
      },
      template: {
        dir: join(__dirname, './templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [EmailService],
  exports: [EmailService],
})
export default class EmailModule {}
