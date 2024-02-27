import { SetMetadata, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
// import { Actions, Modules } from '@prisma/client';
// import { PermissionLabels, TUserTypes, UserTypes } from 'constant';
import { UnAuthorizedException } from 'core/exceptions/response.exception';

@Injectable()
export default class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const allowAny = this.reflector.getAllAndOverride<boolean>(ALLOW_ANY, [context.getHandler(), context.getClass()]);
    return allowAny ? true : super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any, _context: ExecutionContext) {
    if (info) throw new UnAuthorizedException('errors.bad_request', info.message);
    if (err) throw err;

    // const roles = this.reflector.get<TUserTypes[]>('roles', context.getHandler());
    // if ((!roles || roles.length === 0) && user.type === UserTypes.GUEST) {
    //   throw new ForbiddenException();
    // } else if (roles && !roles.includes(user.type)) throw new ForbiddenException();

    // if (user.type === UserTypes.SUBADMIN) this.checkAccess(user, context);

    return user;
  }

  //   private checkAccess(user: any, context: ExecutionContext) {
  //     const module: Modules = this.reflector.get('module', context.getHandler());
  //     if (!module) return;

  //     const userPermissions = user.accesses[module];
  //     if (!userPermissions) throw new ForbiddenException('errors.forbidden', { resource: module.toLowerCase() });

  //     const action: Actions = this.reflector.get('action', context.getHandler());
  //     if (!action) return;
  //     if (!userPermissions.includes(action))
  //       throw new ForbiddenException('errors.forbidden', { resource: PermissionLabels[module][action] });
  //   }
}

export const AllowAny = () => SetMetadata(ALLOW_ANY, true);
export const ALLOW_ANY = 'allow-any';
