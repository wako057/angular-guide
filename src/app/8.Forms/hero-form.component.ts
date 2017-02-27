import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Hero }    from './hero';

@Component({
    moduleId: module.id,
    selector: 'hero-form',
    styleUrls: ['./form_error.css'],
    templateUrl: './hero-form.component.html'
})

export class HeroFormComponent {

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    submitted = false;

    newHero() {
      this.model = new Hero(42, '', '');
    }

    onSubmit() { this.submitted = true; }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}
