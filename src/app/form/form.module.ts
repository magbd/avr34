import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FormComponent } from './form.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
    imports: [ CommonModule, SharedModule  ],
    declarations: [ FormComponent ],
    exports: [ FormComponent ],
    providers: []
})
export class FormModule {}