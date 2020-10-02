import { Module } from '@nestjs/common';
import { GameClassesService } from '../services/game-classes.service';

@Module({
  providers: [GameClassesService],
  exports: [GameClassesService],
})
export class GameClassesModule {}
