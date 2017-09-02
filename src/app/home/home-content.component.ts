import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
  selector: 'home-content-component',
  styleUrls: ['./home-content.component.css'],
  templateUrl: './home-content.component.html',
})

export class HomeContentComponent {

  openForm = () => console.log('openForm')
  
}
