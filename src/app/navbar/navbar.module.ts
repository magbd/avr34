import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router';
import { SuppliersModule } from '../suppliers/suppliers.module'

import { NavbarComponent } from './navbar.component'

@NgModule({
    imports: [ CommonModule, RouterModule, SuppliersModule ],
    declarations: [ NavbarComponent ],
    exports: [ NavbarComponent, RouterModule ],
    providers: []
})
export class NavbarModule {}

