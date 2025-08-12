import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-place-details',
  imports: [
    CommonModule
  ],
  templateUrl: './place-details.component.html',
  styleUrl: './place-details.component.scss'
})
export class PlaceDetailsComponent {

  placeDetails = {
    title: "Munnar",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/db/d3/f9/munnar-largejpg.jpg?w=700&h=400&s=1",
    location: "Idukki, Kerala",
    description: `Munnar is a picturesque hill station in Kerala, famous for its sprawling tea gardens, rolling hills, and cool climate. It's a haven for honeymooners, nature lovers, and adventure seekers.`,

    arrImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/db/d3/f9/munnar-largejpg.jpg?w=700&h=400&s=1',
      'https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Fmobile%2Fmunnar-1723101236_d37cb4a4260539e5debd.webp&w=3840&q=75',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwgQTDJwBCthykDz9GlMAGeq5BXjMPkCnT3Q&s',
      'https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Ftablet%2Fmunnar-blooms-blue-1743492906_7c09c3cad2add1e5fa89.webp&w=1920&q=75',
      'https://s7ap1.scene7.com/is/image/incredibleindia/top-station-munnar-kerala-1-attr-hero?qlt=82&ts=1726672844426'
    ],
    highlights: [
      "Lush tea plantations",
      "Eravikulam National Park",
      "Scenic hill views at Top Station",
      "Boating at Mattupetty Dam",
      "Kundala Lake and Echo Point"
    ],

    travelTips: [
      "Pack warm clothes even in summer – evenings are chilly.",
      "Avoid visiting during heavy monsoon (June to August).",
      "Best enjoyed with at least a 2-night stay.",
      "Hire a local jeep for remote points like Kolukkumalai."
    ],

    howToReach: {
      byAir: "Nearest airport: Cochin International Airport (approx. 110 km).",
      byTrain: "Aluva is the nearest major railway station (110 km).",
      byRoad: "Connected via NH85 from Kochi and other nearby towns. Regular buses and taxis available."
    },

    bestTimeToVisit: "October to March",
    idealDuration: "2 - 3 Days",
    averageCost: "₹5,000 - ₹8,000 per person",

    activities: [
      "Tea factory tour",
      "Hiking at Anamudi Peak",
      "Camping in tea estates",
      "Wildlife safari in Eravikulam",
      "Boating in Kundala Lake"
    ],

    localFood: [
      "Appam with stew",
      "Malabar parotta with beef curry",
      "Puttu & Kadala curry",
      "Freshly brewed Kerala tea",
      "Banana chips & coconut sweets"
    ],

    nearbyPlaces: [
      "Thekkady – Wildlife & Periyar lake",
      "Marayoor – Sandalwood forests",
      "Kolukkumalai – World’s highest tea plantation",
      "Chinnar Wildlife Sanctuary",
      "Pallivasal Waterfalls"
    ],

    climate: "Pleasant year-round, 15°C to 25°C; colder in winter nights.",
    famousFor: [
      "Tea estates",
      "Romantic getaways",
      "Cool climate",
      "Nature photography",
      "Adventure sports"
    ],

    emergencyContacts: {
      touristPolice: "100",
      hospital: "Munnar Government Hospital – 04865-230220",
      helpline: "Kerala Tourism Helpline – 1800-425-4747"
    },

    googleMapLink: {
      latitude: 10.0889,
      longitude: 77.0595
    }
  };

  get mapUrl(): string {
    const { latitude, longitude } = this.placeDetails.googleMapLink;
    return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  }

}
