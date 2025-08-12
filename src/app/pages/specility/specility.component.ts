import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-specility',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './specility.component.html',
  styleUrl: './specility.component.scss'
})
export class SpecilityComponent {

  arrSpecialityTourPackage = {
    sections: {
      heroBanner: {
        image: 'https://www.gujaratpackage.com/wp-content/uploads/2017/11/cropped-banner-about-gujarat.jpg',
        heading: 'Explore Kerala with Our Tour Packages',
        subheading: 'Discover nature, culture, and wellness like never before!'
      },
      overview: {
        content: 'Our handpicked Kerala tour packages offer you the best of the state—from tranquil backwaters and vibrant festivals to lush forests and Ayurvedic rejuvenation. Choose the perfect journey tailored to your style and schedule.'
      },
      packages: [
        {
          name: 'Romantic Honeymoon Escape',
          price: 34999,
          image: 'https://www.gtholidays.in/wp-content/uploads/2022/02/India-Honeymoon-Packages.jpg',
          slug: 'romantic-honeymoon',
          shortDescription: 'Luxurious stays, candlelit dinners, and serene backwater cruises for couples.',
          duration: '6 Days / 5 Nights',
          places: 'Munnar, Alleppey, Varkala',
          groupSize: 'Couples only',
          tags: ['Couple Special', 'Luxury', 'Popular']
        },
        {
          name: 'Ayurveda Detox & Wellness',
          price: 28999,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYcfxfgGDSYH_eshxfSG3nVXWnzBxw1gK0g&s',
          slug: 'ayurveda-detox',
          shortDescription: 'Rejuvenate with traditional therapies and yoga in peaceful Kerala retreats.',
          duration: '7 Days / 6 Nights',
          places: 'Kovalam, Varkala, Thekkady',
          groupSize: '1–4 people',
          tags: ['Wellness', 'Eco-Friendly', 'Luxury']
        },
        {
          name: 'Kerala Wildlife Adventure',
          price: 25999,
          image: 'https://www.ekeralatourism.net/wp-content/uploads/2016/05/Periyar-Wildlife-Sanctuary.jpg',
          slug: 'wildlife-adventure',
          shortDescription: 'Trek, camp, and spot exotic species in Kerala’s vibrant sanctuaries.',
          duration: '5 Days / 4 Nights',
          places: 'Wayanad, Periyar, Silent Valley',
          groupSize: '4–10 adventurers',
          tags: ['Adventure', 'Eco-Friendly']
        },
        {
          name: 'Backwater Houseboat Holiday',
          price: 18999,
          image: 'https://www.tripsavvy.com/thmb/_IW5qmzxk99F2FLSfu1uu4tIm58=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/houseboats_in_kottayam_2_438-56a3be175f9b58b7d0d39246.jpg',
          slug: 'backwater-houseboat',
          shortDescription: 'Sail through serene backwaters in private, fully-serviced houseboats.',
          duration: '3 Days / 2 Nights',
          places: 'Alleppey, Kumarakom',
          groupSize: '2–6 people',
          tags: ['Luxury', 'Popular']
        },
        {
          name: 'Kerala Heritage & Culture Trail',
          price: 21999,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJksjpcbgwfioNF50WpdabRRvtdJEA2NjFMg&s',
          slug: 'heritage-trail',
          shortDescription: 'Explore palaces, museums, local festivals, and colonial architecture.',
          duration: '6 Days / 5 Nights',
          places: 'Kochi, Thrissur, Alleppey',
          groupSize: '4–12 people',
          tags: ['Culture', 'Family Friendly']
        },
        {
          name: 'Monsoon Magic Kerala',
          price: 16999,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnupL4FQypChhYf8XLm-GIysjG_199pQnAOA&s',
          slug: 'monsoon-magic',
          shortDescription: 'Experience the lush greenery and cool breezes during Kerala’s magical rains.',
          duration: '4 Days / 3 Nights',
          places: 'Athirapally, Vagamon, Ponmudi',
          groupSize: 'Any',
          tags: ['Eco-Friendly', 'Budget', 'New']
        },
        {
          name: 'Spiritual Kerala Retreat',
          price: 19999,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwYUJvwj3niPDSkTHZz9DH5xyDQ6I0Dv8T8Q&s',
          slug: 'spiritual-kerala',
          shortDescription: 'Connect with Kerala’s spiritual roots through ancient temples and rituals.',
          duration: '5 Days / 4 Nights',
          places: 'Trivandrum, Guruvayur, Sabarimala',
          groupSize: '2–10 people',
          tags: ['Spiritual', 'Culture', 'Popular']
        }
      ],
      inclusions: [
        'Accommodation in 3-star hotels',
        'Daily breakfast and dinner',
        'Private vehicle with driver',
        'Local guide for select destinations',
        'All applicable taxes'
      ],
      exclusions: [
        'Airfare or train tickets',
        'Personal expenses',
        'Travel insurance',
        'Optional activities not listed',
        'Meals not mentioned'
      ],
      reviews: [
        {
          name: 'Amit Raj',
          rating: 5,
          comment: 'Loved every moment of the Spiritual Kerala tour. Very peaceful and well organized!'
        },
        {
          name: 'Fatima S.',
          rating: 4,
          comment: 'The Ayurveda package was exactly what I needed. Great value and healing experience!'
        }
      ],
      faq: [
        {
          question: 'Can I customize a package?',
          answer: 'Yes, you can request changes before booking, including dates and experiences.'
        },
        {
          question: 'Is hotel pickup available?',
          answer: 'Yes, we provide pickup from your arrival point—airport, railway, or bus stand.'
        }
      ],
      cta: {
        title: 'Ready to Explore Kerala?',
        buttonText: 'Book Your Tour Now',
        link: '/booking'
      }
    }
  };

  getTagClass(tag: string): string {
    switch (tag) {
      case 'Popular': return 'bg-primary';
      case 'New': return 'bg-success';
      case 'Eco-Friendly': return 'bg-success';
      case 'Adventure': return 'bg-danger';
      case 'Family Friendly': return 'bg-warning text-dark';
      case 'Budget': return 'bg-info text-dark';
      case 'Luxury': return 'bg-dark';
      case 'Couple Special': return 'bg-pink';
      case 'Culture': return 'bg-secondary';
      case 'Spiritual': return 'bg-indigo text-light';
      case 'Wellness': return 'bg-success';
      default: return 'bg-secondary';
    }
  }

  getTagIcon(tag: string): string {
    switch (tag) {
      case 'Popular': return 'fa-fire';
      case 'New': return 'fa-star';
      case 'Eco-Friendly': return 'fa-leaf';
      case 'Adventure': return 'fa-mountain';
      case 'Family Friendly': return 'fa-people-group';
      case 'Budget': return 'fa-wallet';
      case 'Luxury': return 'fa-gem';
      case 'Couple Special': return 'fa-heart';
      case 'Culture': return 'fa-landmark';
      case 'Spiritual': return 'fa-om';
      case 'Wellness': return 'fa-spa';
      default: return 'fa-tag';
    }
  }

}
