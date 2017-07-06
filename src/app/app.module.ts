import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {TextDemoComponent} from "./text_demo/text_demo.component";
import  { TextResultComponent } from './text_result/text.result.component'
import  { AppRoutingModule } from './app-routing.module'

import  { WordAnalysisComponent } from './text_result/word-analysis/word.analysis.component'
import  { WordRatioComponent } from './text_result/word-ratio/word.ratio.component'
import  { EntityRecognitionComponent } from './text_result/entity-recognition/entity.recognition.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextDemoComponent,
    TextResultComponent,
    WordAnalysisComponent,
    WordRatioComponent,
    EntityRecognitionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
