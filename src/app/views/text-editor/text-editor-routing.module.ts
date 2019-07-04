import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextEditorComponent } from './text-editor.component';

const routes: Routes = [
  {
    path: '',
    component: TextEditorComponent,
    data: {
      title: 'Text Editor'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TextEditorRoutingModule {}
