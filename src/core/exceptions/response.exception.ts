import { HttpException, HttpStatus } from '@nestjs/common';
import { I18nPath } from 'generated/i18n.generated';

export class NotFoundException extends HttpException {
  constructor(key: I18nPath = 'errors.not_found', data: any = { resource: 'Resource' }) {
    super({ key, data }, HttpStatus.NOT_FOUND);
  }
}
export class UnAuthorizedException extends HttpException {
  constructor(key: I18nPath = 'errors.unauthorized', data?: any) {
    super({ key, data }, HttpStatus.UNAUTHORIZED);
  }
}
export class BadRequestException extends HttpException {
  constructor(key: I18nPath = 'errors.bad_request', data?: any) {
    super({ key, data }, HttpStatus.BAD_REQUEST);
  }
}
export class ConflictException extends HttpException {
  constructor(key: I18nPath = 'errors.conflict', data: any = { resource: 'Resource' }) {
    super({ key, data }, HttpStatus.CONFLICT);
  }
}
export class ForbiddenException extends HttpException {
  constructor(key: I18nPath = 'errors.forbidden', data?: any) {
    super({ key, data }, HttpStatus.FORBIDDEN);
  }
}
export class FatalErrorException extends HttpException {
  constructor(key: I18nPath = 'errors.fatal', data?: any) {
    super({ key, data }, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
