import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TextDemoComponent} from "./text_demo/text_demo.component";
import  { TextResultComponent } from './text_result/text.result.component'
import  { AppRoutingModule } from './app-routing.module'

import { FileUploadModule} from "ng2-file-upload";
import { FormsModule} from "@angular/forms";

import { WordAnalysisComponent } from './text_result/word-analysis/word.analysis.component';
import { WordRatioComponent } from './text_result/word-ratio/word.ratio.component';
import { EntityRecognitionComponent } from './text_result/entity-recognition/entity.recognition.component';
import { AutoSummaryComponent } from './text_result/auto-summary/auto.summary.component';
import { InfoExtractComponent } from './text_result/info-extract/info.extract.component';
import { TextCategoryComponent } from './text_result/text-category/text.category.component';
import { EmotionalRecognitionComponent } from './text_result/emotional-recognition/emotional.recognition.component';
import { SemanticAssociationComponent } from './text_result/semantic-association/semantic.association.component';

import { TitleDesComponent } from './text_result/component/title-des/title.des.component';
import { CheckboxComponent } from './text_result/component/checkbox/checkbox.component';
import { TipComponent } from './text_result/component/tip/tip.component';
import {HttpModule} from "@angular/http";
import {TextClusteriComponent} from "./text_result/text-clusteri/text-clusteri.component";
import {WordboxComponent} from "./text_result/component/wordBox/wordbox.component";
import {WordTipComponent} from "./text_result/component/wordtip/wordtip.component";
import {LtpTipComponent} from "./text_result/component/ltp/ltp.component";
import {ExtractSummariesComponent} from "./text_result/component/extract_summaries/extract_summaries.component";
import {AbstractSummariesComponent} from "./text_result/component/abstract_summaries/abstract_summaries.component";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextDemoComponent,
    TextResultComponent,
    WordAnalysisComponent,
    WordRatioComponent,
    EntityRecognitionComponent,
    AutoSummaryComponent,
    InfoExtractComponent,
    TextCategoryComponent,
    EmotionalRecognitionComponent,
    SemanticAssociationComponent,
    TitleDesComponent,
    CheckboxComponent,
    TipComponent,
    TextClusteriComponent,
    WordboxComponent,
    WordTipComponent,
    LtpTipComponent,
    ExtractSummariesComponent,
    AbstractSummariesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FileUploadModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
