import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AproposComponent } from './apropos.component'
import { DialogModule } from '../dialog/dialog.module'

@NgModule({
    imports: [ 
        CommonModule,
        DialogModule
    ],
    declarations: [ 
        AproposComponent
    ],
    exports: [
        AproposComponent
    ],
    providers: []
})
export class AproposModule {}