import { INestApplication } from '@nestjs/common';
import { ResponseInterceptor } from 'core/interceptors/response.interceptor';
import { I18nService } from 'nestjs-i18n';

export default function InjectInterceptors(app: INestApplication) {
  app.useGlobalInterceptors(new ResponseInterceptor(app.get(I18nService)));
}
