import {Component} from "@angular/core";
@Component({
    selector: 'my-little-tour',
    template: `
    <label>my-little-tour</label>
    <input #newHero
      (keyup.enter)="addHero(newHero.value)"
      (blur)="addHero(newHero.value); newHero.value='' " class="form-control">

    <button (click)="addHero(newHero.value)" class="btn btn-success">Add</button>

    <ul><li *ngFor="let hero of heroes">{{hero}}</li></ul>
  `
})

export class LittleTourComponent{
    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    addHero(newHero: string) {
        if (newHero) {
            this.heroes.push(newHero);
        }
    }
}
