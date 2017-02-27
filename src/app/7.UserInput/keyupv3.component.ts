
import {Component} from "@angular/core";
@Component({
    selector: 'my-keyup-v3',
    template: `
    <label>my-keyup-v3</label>
    <input #box (keyup.enter)="onEnter(box.value)" class="form-control">
    <p>{{value}}</p>
  `
})


export class KeyUpComponent_V3 {
    value = '';
    onEnter(value: string) { this.value = value; }
}
