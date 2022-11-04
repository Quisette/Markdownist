import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkdownService } from 'ngx-markdown';
import { MarkdownSectionComponent } from './markdown-section/markdown-section.component';
import { DualpageMarkdownComponent } from './dualpage-markdown/dualpage-markdown.component';
import { MonacoEditorModule,MONACO_PATH } from '@materia-ui/ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MarkdownSectionComponent,
    DualpageMarkdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MarkdownModule.forRoot(),
    MonacoEditorModule,
    HttpClientModule
    
    
  ],
  providers: [
    {
    provide: MONACO_PATH,
    // useValue: 'node_modules/monaco-editor/min/vs',

    useValue: 'https://unpkg.com/monaco-editor@0.34.1/min/vs',
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
