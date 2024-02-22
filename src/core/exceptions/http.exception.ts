import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  BadRequestException,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Logger } from 'helpers/logger.helper';
// import LogError from './logger.exception';
import { FatalErrorException } from './response.exception';
import { I18nService } from 'nestjs-i18n';
import { LOCALE_HEADER_KEY } from 'constant';

function _prepareBadRequestValidationErrors(errors, _translatorService: I18nService) {
  const Errors: any = {};
  for (const err of errors) {
    const constraint =
      err.constraints &&
      Object.values(err.constraints) &&
      Object.values(err.constraints).length &&
      Object.values(err.constraints)
        .map(x => _translatorService.translate(x as string))
        .join('. ');
    Errors[err.property] = constraint ? constraint : `${err.property} is invalid`;
  }
  return Errors;
}
@Catch(HttpException, Error)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(@Inject(I18nService) private _translatorService: I18nService) {}

  catch(exception: HttpException | Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response: any = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const locale = request.headers[LOCALE_HEADER_KEY] as string;

    if (!(exception instanceof HttpException)) {
      const exceptionErr = exception.stack ? exception.stack : exception;
      Logger.Fatal(exceptionErr, 'ERROR');
      // LogError(exceptionErr, request);

      const ResponseToSend = {
        message:
          // exception.name === 'PrismaClientKnownRequestError'
          //     ? this._translatorService.translate(exception.message.split('\n').pop(), { lang: locale })
          //     :
          this._translatorService.translate('errors.fatal', { lang: locale }),
      };
      response.__ss_body = ResponseToSend;
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(ResponseToSend);
      return;
    }
    const status = exception.getStatus();
    const exceptionResponse: any = exception.getResponse();
    if (
      exception instanceof BadRequestException &&
      exceptionResponse.message &&
      Array.isArray(exceptionResponse.message)
    ) {
      const ResponseToSend = {
        message: this._translatorService.translate('errors.invalid_values', {
          args: {
            values: exceptionResponse.message.map(x => x.property).join(', '),
          },
          lang: locale,
        }),
        errors: _prepareBadRequestValidationErrors(exceptionResponse.message, this._translatorService),
      };
      response.__ss_body = ResponseToSend;
      response.status(status).json(ResponseToSend);
    } else {
      if (exception instanceof FatalErrorException && exceptionResponse.data?.log) {
        // LogError(exception, request, exceptionResponse.data.log);
      }

      const ResponseToSend = {
        message: this._translatorService.translate(exceptionResponse.key || 'errors.unindentified', {
          lang: locale,
          args: exceptionResponse.data,
        }),
        data: exceptionResponse?.data || undefined,
      };
      response.__ss_body = ResponseToSend;
      response.status(status).json(ResponseToSend);
    }
  }
}
