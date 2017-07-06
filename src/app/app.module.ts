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
    SemanticAssociationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FileUploadModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
