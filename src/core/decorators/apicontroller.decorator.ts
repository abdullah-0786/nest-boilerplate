import { applyDecorators, Controller, UseFilters } from '@nestjs/common';
import { ApiHeaderOptions, ApiHeaders, ApiTags } from '@nestjs/swagger';
import { API_VERSION_HEADER_KEY, LANGUAGES, LOCALE_HEADER_KEY } from 'constant';
import { HttpExceptionFilter } from 'core/exceptions/http.exception';

type ApiControllerArgs = {
  path?: string;
  version?: `${number}` | `${number}`[];
  tag?: string;
};

export function ApiController(args: ApiControllerArgs) {
  const apiHeaders: ApiHeaderOptions[] = [
    { name: LOCALE_HEADER_KEY, description: 'response language', enum: LANGUAGES },
  ];
  if (args.version) {
    apiHeaders.push({ name: API_VERSION_HEADER_KEY, description: 'api version', enum: [].concat(args.version) });
  }

  return applyDecorators(
    ApiTags(args.tag || 'default'),
    ApiHeaders(apiHeaders),
    Controller(args),
    UseFilters(HttpExceptionFilter)
  );
}
