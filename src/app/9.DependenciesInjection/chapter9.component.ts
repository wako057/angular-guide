import {Component, OnInit} from "@angular/core";

import { Engine } from './engine';
import { Tires } from './tires';
import { MockEngine } from './mockengine';
import { MockTires } from './mocktires';
import { Car } from './car';

@Component({
  selector: 'chapter9',
  templateUrl: './chapter9.component.html'
})


export class Chapter9Component  implements OnInit {
  public test = ''
  constructor() { }

  ngOnInit(): void {
    let car = new Car(new Engine(), new Tires());
    this.test = car.drive();
    console.log(this.test);

    car = new Car(new MockEngine(), new MockTires());
    this.test += "\n" + car.drive();
    console.log(this.test);

  }


}
