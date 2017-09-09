import { Component, OnInit } from '@angular/core';
import { SeekersComponent } from '../seekers/seekers.component'
import { MdDialog } from '@angular/material'

@Component({
	moduleId: module.id,
  selector: 'home-content-component',
  styleUrls: ['./home-content.component.css'],
  templateUrl: './home-content.component.html',
})


export class HomeContentComponent implements OnInit {
  
    constructor(public dialog: MdDialog) { }
  
    // dialogResult = ''
  
    ngOnInit() {
    }
  
    openDialog() {
      let dialogRef = this.dialog.open(SeekersComponent, {
        width: '700px',
        // data: 'This text come from dialog.component'
      })
      // dialogRef.afterClosed().subscribe(result => {
      //   console.log(`Dialog closed: ${result}`)
      //   this.dialogResult = result
      // })
    }
  
  }
