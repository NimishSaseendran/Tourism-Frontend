import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-activity-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent {

  activity: any;
  quickInfo: any[] = [];

  ngOnInit(): void {
    // ✅ Assign activity first
    this.activity = {
      name: 'Paragliding in Varkala',
      slug: 'paragliding-varkala',
      location: 'Varkala',
      image: 'https://www.adventurush.com/wp-content/uploads/2022/07/Paragliding-in-Manali.jpg',
      category: 'Adventure',
      description: 'Soar above the cliffs and beaches for an unforgettable aerial view of Varkala.',
      duration: '15–30 minutes',
      price: '₹3000–₹4500',
      rating: 4.9,
      tags: ['Adventure', 'Aerial', 'Beach'],
      availableDays: ['Friday', 'Saturday', 'Sunday'],
      shortLabel: 'Fly Over Cliffs',
      icon: 'fa-solid fa-parachute-box',
      isSafe: true,
      isBookable: true,
      provider: 'Varkala Sky Club',
      contactLink: 'https://wa.me/917876543219',
      metaTitle: 'Paragliding in Varkala - Kerala Adventure Activity',
      metaDescription: 'Fly high above Varkala beach and enjoy the thrill of paragliding over the Arabian Sea.',
      coordinates: {
        lat: 8.7378,
        lng: 76.7163
      }
    };

    // ✅ Then build quickInfo using activity
    this.quickInfo = [
      { label: 'Duration', icon: 'fa-solid fa-clock', value: this.activity.duration, color: 'primary' },
      { label: 'Price', icon: 'fa-regular fa-money-bill-1', value: this.activity.price, color: 'success' },
      { label: 'Available', icon: 'fa fa-calendar-check', value: this.activity.availableDays.join(', '), color: 'danger' },
      { label: 'Provider', icon: 'fa fa-user', value: this.activity.provider, color: 'info' }
    ];
  }

  openWhatsApp(link: string) {
    if (link) window.open(link, '_blank');
  }

}
