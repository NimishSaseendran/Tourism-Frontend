import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-local-guide',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './local-guide.component.html',
  styleUrls: ['./local-guide.component.scss']
})
export class LocalGuideComponent implements OnInit {

  guideForm!: FormGroup;
  sameAsPhone: boolean = false;
  isDatepickerOpen: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.guideForm = this.fb.group({
      fullName: ['', Validators.required],
      profilePic: [null],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      whatsapp: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      location: ['', Validators.required]
    });

    // If phone number changes and checkbox is checked, update WhatsApp
    this.guideForm.get('phone')?.valueChanges.subscribe((phoneValue) => {
      if (this.sameAsPhone) {
        this.guideForm.get('whatsapp')?.setValue(phoneValue);
      }
    });
  }

  copyPhoneToWhatsapp(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    this.sameAsPhone = checked;

    const phoneValue = this.guideForm.get('phone')?.value;

    if (checked) {
      this.guideForm.get('whatsapp')?.setValue(phoneValue);
      this.guideForm.get('whatsapp')?.disable();
    } else {
      this.guideForm.get('whatsapp')?.enable();
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.guideForm.patchValue({ profilePic: file });
    }
  }

  onSubmit() {
    this.router.navigate(['subscription'])
    // if (this.guideForm.invalid) {
    //   console.log('error');
    //   return
    // } else {
    //   console.log('success');
    //   console.log(this.guideForm.value);
    // }
  }

}
