import { Component, ElementRef, EventEmitter, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { HostListener } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { saveAs } from 'file-saver'
import { HttpClient } from '@angular/common/http';
import {
  MonacoEditorComponent,
  MonacoEditorConstructionOptions,
  MonacoEditorLoaderService,
  MonacoStandaloneCodeEditor
} from '@materia-ui/ngx-monaco-editor';

@Component({
  selector: 'app-dualpage-markdown',
  // templateUrl: './dualpage-markdown.component.html',
  templateUrl: './dualpage-markdown.component.html',
  styleUrls: ['./dualpage-markdown.component.sass'],
  // selector: 'app-root',
})
export class DualpageMarkdownComponent implements OnInit {
  
  
  code =`# Sample Markdown  
  This is a sample Markdown.   
  You can do  __bold__, *italic*, or ***bold italic*** fonts here.  
  [Markdownist](https://markdownist.quisette.me)
   ---
 ## Second Header (H2)      
  * itemize object 1
  * itemize object 1
  * itemize object 3    
 
 1. list object 1  
 2. list object 2    
 3. list object 3  
  
   
 \\*literal asterisks\\*    
   
 ---
 \`\`\`
 {
   "firstName": "John",
   "lastName": "Smith",
   "age": 25
 }
 \`\`\`   
 | Syntax | Description |
 | ----------- | ----------- |
 | Header | Title |
 | Paragraph | Text |   
   
`
  html=""
  event: any
  @ViewChild('mytext')
    mytext?: ElementRef
  @ViewChild(MonacoEditorComponent,{static: false})
    monacoComponent?:MonacoEditorComponent
    editorOptions : MonacoEditorConstructionOptions={
      theme: 'vs-dark', 
      language: 'markdown',
      roundedSelection: true,
      autoIndent: "none", 
      fontSize:20,
      lineNumbers:'on',
      wordBasedSuggestions:false
      };
  constructor(private markdownService: MarkdownService, ) { }
  editor: any
  editorInit($event:any){
    this.editor = $event
    this.html = this.markdownService.parse(this.editor.getValue());
    this.code = this.md.getValue()
  }
    md:any
   ngOnInit() {

  }
  
  parse(){    
    this.html = this.markdownService.parse(this.editor.getValue());
  } 

  downloadMarkdown(){
    const file = new Blob([this.editor.getValue()],{type: "text/plain"})
    saveAs(file, "Downloads.md")
  }
  
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    console.log(event.key)
    if(event.key == "Backspace"){
      this.editor.trigger(monaco.KeyCode.Space, 'type', {text: ' '})
      this.editor.trigger(monaco.KeyCode.Backspace, 'deleteLeft')
    }
    if(event.key == "Enter"){
      this.editor.trigger(monaco.KeyCode.Backspace, 'deleteLeft')
      this.editor.trigger(monaco.KeyCode.Space, 'type', {text: ' '})
      this.editor.trigger(monaco.KeyCode.Space, 'type', {text: ' '})
      this.editor.trigger(monaco.KeyCode.Enter, 'type', {text: '\n'})


      // this.editor.trigger(monaco.KeyCode.Backspace, 'deleteLeft')
    }
    
    this.parse()
  }
  
  
}
