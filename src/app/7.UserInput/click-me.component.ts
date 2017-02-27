
import {Component} from "@angular/core";
@Component({
    selector: 'click-me',
    template: `
    <label>Clickme</label>
    <button (click)="onClickMe()" class="btn btn-success">Click me!</button>
    {{clickMessage}}
    `
})


export class ClickMeComponent {
    clickMessage = '';

    onClickMe() {
        this.clickMessage = "You are my Hero";
    }
}
