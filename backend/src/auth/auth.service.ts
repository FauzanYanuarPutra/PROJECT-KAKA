import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) { }

  async findAll() {
    return this.userService.findAll();
  }

  async getProfile(id: string) {
    const user = await this.userService.findById(id);

    return user
  }
  
  async login(email: string, password: string) {
    const user = await this.userService.findEmail(email);

    if(!user) {
      throw new UnauthorizedException('Incorrect email or password')
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
      throw new UnauthorizedException('Incorrect email or password');
    }
    
    const result = {
      id: user.id,
      email: user.email,
      roles: user.role,
    }

    return {
      userId: result,
      access_token: await this.jwtService.sign(result)
    };
  }

  async register(body: any) {
    const { email, username, password } = body
    

    const user = await this.userService.findEmail(email)

    if (user) {
      throw new UnauthorizedException('User already exists');
    }


    const newUser = await this.userService.createUser(email, username, password)



    const result = {
      id: newUser.id,
      username: newUser.username,
      roles: newUser.role,
    }

    return {
      userId: result,
      access_token: await this.jwtService.sign(result)
    };
  }
}
