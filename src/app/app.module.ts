import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { Menu1Component } from './menus/menu-1/menu1.component';
import { Menu2Component } from './menus/menu-1/menu2.component';
import { Menu3Component } from './menus/menu-1/menu3.component';
import { Menu4Component } from './menus/menu-1/menu4.component';
import { DonationComponent } from './donation/donation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Menu1Component,
    Menu2Component,
    Menu3Component,
    Menu4Component,
    DonationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
