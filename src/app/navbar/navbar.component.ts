import { Component } from '@angular/core'
import { SuppliersComponent } from '../suppliers/suppliers.component'
import { MdDialog } from '@angular/material'

@Component({
	moduleId: module.id,
  selector: 'navbar-component',
  styleUrls: ['./navbar.component.css'],
  templateUrl: './navbar.component.html',
})

export class NavbarComponent {

  constructor(public dialog: MdDialog) { }

  openSupplierDialog() {
    let dialogRef = this.dialog.open(SuppliersComponent, {width: '700px'})
  }
}
