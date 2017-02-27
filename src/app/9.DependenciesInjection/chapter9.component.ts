import {Component, OnInit} from "@angular/core";

import { MockEngine } from './mockengine';
import { MockTires } from './mocktires';
import { Car } from './car';

@Component({
  selector: 'chapter9',
  templateUrl: './chapter9.component.html'
})


export class Chapter9Component  implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let car = new Car(new MockEngine(), new MockTires());
    car.drive();
  }


}
