import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suppliers-inscription',
  templateUrl: './suppliers-inscription.component.html',
  styleUrls: ['./suppliers-inscription.component.css']
})
export class SuppliersInscriptionComponent implements OnInit {

  currentPage: string = 'inscription1'

  ngOnInit() {
  }

  goToPage(page: string) {
    this.currentPage = page
  }

}
