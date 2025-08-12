import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-booking-history',
  imports: [
    CommonModule
  ],
  templateUrl: './booking-history.component.html',
  styleUrl: './booking-history.component.scss'
})
export class BookingHistoryComponent {

  arrBookingHistory = [
    {
      bookingId: "TRIP001",
      destination: "Munnar",
      startDate: "2024-12-10",
      endDate: "2024-12-14",
      bookingDate: "2024-11-20",
      status: "Completed",
      activities: ["Trekking", "Tea Plantation Visit", "Boating"],
      guideAssigned: "Akhil Raj",
      totalAmount: 7500,
      rating: 4.5,
      review: "Beautiful place and excellent local guide!"
    },
    {
      bookingId: "TRIP002",
      destination: "Alleppey",
      startDate: "2025-01-15",
      endDate: "2025-01-17",
      bookingDate: "2025-01-01",
      status: "Cancelled",
      activities: ["Houseboat Stay", "Kayaking"],
      guideAssigned: "",
      totalAmount: 4200,
      rating: null,
      review: null
    },
    {
      bookingId: "TRIP003",
      destination: "Wayanad",
      startDate: "2025-08-12",
      endDate: "2025-08-16",
      bookingDate: "2025-07-05",
      status: "Upcoming",
      activities: ["Wildlife Safari", "Hiking"],
      guideAssigned: "Lakshmi Menon",
      totalAmount: 8800,
      rating: null,
      review: null
    }
  ];

}
