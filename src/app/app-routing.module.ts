
import {NgModule} from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { Chapter7Component }    from './7.UserInput/chapter7.component'
import { Chapter8Component }    from './8.Forms/chapter8.component';
import { Chapter9Component }    from './9.DependenciesInjection/chapter9.component';
import { Chapter10Component }   from './10.TemplateSyntax/chapter10.component';

const routes: Routes = [
    { path: '', redirectTo: '/chapter7', pathMatch: 'full' },
    { path: 'chapter7',  component: Chapter7Component},
    { path: 'chapter8',  component: Chapter8Component},
    { path: 'chapter9',  component: Chapter9Component},
    { path: 'chapter10',  component: Chapter10Component},
];


@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}


