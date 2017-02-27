
import {NgModule} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LittleTourComponent } from './7.UserInput/little-tour.component'
import { HeroFormComponent } from './8.Forms/hero-form.component';

const routes: Routes = [
    { path: '', redirectTo: '/chapter7', pathMatch: 'full' },
    { path: 'chapter7',  component: LittleTourComponent},
    { path: 'chapter8',  component: HeroFormComponent},
];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}


