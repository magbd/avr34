import { Component } from '@angular/core'
// import { FormsModule, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms'

import {InjectionToken} from '@angular/core';
import {FormsModule, FormControl, FormGroupDirective, NgForm} from '@angular/forms';

/** Injection token that can be used to specify the global error options. */
export const MD_ERROR_GLOBAL_OPTIONS = new InjectionToken<ErrorOptions>('md-error-global-options');

export type ErrorStateMatcher =
    (control: FormControl, form: FormGroupDirective | NgForm) => boolean;

export interface ErrorOptions {
  errorStateMatcher?: ErrorStateMatcher;
}

// /** Returns whether control is invalid and is either touched or is a part of a submitted form. */
// export function defaultErrorStateMatcher(control: FormControl, form: FormGroupDirective | NgForm) {
//   const isSubmitted = form && form.submitted;
//   return !!(control.invalid && (control.touched || isSubmitted));
// }

// /** Returns whether control is invalid and is either dirty or is a part of a submitted form. */
// export function showOnDirtyErrorStateMatcher(control: FormControl,
//     form: FormGroupDirective | NgForm) {
//   const isSubmitted = form && form.submitted;
//   return !!(control.invalid && (control.dirty || isSubmitted));
// }

@Component({
	moduleId: module.id,
  selector: 'form-inscription',
  templateUrl: 'form-inscription.component.html',
  styleUrls: ['./form-inscription.component.css']
})

export class FormInscriptionComponent {

  showOnDirtyErrorStateMatcher(control: FormControl,
    form: FormGroupDirective | NgForm) {
  const isSubmitted = form && form.submitted;
  return !!(control.invalid && (control.dirty || isSubmitted));
}
  }

