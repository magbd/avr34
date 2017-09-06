import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ButtonComponent } from './button.component'
import { PageNotFoundComponent } from './page-not-found.component'

@NgModule({
    imports: [ CommonModule ],
    declarations: [ ButtonComponent, PageNotFoundComponent ],
    exports: [ ButtonComponent, PageNotFoundComponent ],
    providers: []
})
export class SharedModule {}