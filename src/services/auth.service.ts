import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}

  public async validateUser(username: string, password: string) {
    const user = await this.userService.findOne(username);

    if (user && user.password === password) {
      const result = { userId: user.userId, username: user.username };
      return result;
    }
    return null;
  }

  public async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    const serviceResponse = {
      access_token: this.jwtService.sign(payload),
    };
    return serviceResponse;
  }
}
