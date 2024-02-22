import {
  applyDecorators,
  HttpStatus,
  Put as NestPut,
  Get as NestGet,
  Post as NestPost,
  Patch as NestPatch,
  Delete as NestDelete,
} from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiResponse, ApiResponseMetadata } from '@nestjs/swagger';
import { API_VERSION_HEADER_KEY } from 'constant';
import {
  BadRequestExceptionResponse,
  FatalErrorExceptionResponse,
  ForbiddenExceptionResponse,
  NotFoundExceptionResponse,
  UnauthorizedExceptionResponse,
} from 'core/response/response.schema';

type RouteDecoratorsType = {
  path: string;
  version?: `${number}` | `${number}`[];
  response: ApiResponseMetadata['type'];
  description: string;
  auth?: boolean;
};

export function Post(args: RouteDecoratorsType) {
  return applyDecorators(...CommonDecorators(args), NestPost(args.path));
}

export function Put(args: RouteDecoratorsType) {
  return applyDecorators(...CommonDecorators(args), NestPut(args.path));
}

export function Patch(args: RouteDecoratorsType) {
  return applyDecorators(...CommonDecorators(args), NestPatch(args.path));
}

export function Get(args: RouteDecoratorsType) {
  return applyDecorators(...CommonDecorators(args), NestGet(args.path));
}

export function Delete(args: RouteDecoratorsType) {
  return applyDecorators(...CommonDecorators(args), NestDelete(args.path));
}

function CommonDecorators(args: RouteDecoratorsType) {
  const decorators = [
    ApiResponse({ type: args.response, status: HttpStatus.OK }),
    ApiResponse({ type: BadRequestExceptionResponse, status: HttpStatus.BAD_REQUEST }),
    ApiResponse({ type: ForbiddenExceptionResponse, status: HttpStatus.FORBIDDEN }),
    ApiResponse({ type: UnauthorizedExceptionResponse, status: HttpStatus.UNAUTHORIZED }),
    ApiResponse({ type: NotFoundExceptionResponse, status: HttpStatus.NOT_FOUND }),
    ApiResponse({ type: FatalErrorExceptionResponse, status: HttpStatus.INTERNAL_SERVER_ERROR }),
    ApiOperation({ summary: args.description }),
  ];

  if (args.version)
    decorators.push(
      ApiHeader({ name: API_VERSION_HEADER_KEY, description: 'api version', enum: [].concat(args.version) })
    );
  // args.auth === false ? AllowAny() : ApiSecurity('authorization'),

  return decorators;
}
