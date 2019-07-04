import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextEditorComponent } from './text-editor.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TextEditorRoutingModule } from './text-editor-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CKEditorModule,
        TextEditorRoutingModule,
        TranslateModule.forChild()
    ],
    declarations: [TextEditorComponent]
})
export class TextEditorModule { }
