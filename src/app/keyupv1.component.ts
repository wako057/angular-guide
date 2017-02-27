
import {Component} from "@angular/core";
@Component({
    selector: 'my-keyup-v1',
    template: `
    <label>my-keyup-v1</label>
  <input (keyup)="onKey($event)">
  <p>{{values}}</p>
`
})


export class KeyUpComponent_V1 {
    values = '';

    onKey(event: any) { // without type info

        this.values += (<HTMLInputElement>event.target).value + ' | ';

    }
}
