import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './7.UserInput/click-me.component';
import { KeyUpComponent_V1 } from './7.UserInput/keyupv1.component';
import { LoopbackComponent } from './7.UserInput/loop-back.component';
import { KeyUpComponent_V2 } from './7.UserInput/keyupv2.component';
import { KeyUpComponent_V3 } from './7.UserInput/keyupv3.component';
import { KeyUpComponent_V4 } from './7.UserInput/keyupv4.component'
import { LittleTourComponent } from './7.UserInput/little-tour.component'
@NgModule({
  declarations: [
    AppComponent, ClickMeComponent, KeyUpComponent_V1, LoopbackComponent, KeyUpComponent_V2, KeyUpComponent_V3,
    KeyUpComponent_V4, LittleTourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
