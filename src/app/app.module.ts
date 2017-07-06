import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TextDemoComponent} from "./text_demo/text_demo.component";
import  { TextResultComponent } from './text_result/text.result.component'
import  { AppRoutingModule } from './app-routing.module'
import { FileUploadModule} from "ng2-file-upload";
import { FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextDemoComponent,
    TextResultComponent
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
