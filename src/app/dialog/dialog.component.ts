// ------------------
// DEMO
// ------------------

import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material'
import { DialogContentComponent } from './dialog-content.component'

@Component({
  selector: 'dialog-component',
  templateUrl: './dialog.component.html'
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  // dialogResult = ''

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogContentComponent, {
      width: '600px',
      // data: 'This text come from dialog.component'
    })
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog closed: ${result}`)
    //   this.dialogResult = result
    // })
  }

}
