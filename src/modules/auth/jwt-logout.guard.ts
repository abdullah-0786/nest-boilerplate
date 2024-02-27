import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UnAuthorizedException } from 'core/exceptions/response.exception';

@Injectable()
export default class JwtLogoutGuard extends AuthGuard('jwt-logout') {
  constructor() {
    super();
  }

  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any, _context: ExecutionContext) {
    if (info) throw new UnAuthorizedException('errors.bad_request', info.message);
    if (err) throw err;

    return user;
  }
}
