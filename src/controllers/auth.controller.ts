import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiProperty, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/guards/jwt.auth.guard';
import { LocalAuthGuard } from 'src/guards/local.auth.guard';
import { AuthService } from 'src/services/auth.service';

// GALV TODO:
// move this temporal DTO on a dif folder
class LoginDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}

@ApiTags('Auth')
@Controller('/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req, @Body() body: LoginDto) {
    const token = await this.authService.login(req.user);
    return token;
  }

  // TODO delete this dummy route
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async protectedRoute(@Request() req) {
    return req.user;
  }
}
