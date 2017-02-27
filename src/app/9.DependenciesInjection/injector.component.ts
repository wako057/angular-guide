

import {Car} from "./car";
import {Engine} from "./engine";
import {Tires} from "./tires";
import {Logger} from "../logger.service";
import {HeroService} from "./heroes/hero.service";
import {Hero} from "./heroes/hero";
import {Injector} from "@angular/core";
@Component({
    selector: 'my-injectors',
    template: `
  <h2>Other Injections</h2>
  <div id="car">{{car.drive()}}</div>
  <div id="hero">{{hero.name}}</div>
  <div id="rodent">{{rodent}}</div>
  `,
    providers: [Car, Engine, Tires, heroServiceProvider, Logger]
})
export class InjectorComponent {
    car: Car = this.injector.get(Car);
    heroService: HeroService = this.injector.get(HeroService);
    hero: Hero = this.heroService.getHeroes()[0];
    private ROUS;
    constructor(private injector: Injector) { }
    get rodent() {
        let rousDontExist = `R.O.U.S.'s? I don't think they exist!`;
        return this.injector.get(this.ROUS, rousDontExist);
    }
}
