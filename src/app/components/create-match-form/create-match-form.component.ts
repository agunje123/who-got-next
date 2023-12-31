import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MapService } from 'src/app/services/map.service';
import { SettingsService } from 'src/app/services/settings.service';
import { SupabaseService } from 'src/app/services/supabase.service';
import { Match } from 'src/assets/model/match.model';

@Component({
  selector: 'app-create-match-form',
  templateUrl: './create-match-form.component.html',
  styleUrls: ['./create-match-form.component.scss'],
})
export class CreateMatchFormComponent implements OnInit {
  form: FormGroup;
  isMobile: boolean = false;
  isMapOpen: boolean = false;

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService,
    private supabaseService: SupabaseService,
    private mapService: MapService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      currentPlayers: [null, [Validators.required, Validators.min(0)]],
      playersNeeded: [null, [Validators.required, Validators.min(0)]],
      courtName: [null, [Validators.required]],
      longitude: [null, Validators.required],
      latitude: [null, Validators.required],
    });

    this.mapService.isMapOpenSub.subscribe((res) => {
      this.isMapOpen = res;
    });

    this.mapService.coordinatesSub.subscribe((coordinates) => {
      this.form.get('latitude')?.setValue(coordinates[0]);
      this.form.get('longitude')?.setValue(coordinates[1]);
    });

    this.settingsService.mobileViewSubject.subscribe((result) => {
      this.isMobile = result;
    });
  }

  onOpenMap() {
    this.isMapOpen = true;
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      const newMatch = new Match(
        formData.currentPlayers,
        formData.playersNeeded,
        formData.courtName,
        formData.longitude,
        formData.latitude
      );
      this.supabaseService.createMatch(newMatch);
      this.form.reset();
      setTimeout(() => {
        this.settingsService.showTableSub.next(true);
      }, 500);
    } else {
      console.log('Please fill in the correct values.');
    }
  }
}
