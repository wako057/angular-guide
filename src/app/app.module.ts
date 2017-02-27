import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent_V1 } from './keyupv1.component';
import { LoopbackComponent } from './loop-back.component';
import { KeyUpComponent_V2 } from './keyupv2.component';
import { KeyUpComponent_V3 } from './keyupv3.component';
import { KeyUpComponent_V4 } from './keyupv4.component'
import { LittleTourComponent } from './little-tour.component'
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
