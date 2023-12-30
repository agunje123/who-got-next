import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

//COMPONENTS
import { NavbarComponent } from './components/navbar/navbar.component';
import { MapComponent } from './components/map/map/map.component';
import { CreateMatchFormComponent } from './components/create-match-form/create-match-form.component';

//SERVICES
import { SettingsService } from './services/settings.service';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapComponent,
    CreateMatchFormComponent,
    MatchesTableComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent],
})
export class AppModule {}