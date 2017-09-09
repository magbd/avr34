import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suppliers-choice',
  templateUrl: './suppliers-choice.component.html',
  styleUrls: ['./suppliers-choice.component.css']
})
export class SuppliersChoiceComponent implements OnInit {

  currentPage: string = 'choice'

  ngOnInit() {
  }

  goToPage(page: string) {
    this.currentPage = page
  }

}
