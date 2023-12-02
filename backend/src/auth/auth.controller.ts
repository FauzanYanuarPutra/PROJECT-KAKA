import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from 'src/guard/auth.guard';
import { Public } from './constant';
import { UserGuard } from 'src/guard/user.guard';

@Controller('auth')
@UseGuards(AuthGuard)
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  @Public()
  async register(@Body() body: any) {
    return this.authService.register(body);
  }
    
  @HttpCode(200)
  @Post('login')
  @Public()
  async login(@Body() body: any) {
    return this.authService.login(body.email, body.password);
  }


  @Get('profile/:id')
  @UseGuards(UserGuard)
  async profile(@Req() req: any) {
    return this.authService.getProfile(req.user.id);
  }

  @Get('check-token')
  async checkToken(@Req() req: any) {
    return req.user
  }

  @Get('users')
  @Public()
  async users() {
    return this.authService.findAll();
  }

}
