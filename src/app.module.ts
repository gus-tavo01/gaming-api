import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthController } from './controllers/auth/auth.controller';
import { AppService } from './services/app.service';

@Module({
  imports: [],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
