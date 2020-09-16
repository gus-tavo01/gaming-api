import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt.auth.guard';
import { LocalAuthGuard } from 'src/guards/local.auth.guard';
import { AuthService } from 'src/services/auth.service';
import { UsersService } from 'src/services/users.service';

@Controller('/v1/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() body: any) {
    const user = await this.userService.findOne(body.username);
    const token = await this.authService.login(user);
    return token;
  }

  @Post('/register')
  async register() {}

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async protectedRoute(@Request() req) {
    return req.user;
  }
}
