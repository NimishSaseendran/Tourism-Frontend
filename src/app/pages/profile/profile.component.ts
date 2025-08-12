import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BookingHistoryComponent } from "../../component/booking-history/booking-history.component";
import { SavedPlaceComponent } from "../../component/saved-place/saved-place.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BookingHistoryComponent,
    SavedPlaceComponent
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  profileForm: FormGroup
  arrProfile: any = [];
  isEditEnabled: boolean = false;

  constructor(
    private fb: FormBuilder
  ) {
    this.profileForm = this.fb.group({
      strFullName: [{ value: '', disabled: true }],
      strNickName: [{ value: '', disabled: true }],
      strEmail: [{ value: '', disabled: true }],
      strPhone: [{ value: '', disabled: true }],
      strGender: [{ value: '', disabled: true }],
      strCountry: [{ value: '', disabled: true }],
      strLanguage: [{ value: '', disabled: true }],
      strTimeZone: [{ value: '', disabled: true }]
    });
  }

  ngOnInit(): void {
    this.arrProfile = {
      strFullName: "Nimish Saseendran",
      strNickName: "Kannan",
      strEmail: "nimish@gmail.com",
      strPhone: "+91 9876543210",
      strGender: "Male",
      strCountry: "India",
      strLanguage: "English",
      strTimeZone: "Asia/Kolkata (India Standard Time)"
    };
    this.profileForm.patchValue(this.arrProfile);
  }

  enableEditMode(): void {
    this.profileForm.enable();
    this.isEditEnabled = true
  }

  fnOnSubmit() {
    this.profileForm.disable();
    this.isEditEnabled = false
  }

}
