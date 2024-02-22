import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { LOCALE_HEADER_KEY } from 'constant';
import { I18nContext } from 'nestjs-i18n';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, any> {
  constructor(private _translatorService: I18nContext) {}

  async intercept(context: ExecutionContext, next: CallHandler<T>): Promise<Observable<any>> {
    const ctx = context.switchToHttp();
    const response: any = ctx.getResponse<Response>();
    const request: any = ctx.getRequest<Request>();

    const locale = request.headers[LOCALE_HEADER_KEY];
    return next.handle().pipe(
      map((data: any) => {
        if (data.message) {
          data = {
            ...data,
            message: this._translatorService.translate(data.message, {
              args: data.message_args,
              lang: locale,
            }),
          };
        }
        delete data.message_args;

        response.__ss_body = { ...data };
        return data;
      })
    );
  }
}
