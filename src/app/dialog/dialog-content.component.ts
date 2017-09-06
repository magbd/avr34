import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef } from '@angular/material'
import { MD_DIALOG_DATA } from '@angular/material'
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/material'

import { FormInscriptionComponent } from '../form/form-inscription.component'

@Component({
  selector: 'dialog-content',
  templateUrl: './dialog-content.component.html'
})
export class DialogContentComponent implements OnInit {

  constructor(public thisDialogRef: MdDialogRef<DialogContentComponent>, @Inject(MD_DIALOG_DATA) public data: string ) { }

  ngOnInit() {
  }

  // onCloseConfirm() {
  //   this.thisDialogRef.close('Confirm')
  // }

  // onCloseCancel() {
  //   this.thisDialogRef.close('Cancel')
  // }

}
