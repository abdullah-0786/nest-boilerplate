import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { I18nModule, HeaderResolver } from 'nestjs-i18n';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as path from 'path';
import { FALLBACK_LANGUAGE, LOCALE_HEADER_KEY } from 'constant';
import { validateEnv } from 'configs/validate-env';

@Module({
  imports: [
    ConfigModule.forRoot({ validate: validateEnv }),
    I18nModule.forRoot({
      fallbackLanguage: FALLBACK_LANGUAGE,
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [new HeaderResolver([LOCALE_HEADER_KEY])],
      typesOutputPath: path.join(__dirname, '../src/generated/i18n.generated.ts'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
