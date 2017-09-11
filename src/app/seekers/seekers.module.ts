import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { MdDialogModule } from '@angular/material'
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome'

import { SeekersComponent } from './seekers.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdDialogModule,
    AngularFontAwesomeModule
  ],
  entryComponents: [
    SeekersComponent
  ],
  declarations: [
    SeekersComponent
  ]
})
export class SeekersModule { }
