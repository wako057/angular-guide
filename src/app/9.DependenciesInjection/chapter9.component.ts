import {Component, OnInit, Inject} from "@angular/core";

import { Engine }             from './engine';
import { Tires }              from './tires';
import { MockEngine }         from './mockengine';
import { MockTires }          from './mocktires';
import { Car }                from './car';
import { Logger }             from '../logger.service';
import {AppConfig} from "../app-config";


@Component({
  selector: 'chapter9',
  templateUrl: './chapter9.component.html'
})


export class Chapter9Component  implements OnInit {
  public test = ''
  constructor(private config:AppConfig, public logger: Logger) { }


  ngOnInit(): void {
    let car = new Car(new Engine(), new Tires());
    this.test = car.drive();

    this.logger.log(this.test);

    car = new Car(new MockEngine(), new MockTires());
    this.test += "\n" + car.drive();
    this.logger.log(this.test);

    this.logger.log(this.config.apiEndpoint + '  ' + this.config.title);

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

