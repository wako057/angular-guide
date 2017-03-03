import { Component }   from '@angular/core';

import { Hero }        from './hero';
import { HeroService } from './hero.service';
import { Logger }             from '../logger.service';

@Component({
  selector: 'hero-list',
  template: `
  <div *ngFor="let hero of heroes">
    {{hero.id}} - {{hero.name}}
  </div>
  `
})

export class HeroListComponent {
  heroes = null;

  constructor(heroService: HeroService, public logger: Logger) {
    this.heroes = heroService.getHeroes();
    logger.log(this.heroes);
  }
}
