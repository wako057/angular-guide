import {Component} from "@angular/core";
@Component({
    selector: 'my-keyup-v4',
    template: `
    <label>my-keyup-v4</label>
    <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)" class="form-control">

    <p>{{value}}</p>
  `
})


export class KeyUpComponent_V4 {
    value = '';
    update(value: string) { this.value = value; }
}
