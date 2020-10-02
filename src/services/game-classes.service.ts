import { Injectable } from '@nestjs/common';

// GALV TODO
// move this type on another file (entities)
export interface GameClass {
  id: number;
  name: string;
  description: string;
}

@Injectable()
export class GameClassesService {
  private readonly classes: GameClass[];

  constructor() {
    this.classes = [
      {
        id: 1,
        name: 'Archer',
        description: 'arrows, bow, xbow',
      },
      {
        id: 2,
        name: 'Trickster',
        description: 'claws, dual swords',
      },
      {
        id: 3,
        name: 'Fighter',
        description: 'axe, sword, shield, two handed sword',
      },
      {
        id: 4,
        name: 'Mage',
        description: 'wand, staff',
      },
      {
        id: 5,
        name: 'Cleric',
        description: 'mace, hammer',
      },
      { id: 6, name: 'Crusader', description: 'blade magic' },
    ];
  }

  async find(): Promise<GameClass[]> {
    // GAlV TODO
    // read data from Game classes repository
    return this.classes.map(cc => cc);
  }

  // GALV TODO:
  // findOne
  // deleteOne
  // update
  // patch
  // create
}
