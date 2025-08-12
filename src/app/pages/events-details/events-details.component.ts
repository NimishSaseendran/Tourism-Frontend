import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events-details',
  imports: [
    CommonModule
  ],
  templateUrl: './events-details.component.html',
  styleUrl: './events-details.component.scss'
})
export class EventsDetailsComponent {

  slug: any;
  id: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug')!;
    this.id = this.route.snapshot.paramMap.get('id')!;

    console.log('Slug:', this.slug);
    console.log('ID:', this.id);
  }

  event = {
    id: 4,
    name: "International Film Festival of Kerala",
    slug: 'iffk',
    category: 'Movie',
    description: "One of Asia's best film festivals featuring global and regional cinema, seminars, and filmmaker interactions. The Vaishaka Mahotsavam, a 28-day festival held in the heart of a dense forest by the roaring River Bavali, offers an unparalleled experience unique to Kerala.",
    date: {
      from: "2025-12-06",
      to: "2025-12-13"
    },
    image: "https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Flarge-desktop%2Fvaishaka-mahotsavam-1724416418_352d83ab8439347ee408.webp&w=2048&q=75",
    location: "Multiple Theatres, Thiruvananthapuram",
    highlights: [
      "World cinema screenings",
      "Masterclasses",
      "Red carpet openings",
      "Award ceremonies"
    ],
    organizer: "Kerala State Chalachitra Academy",
    entryFee: "Festival pass: ₹500",
    contact: [
      { type: 'address', value: 'Tourism Office, Kottiyoor, Kannur, Kerala - 670651' },
      { type: 'landphone', value: '+91 497 264 1234' },
      { type: 'mobile', value: '+91 8123456789' },
      { type: 'email', value: 'info@kottiyoorfest.com' }
    ],
    tags: ["cinema", "festival", "international", "art"],
    disclaimer: "In Kerala, festival dates are decided in accordance with the Malayalam calendar and the local traditions and customs. We have calculated the festival dates based on these. But there can be changes in the dates according the customs and rituals associated with each place of worship.",
    howToReach: [
      {
        type: 'bus',
        title: 'By Bus',
        place: 'Thalassery KSRTC Bus Stand',
        distance: '56.2 km',
        description: 'Regular KSRTC and private buses are available from Thalassery to Kottiyoor. You can take direct buses or change at Kannur or Peravoor.'
      },
      {
        type: 'train',
        title: 'By Train',
        place: 'Thalassery Railway Station (TLY)',
        distance: '60 km',
        description: 'Thalassery is the nearest major railway station. Taxis and buses are available from the station to Kottiyoor.'
      },
      {
        type: 'flight',
        title: 'By Flight',
        place: 'Kannur International Airport (CNN)',
        distance: '50 km',
        description: 'Kannur Airport is the closest airport to Kottiyoor. Taxis and rental cars are available for direct travel to the festival location.'
      }
    ]
  };

  hospitalityServices = [
    {
      type: 'hotel',
      name: 'KTDC Tamarind Hotel, Thalassery',
      distance: '55 km from Kottiyoor',
      contact: {
        phone: '+91 490 2345678',
        email: 'tamarind.thalassery@ktdc.com',
        address: 'KTDC Tamarind, NH66, Thalassery, Kannur, Kerala'
      },
      description: 'A budget-friendly hotel offering AC and non-AC rooms with in-house dining and parking facilities.',
      rating: 3.8,
      facilities: ['AC Rooms', 'Restaurant', 'Parking', 'Wi-Fi']
    },
    {
      type: 'homestay',
      name: 'Green Woods Homestay',
      distance: '12 km from Kottiyoor',
      contact: {
        phone: '+91 8123456789',
        email: 'greenwoods@gmail.com',
        address: 'Palchuram Road, Near Peravoor, Kannur, Kerala'
      },
      description: 'A peaceful homestay nestled in the hills with traditional Kerala food and nature views.',
      rating: 4.4,
      facilities: ['Traditional Meals', 'Garden View', 'Trekking Assistance']
    },
    {
      type: 'resort',
      name: 'Hill View Eco Resort',
      distance: '15 km from Kottiyoor',
      contact: {
        phone: '+91 9495678910',
        email: 'info@hillvieweco.com',
        address: 'Kottiyoor Road, Peravoor, Kannur, Kerala'
      },
      description: 'Eco-friendly resort with premium cottages and scenic hill views. Ideal for families and nature lovers.',
      rating: 4.7,
      facilities: ['Cottages', 'Nature Trails', 'Campfire', 'Kids Play Area']
    },
    {
      type: 'dormitory',
      name: 'Pilgrim Dormitory Center',
      distance: '1.5 km from Kottiyoor Temple',
      contact: {
        phone: '+91 9876543210',
        email: 'dorms.kottiyoor@templetrust.in',
        address: 'Opp. Temple Gate, Kottiyoor, Kannur, Kerala'
      },
      description: 'Affordable dormitory facility for pilgrims with clean bathrooms and shared beds.',
      rating: 3.5,
      facilities: ['Shared Beds', 'Drinking Water', 'Toilets']
    }
  ];


}
