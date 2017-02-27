import {Component, OnInit} from "@angular/core";

import { Engine }             from './engine';
import { Tires }              from './tires';
import { MockEngine }         from './mockengine';
import { MockTires }          from './mocktires';
import { Car }                from './car';
import { HeroService }        from './heroes/hero.service';
import { HeroListComponent }  from './heroes/hero-list.component';
import { Logger }             from '../logger.service';

@Component({
  selector: 'chapter9',
  templateUrl: './chapter9.component.html'
})


export class Chapter9Component  implements OnInit {
  public test = ''
  constructor(public logger: Logger) { }


  ngOnInit(): void {
    let car = new Car(new Engine(), new Tires());
    this.test = car.drive();

    this.logger.log(this.test);

    car = new Car(new MockEngine(), new MockTires());
    this.test += "\n" + car.drive();
    this.logger.log(this.test);

    // Implicit injector creation
    // injector = ReflectiveInjector.resolveAndCreate([Car, Engine, Tires]);
    // let car = injector.get(Car);

    // let expectedHeroes = [{name: 'A'}, {name: 'B'}]
    // let mockService = <HeroService> {getHeroes: () => expectedHeroes }
    //
    // it('should have heroes when HeroListComponent created', () => {
    //   let hlc = new HeroListComponent(mockService);
    //   expect(hlc.heroes.length).toEqual(expectedHeroes.length);
    // });
  }


}

