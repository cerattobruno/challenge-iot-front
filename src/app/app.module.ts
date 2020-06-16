import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule  } from '@angular/common/http';
// import { GoogleChartsModule } from 'angular-google-charts';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './components/shared/shared.component';
import { PagesComponent } from './components/pages/pages.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ListDevicesComponent } from './components/pages/list-devices/list-devices.component';
import { NewDeviceComponent } from './components/pages/new-device/new-device.component';
import { EditDeviceComponent } from './components/pages/edit-device/edit-device.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    PagesComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    ListDevicesComponent,
    NewDeviceComponent,
    EditDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
