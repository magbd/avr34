import { Component, OnInit } from '@angular/core'
// import { FormsModule, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms'

import {InjectionToken} from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
	moduleId: module.id,
  selector: 'form-inscription',
  templateUrl: 'form-inscription.component.html',
  styleUrls: ['./form-inscription.component.css']
})

export class FormInscriptionComponent implements OnInit {

  currentPage: string = 'registerPage1'
    
  ngOnInit() {
  }

  goToPage(page: string) {
    this.currentPage = page
  }

  }

