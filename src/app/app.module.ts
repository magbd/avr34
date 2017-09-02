import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { NavbarModule } from './navbar/navbar.module'
import { HomeModule } from './home/home.module'
import { AproposModule } from './a-propos/apropos.module'
// import { FormModule } from './form/form.module'
// import { SharedModule } from './shared/shared.module'

import { AppRoutingModule }     from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    HomeModule,
    AproposModule,
    // FormModule,
    // SharedModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
