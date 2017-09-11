import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { MdDialogModule } from '@angular/material'
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome'

import { SuppliersComponent } from './suppliers.component'
import { SuppliersChoiceComponent } from './suppliers-choice.component' 
import { SuppliersLoginComponent } from './suppliers-login.component'
import { SuppliersInscriptionComponent } from './suppliers-inscription.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MdDialogModule,
    AngularFontAwesomeModule
  ],
  entryComponents: [
    SuppliersComponent
  ],
  declarations: [
    SuppliersComponent,
    SuppliersChoiceComponent,
    SuppliersInscriptionComponent,
    SuppliersLoginComponent
  ],
  exports: [
    SuppliersComponent,
    SuppliersChoiceComponent,
    SuppliersInscriptionComponent,
    SuppliersLoginComponent
  ]
})
export class SuppliersModule { }
