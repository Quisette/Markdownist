import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { HostListener } from '@angular/core';
import { ViewChild,ElementRef } from '@angular/core';

import mdRegex from './md-regex.json';
@Component({
  selector: 'app-markdown-section',
  templateUrl: './markdown-section.component.html',
  styleUrls: ['./markdown-section.component.sass']
})
export class MarkdownSectionComponent implements OnInit {
  keyEvent :any
  md = '# Markdown Example  \n * This is an example of Markdown.'
  constructor(private markdownService: MarkdownService) { }
  html :any

  regex = ('^# ')
  newRegex = new RegExp('^# ') 
  childNodes: any
  children: any
  @ViewChild('contentDiv')
    contentDiv?: ElementRef

  ngOnInit(): void {
    // this.html = this.markdownService.parse(this.md);
  }
  parse(){
    var contentDiv = this.contentDiv?.nativeElement
    var childNodes =contentDiv.childNodes


    if(childNodes.length == 1){
      if(this.newRegex.test(childNodes[0].textContent)  == true){
        mdRegex.forEach((element: any) => {
          if(RegExp(element.regex).test(childNodes[0].textContent)== true){
            childNodes[0].className = element.class
          }
        });
      }
    }else{
      Array.from(childNodes).forEach((e:any )=> {

        e.className = ""
        mdRegex.forEach((element: any) => {
          
          if(RegExp(element.regex).test(e.textContent)== true){
            e.className = element.class
          }
        });
       
      });
    }



  }


  

}

