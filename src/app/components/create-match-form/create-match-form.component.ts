import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MapService } from 'src/app/services/map.service';
import { SettingsService } from 'src/app/services/settings.service';
import { SupabaseService } from 'src/app/services/supabase.service';

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
      longitude: [null, [Validators.required]],
      latitude: [null, [Validators.required]],
    });

    this.mapService.coordinatesSub.subscribe((coordinates) => {
      this.form.value.latitude = coordinates[0];
      this.form.value.longitude = coordinates[1];
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
      console.log(formData);
    } else {
      console.log('Please enter the correct values.');
    }
  }
}
