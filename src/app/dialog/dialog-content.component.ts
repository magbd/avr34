import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef } from '@angular/material'
import { MD_DIALOG_DATA } from '@angular/material'

@Component({
  selector: 'dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {

  constructor(public thisDialogRef: MdDialogRef<DialogContentComponent>, @Inject(MD_DIALOG_DATA) public data: string ) { }

  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close('Confirm')
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel')
  }

}
