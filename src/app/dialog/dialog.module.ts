import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DialogComponent } from './dialog.component';
import { DialogContentComponent } from './dialog-content.component';
import { FormModule } from '../form/form.module'

// import { MdCardModule } from '@angular/material'
// import { MdButtonModule } from '@angular/material'
import { MdDialogModule } from '@angular/material'
// import { MdInputModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    // MdCardModule,
    // MdButtonModule,
    MdDialogModule,
    FormModule,
  ],
  entryComponents: [
    DialogContentComponent
  ],
  declarations: [
    // DialogComponent,
    DialogContentComponent
  ],
  exports: [
    // DialogComponent
  ]
})
export class DialogModule { }
