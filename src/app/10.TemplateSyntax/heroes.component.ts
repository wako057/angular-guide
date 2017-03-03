import { Component }          from '@angular/core';
import { HeroService }        from './hero.service';
import {Hero} from "../9.DependenciesInjection/hero";
import EventEmitter = NodeJS.EventEmitter;

@Component({
  selector: 'my-heroes',
  provider: [HeroService],
  template: `
<div>
  <img src="{{heroImageUrl}}">
  <span [style.text-decoration]="lineThrough">
    {{prefix}} {{hero?.name}}
  </span>
  <button (click)="delete()">Delete</button>
</div>`

})
export class HeroesComponent {
  deleteRequest = new EventEmitter<Hero>();
  private hero;

  delete() {
    this.deleteRequest.emit(this.hero);
  }
}
