
import {Component} from "@angular/core";
@Component({
    selector: 'my-loop-back',
    template: `
    <label>my-loopback</label>
    <input #box (keyup)="0"  class="form-control">
    <p>{{box.value}}</p>
  `
})


export class LoopbackComponent {}
