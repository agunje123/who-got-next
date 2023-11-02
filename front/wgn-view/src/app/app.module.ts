import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './modules/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './components/map/map/map.component';
import { CreateMatchFormComponent } from './components/create-match-form/create-match-form.component';

//SERVICES
import { SettingsService } from './services/settings.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapComponent,
    CreateMatchFormComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
