import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from 'src/auth/constant';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const [req] = context.getArgs();

    if(req.user.roles && req.user.roles.name === "super-admin") {
      return true
    }


    if (!req.user || !req.user.roles || req.user.roles.permissions.length === 0) {
      throw new UnauthorizedException();
    }

    const userPermissions = req.user.roles.permissions || [];
    
    const requiredPermission = this.reflector.get(
      'permission',
      context.getHandler(),
    ) || [];

    const hasAllRequiredPermission = requiredPermission.every(
      (permission) =>
        userPermissions.some((userPerm) => userPerm.name === permission),
    );

    if (requiredPermission.length === 0 || hasAllRequiredPermission) {
      return true;
    }

    throw new UnauthorizedException();
  }
}
