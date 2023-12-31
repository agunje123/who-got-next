import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService,
    private supabaseService: SupabaseService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      activityType: ['', Validators.required],
      currentPlayers: [null, [Validators.required, Validators.min(0)]],
      playersNeeded: [null, [Validators.required, Validators.min(0)]],
    });

    this.settingsService.mobileViewSubject.subscribe((result) => {
      this.isMobile = result;
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = this.form.value;
      // You can access the form values here and perform any actions, such as navigating to a location page.
      console.log(formData);
    } else {
      // Handle form validation errors, if any.
    }
  }
}
