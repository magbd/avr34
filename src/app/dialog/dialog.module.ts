import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DialogContentComponent } from './dialog-content.component';

import { MdCardModule } from '@angular/material'
import { MdButtonModule } from '@angular/material'
import { MdDialogModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdButtonModule,
    MdDialogModule
  ],
  entryComponents: [
    DialogContentComponent
  ],
  declarations: [
    DialogComponent,
    DialogContentComponent
  ],
  exports: [
    DialogComponent
  ]
})
export class DialogModule { }
