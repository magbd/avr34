import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
  selector: 'home',
  template: `
  <home-jumbotron></home-jumbotron>
  <home-content-component></home-content-component>
  `
})

export class HomeComponent {
  // title = 'home';
}
