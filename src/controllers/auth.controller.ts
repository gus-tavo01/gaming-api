import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt.auth.guard';
import { LocalAuthGuard } from 'src/guards/local.auth.guard';
import { AuthService } from 'src/services/auth.service';
import { UsersService } from 'src/services/users.service';

@Controller('/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    const token = await this.authService.login(req.user);
    return token;
  }

  @Post('/register')
  async register() {
    // TODO
    // create user credentials
    // create user data in userService
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async protectedRoute(@Request() req) {
    return req.user;
  }
}
