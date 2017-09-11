import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material'

@Component({
  selector: 'suppliers-login',
  templateUrl: './suppliers-login.component.html',
  styleUrls: ['./suppliers-login.component.css']
})
export class SuppliersLoginComponent implements OnInit {

  currentPage: string = 'login'

  ngOnInit() {
  }

  goToPage(page: string) {
    this.currentPage = page
  }

}
