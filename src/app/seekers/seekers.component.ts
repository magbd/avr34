import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seekers',
  templateUrl: './seekers.component.html',
  styleUrls: ['./seekers.component.css']
})
export class SeekersComponent implements OnInit {

  currentPage: string = 'page1'

  ngOnInit() {
  }

  goToPage(page: string) {
    this.currentPage = page
  }
}
