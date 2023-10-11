import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './modules/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './components/map/map/map.component';

//SERVICES
import { SettingsService } from './services/settings.service';
import { MapService } from './services/map.service';

@NgModule({
  declarations: [AppComponent, NavbarComponent, MapComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [SettingsService, MapService],
  bootstrap: [AppComponent],
})
export class AppModule {}
