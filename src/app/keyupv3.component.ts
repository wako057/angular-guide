
import {Component} from "@angular/core";
@Component({
    selector: 'my-keyup-v3',
    template: `
    <input #box (keyup.enter)="onEnter(box.value)">
    <p>{{value}}</p>
  `
})


export class KeyUpComponent_V3 {
    value = '';
    onEnter(value: string) { this.value = value; }
}
