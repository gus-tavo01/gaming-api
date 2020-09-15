import { Body, Controller, Post } from '@nestjs/common';

@Controller('/v1/auth')
export class AuthController {
  @Post('/login')
  async login(@Body() authCredentials: any) {
    return authCredentials;
  }

  @Post('/register')
  async register() {}
}
