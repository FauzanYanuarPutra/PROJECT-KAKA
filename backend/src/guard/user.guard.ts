import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IS_PUBLIC_KEY } from 'src/auth/constant';
import { Reflector } from '@nestjs/core';


@Injectable()
export class UserGuard implements CanActivate {
  constructor(
    private reflector: Reflector
  ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      // 💡 See this condition
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user; 
    const profileId = request.params.id; 

    if (Number(user.id) === Number(profileId)) {
      return true;
    }

    return false;
  }
}
