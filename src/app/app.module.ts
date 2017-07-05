import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {TextDemoComponent} from "./text_demo/text_demo.component";
import  { AppRoutingModule } from './app-routing.module'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextDemoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
