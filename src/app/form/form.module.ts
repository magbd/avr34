import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, FormControl, Validators } from '@angular/forms'

// import { FormComponent } from './form.component'
import { FormInscriptionComponent } from './form-inscription.component'
import { SharedModule } from '../shared/shared.module'

// import { MdInputModule } from '@angular/material'

@NgModule({
    imports: [ CommonModule, SharedModule, FormsModule ],
    declarations: [ FormInscriptionComponent ],
    exports: [ FormInscriptionComponent ],
    providers: []
})
export class FormModule {}