import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from 'src/services/auth.service';
import { JwtStrategy } from 'src/auth/strategies/jwt.strategy';
import { LocalStrategy } from 'src/auth/strategies/local.strategy';
import { UsersModule } from './users.module';
import { authConstants } from 'src/auth/constants';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: authConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
