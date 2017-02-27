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
import { KeyUpComponent_V4 } from './7.UserInput/keyupv4.component';
import { LittleTourComponent } from './7.UserInput/little-tour.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroFormComponent } from './8.Forms/hero-form.component'
import { Chapter7Component } from './7.UserInput/chapter7.component';
import { Chapter8Component } from './8.Forms/chapter8.component';

@NgModule({
  declarations: [
    AppComponent, ClickMeComponent, KeyUpComponent_V1, LoopbackComponent, KeyUpComponent_V2, KeyUpComponent_V3,
    KeyUpComponent_V4, LittleTourComponent, HeroFormComponent, Chapter7Component, Chapter8Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
