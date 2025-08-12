import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-package-details',
  imports: [
    CommonModule
  ],
  templateUrl: './package-details.component.html',
  styleUrl: './package-details.component.scss'
})
export class PackageDetailsComponent {

  package =
    {
      slug: 'romantic-honeymoon',
      name: 'Romantic Honeymoon Escape',
      price: 34999,
      duration: '6 Days / 5 Nights',
      places: 'Munnar, Alleppey, Varkala',
      groupSize: 'Couples only',
      shortDescription: 'Luxurious stays, candlelit dinners, and serene backwater cruises for couples.',
      longDescription: `
      Discover the romantic charm of Kerala with specially curated experiences 
      for honeymooners. From candlelit dinners by the backwaters to stays in 
      heritage resorts nestled in the hills, this journey blends privacy, 
      comfort, and natural beauty for the perfect start to your married life.
    `,
      image: 'https://www.gtholidays.in/wp-content/uploads/2022/02/India-Honeymoon-Packages.jpg',
      itinerary: [
        {
          day: 1,
          title: 'Arrival in Kochi & City Exploration',
          description: 'Arrive at Kochi International Airport, check-in to hotel. Visit Fort Kochi, Dutch Palace, St. Francis Church and enjoy a Kathakali performance in the evening.',
          image: 'https://d3sftlgbtusmnv.cloudfront.net/blog/wp-content/uploads/2025/01/Kochi-Travel-Guide-Cover-Photo-840x425.jpg',
          activities: [
            'Airport pickup & hotel check-in',
            'Visit Fort Kochi and Dutch Palace',
            'St. Francis Church exploration',
            'Evening Kathakali performance'
          ]
        },
        {
          day: 2,
          title: 'Munnar Hills & Tea Plantations',
          description: 'Drive to Munnar. En route, witness Cheeyappara waterfalls. Explore tea plantations, Tea Museum, and Mattupetty Dam. Relax in cool hill station vibes.',
          image: 'https://static.toiimg.com/thumb/115812747/Munnar-tea-gardens.jpg?width=1200&height=900',
          activities: [
            'Drive through scenic Western Ghats',
            'Visit Cheeyappara waterfalls',
            'Explore tea plantations & Tea Museum',
            'Mattupetty Dam and boating'
          ]
        },
        {
          day: 3,
          title: 'Munnar Nature Trails',
          description: 'Visit Eravikulam National Park, Blossom Park, and Echo Point. Enjoy boating at Kundala Lake and spot the Nilgiri Tahr.',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3e-MCy6T1ur65IycRMhUWa_KVplc11apfA&s',
          activities: [
            'Visit Eravikulam National Park',
            'Nature walk at Blossom Park',
            'Echo Point photography',
            'Boating at Kundala Lake'
          ]
        },
        {
          day: 4,
          title: 'Thekkady & Wildlife Adventure',
          description: 'Proceed to Thekkady. Enjoy a boat ride in Periyar Lake, explore spice plantations and attend a Kalaripayattu (martial arts) show.',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOP7y0AWufMY4eVAusj9bwaDbOrr3Z5vxJcw&s',
          activities: [
            'Scenic drive to Thekkady',
            'Periyar Lake wildlife boating',
            'Spice plantation tour',
            'Kalaripayattu martial arts performance'
          ]
        },
        {
          day: 5,
          title: 'Alleppey Backwaters Houseboat',
          description: 'Head to Alleppey. Check-in to a traditional houseboat. Cruise through palm-lined canals and enjoy freshly cooked Kerala cuisine on board.',
          image: 'https://www.tripsavvy.com/thmb/_IW5qmzxk99F2FLSfu1uu4tIm58=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/houseboats_in_kottayam_2_438-56a3be175f9b58b7d0d39246.jpg',
          activities: [
            'Transfer to Alleppey',
            'Check-in to luxury houseboat',
            'Backwater cruise & sightseeing',
            'Onboard Kerala-style meals'
          ]
        },
        {
          day: 6,
          title: 'Departure from Kochi',
          description: 'Disembark from the houseboat after breakfast. Drive back to Kochi and transfer to airport with unforgettable memories of Kerala.',
          image: 'https://www.keralatourism.org/images/microsites/kochi/kochi.jpg',
          activities: [
            'Houseboat checkout & breakfast',
            'Drive to Kochi',
            'Airport drop-off',
            'Tour ends with memories'
          ]
        }
      ],
      highlights: [
        'Private candlelit dinner setup',
        'Luxury houseboat overnight stay',
        'Couple’s Ayurvedic massage',
        'Professional photo shoot in tea gardens',
        'Romantic beachside resort'
      ],
      inclusions: [
        '5 Nights accommodation',
        'Daily breakfast + 2 special dinners',
        '1-night luxury houseboat (full board)',
        'Transfers in private A/C car',
        'Sightseeing with entry tickets',
        'Welcome drink & honeymoon cake'
      ],
      exclusions: [
        'Airfare or train fare',
        'Personal expenses (laundry, tips, etc.)',
        'Travel insurance',
        'Meals not mentioned',
        'Early check-in or late checkout charges'
      ],
      reviews: [
        { user: 'John D.', comment: 'Perfect honeymoon experience!', rating: 5 },
        { user: 'Aisha K.', comment: 'Peaceful and romantic. Loved it.', rating: 4.5 },
        { user: 'Rahul & Neha', comment: 'Great itinerary and perfect resorts. Highly recommended!', rating: 5 }
      ],
      faqs: [
        {
          question: 'Is the package customizable?',
          answer: 'Yes, we can adjust the itinerary, duration, and hotel preferences.'
        },
        {
          question: 'Are meals included?',
          answer: 'Breakfast is included every day. Two special dinners and full meals during houseboat stay are covered.'
        },
        {
          question: 'What documents are needed?',
          answer: 'Valid ID proof (Aadhaar/Passport) and vaccination certificate if required by local authorities.'
        }
      ],
      contactCTA: {
        title: 'Ready to Book Your Dream Honeymoon?',
        buttonText: 'Book Now',
        supportPhone: '+91-9876543210',
        email: 'honeymoon@keralatourism.com'
      }
    }


}
