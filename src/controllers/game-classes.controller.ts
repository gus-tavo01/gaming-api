import { Controller, Get } from '@nestjs/common';
import { GameClassesService } from 'src/services/game-classes.service';

@Controller('/v1/game-classes')
export class GameClassesController {
  constructor(private readonly gameClassesService: GameClassesService) {}

  @Get()
  public async getClasses() {
    // GALV TODO
    // add filters
    const response = await this.gameClassesService.find();
    return response;
  }

  // GALV TODO:
  // get class by id
  // post classes
  // delete classes
  // put classes
  // patch classes
}
