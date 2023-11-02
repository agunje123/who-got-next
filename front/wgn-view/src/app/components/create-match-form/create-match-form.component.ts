import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-match-form',
  templateUrl: './create-match-form.component.html',
  styleUrls: ['./create-match-form.component.scss'],
})
export class CreateMatchFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      activityType: ['', Validators.required],
      currentPlayers: [null, [Validators.required, Validators.min(0)]],
      playersNeeded: [null, [Validators.required, Validators.min(0)]],
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
