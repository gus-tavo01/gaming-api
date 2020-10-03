import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameClassesController } from 'src/controllers/game-classes.controller';
import { AuthController } from '../controllers/auth.controller';
import { AuthModule } from './auth.module';
import { GameClassesModule } from './game-classes.module';
import { UsersModule } from './users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.production', '.env.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    GameClassesModule,
  ],
  controllers: [AuthController, GameClassesController],
})
export class AppModule {}
