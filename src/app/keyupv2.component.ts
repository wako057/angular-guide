import {Component} from "@angular/core";

@Component({
    selector: 'my-keyup-v2',
    template: `
    <input #box (keyup)="onKey(box.value)">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_V2 {
    values = '';
    onKey(value: string) {
        this.values += value + ' | ';
    }
}
