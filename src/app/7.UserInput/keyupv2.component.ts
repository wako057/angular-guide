import {Component} from "@angular/core";

@Component({
    selector: 'my-keyup-v2',
    template: `
    <label>my-keyup-v2</label>
    <input #box (keyup)="onKey(box.value)" class="form-control">
    <p>{{values}}</p>
  `
})
export class KeyUpComponent_V2 {
    values = '';
    onKey(value: string) {
        this.values += value + ' | ';
    }
}
