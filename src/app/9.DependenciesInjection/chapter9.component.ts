import {Component, OnInit, Inject} from "@angular/core";

import { Engine }             from './engine';
import { Tires }              from './tires';
import { MockEngine }         from './mockengine';
import { MockTires }          from './mocktires';
import { Car }                from './car';
import { Logger }             from '../logger.service';
import {AppConfig} from "../app-config-interface";
import {HERO_DI_CONFIG} from "../app-config";
import {APP_CONFIG} from "../app-config-data";

@Component({
  selector: 'chapter9',
  templateUrl: './chapter9.component.html',
  providers: [{ provide: APP_CONFIG, useValue: HERO_DI_CONFIG }]
})


export class Chapter9Component  implements OnInit {
  public test = '';
  public title = '';
  private config = null ;

  constructor(@Inject(APP_CONFIG) config: AppConfig, public logger: Logger) {
    this.title = config.title;
    this.config = config
  }


  ngOnInit(): void {
    let car = new Car(new Engine(), new Tires());
    this.test = car.drive();

    this.logger.log(this.test);

    car = new Car(new MockEngine(), new MockTires());
    this.test += "\n" + car.drive();
    this.logger.log(this.test);

    this.test += '\n\napiEndpoint: ' + this.config.apiEndpoint + '  title: ' + this.title + '\n';
    this.logger.log('apiEndpoint: ' + this.config.apiEndpoint + '  title: ' + this.title);
    this.test += "\n" + car.drive();
    this.logger.log(this.test);


  }


}



