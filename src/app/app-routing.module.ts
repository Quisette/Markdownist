import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { DualpageMarkdownComponent } from './dualpage-markdown/dualpage-markdown.component';
import { MarkdownSectionComponent } from './markdown-section/markdown-section.component';

const routes: Routes = [
  {
    path: 'singlepage', component: MarkdownSectionComponent,
    

  },
  {
    path: 'dualpage', component: DualpageMarkdownComponent
  },
  {
    path: '', component: DualpageMarkdownComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
