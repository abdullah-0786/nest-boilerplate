import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { VersioningType } from '@nestjs/common';
import AppConfig from 'configs/app.config';
import { InjectInterceptors, InjectLogger, InjectPipes, InjectSwagger } from 'core/injectors';
import { API_VERSION_HEADER_KEY } from 'constant';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
    cors: true,
  });

  /* Enable API versioning */
  app.enableVersioning({
    type: VersioningType.CUSTOM,
    extractor: (request: any) => request.headers[API_VERSION_HEADER_KEY] ?? '1',
    defaultVersion: '1',
  });

  /* Set proxy as trustful to forward IP address */
  app.set('trust proxy', 1);
  /* Add custom Injectors here */
  InjectPipes(app);
  InjectInterceptors(app);
  InjectLogger(app);
  InjectSwagger(app);

  /* Start the application on a specified port */
  await app.listen(AppConfig.APP.PORT || 3000);
}
bootstrap();
