import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MdDialogModule } from '@angular/material'

import { AppComponent } from './app.component'
import { NavbarModule } from './navbar/navbar.module'
import { HomeModule } from './home/home.module'
import { AproposModule } from './a-propos/apropos.module'
import { DialogModule } from './dialog/dialog.module'
import { FormModule } from './form/form.module'
// import { SharedModule } from './shared/shared.module'

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdDialogModule,
    NavbarModule,
    HomeModule,
    AproposModule,
    DialogModule,
    FormModule,
    // SharedModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
