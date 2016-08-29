import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { routing } from './app.routing';
import { LoginComponent } from './dashboard/login.component';
import {DashboardModule} from './dashboard/dashboard.module'
// import { PrivateComponent } from './dashboard/private.component';
// import { OverviewComponent } from './dashboard/overview.component'
import { HttpModule, JsonpModule} from '@angular/http'

@NgModule({
  imports:      [ BrowserModule, FormsModule, routing, HttpModule, JsonpModule, DashboardModule ],
  declarations: [ AppComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

