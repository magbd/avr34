import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MdDialogModule } from '@angular/material'
import { SuppliersComponent } from './suppliers.component'
import { SuppliersChoiceComponent } from './suppliers-choice.component' 
import { SuppliersInscriptionComponent } from './suppliers-inscription.component'

@NgModule({
  imports: [
    CommonModule,
    MdDialogModule
  ],
  entryComponents: [
    SuppliersComponent
  ],
  declarations: [
    SuppliersComponent,
    SuppliersChoiceComponent,
    SuppliersInscriptionComponent
  ],
  exports: [
    SuppliersComponent,
    SuppliersChoiceComponent,
    SuppliersInscriptionComponent
  ]
})
export class SuppliersModule { }
