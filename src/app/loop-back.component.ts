
import {Component} from "@angular/core";
@Component({
    selector: 'my-loop-back',
    template: `
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})


export class LoopbackComponent {}
