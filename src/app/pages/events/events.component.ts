import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-events',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {

  arrEvents = [
    {
      id: 1,
      name: "Thrissur Pooram",
      slug: 'thrissur-pooram',
      description: "One of the most spectacular temple festivals in Kerala, known for its grand elephant procession, fireworks, and traditional music.",
      date: {
        from: "2025-05-12",
        to: "2025-05-13"
      },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaZgAISwG8cu5udXtS7bSkrX4cnIM8XI5og&s",
      location: "Vadakkunnathan Temple, Thrissur",
      highlights: [
        "30+ caparisoned elephants",
        "Melam (traditional orchestra)",
        "Fireworks display",
        "Kudamattom umbrella exchange"
      ],
      organizer: "Thrissur Devaswom Board",
      entryFee: "Free",
      contact: "+91 9876543210",
      tags: ["festival", "temple", "cultural", "music"]
    },
    {
      id: 2,
      name: "Nishagandhi Dance Festival",
      slug: 'nishagandhi',
      description: "A week-long celebration of Indian classical dance and music featuring renowned artists from all over India.",
      date: {
        from: "2025-01-20",
        to: "2025-01-26"
      },
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToHlhQKjVFOX3Vgl6E8abivY-cAumbtmMSfQ&s",
      location: "Kanakakkunnu Palace, Thiruvananthapuram",
      highlights: [
        "Bharatanatyam, Kathak, Kuchipudi performances",
        "Music concerts",
        "Cultural stalls"
      ],
      organizer: "Kerala Tourism Department",
      entryFee: "₹100 per day",
      contact: "+91 9447321211",
      tags: ["dance", "music", "art", "festival"]
    },
    {
      id: 3,
      name: "Alleppey Boat Race",
      slug: 'alappey-boat-race',
      description: "A thrilling snake boat race held during the Onam festival season on the serene backwaters of Alleppey.",
      date: {
        on: "2025-08-30"
      },
      image: "https://c8.alamy.com/comp/CWP9D7/nehru-trophy-snake-boat-race-during-onam-celebration-in-alleppey-alappuzha-CWP9D7.jpg",
      location: "Punnamada Lake, Alappuzha",
      highlights: [
        "Chundan Vallam (snake boat) race",
        "Folk performances",
        "Tourist seating areas",
        "Live commentary"
      ],
      organizer: "Alleppey Boat Club",
      entryFee: "₹200 (seating area)",
      contact: "+91 9638527410",
      tags: ["onam", "boat race", "traditional", "sports"]
    },
    {
      id: 4,
      name: "International Film Festival of Kerala (IFFK)",
      slug: 'iffk',
      description: "One of Asia's best film festivals featuring global and regional cinema, seminars, and filmmaker interactions.",
      date: {
        from: "2025-12-06",
        to: "2025-12-13"
      },
      image: "https://keralafilm.com/wp-content/uploads/2024/10/channels4_profile.jpg",
      location: "Multiple Theatres, Thiruvananthapuram",
      highlights: [
        "World cinema screenings",
        "Masterclasses",
        "Red carpet openings",
        "Award ceremonies"
      ],
      organizer: "Kerala State Chalachitra Academy",
      entryFee: "Festival pass: ₹500",
      contact: "+91 8123456789",
      tags: ["cinema", "festival", "international", "art"]
    }
  ];

  getFirstKey(obj: any): string {
    return Object.keys(obj)[0];
  }

}
