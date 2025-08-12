import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities',
  imports: [
    CommonModule
  ],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {

  constructor(
    private router: Router
  ) { }

  activities = [
    {
      name: 'Backwater Cruise',
      slug: 'backwater-cruise',
      location: 'Alleppey',
      image: 'https://www.ekeralatourism.net/wp-content/uploads/2018/02/houseboat-cruise.jpg',
      category: 'Nature',
      description: 'Relax on a scenic houseboat cruise through the tranquil backwaters of Kerala.',
      duration: '4–6 hours',
      price: '₹1000–₹3500 per person',
      rating: 4.8,
      tags: ['Nature', 'Romantic', 'Boat'],
      availableDays: ['Monday', 'Wednesday', 'Friday', 'Saturday', 'Sunday'],
      shortLabel: 'Scenic Backwaters',
      icon: 'fa-solid fa-water',
      isSafe: true,
      isBookable: true,
      provider: 'Alleppey Cruise Co.',
      contactLink: 'https://wa.me/919876543210',
      metaTitle: 'Backwater Cruise in Alleppey - Kerala Activities',
      metaDescription: 'Enjoy a tranquil houseboat cruise in the scenic backwaters of Alleppey, Kerala. Ideal for couples and nature lovers.',
      coordinates: {
        lat: 9.4981,
        lng: 76.3388
      }
    },
    {
      name: 'Kathakali Performance',
      slug: 'kathakali-performance',
      location: 'Kochi',
      image: 'https://keralatourism.travel/images/places-to-visit/headers/kathakali-kochi-tourism-entry-fee-timings-holidays-reviews-header.jpg',
      category: 'Cultural',
      description: 'Experience Kerala’s classical dance-drama with vibrant costumes and storytelling.',
      duration: '1.5 hours',
      price: '₹250–₹500',
      rating: 4.7,
      tags: ['Cultural', 'Art', 'Night Activity'],
      availableDays: ['All Days'],
      shortLabel: 'Traditional Dance',
      icon: 'fa-solid fa-mask',
      isSafe: true,
      isBookable: false,
      provider: 'Greenix Cultural Center',
      contactLink: 'https://wa.me/919812345678',
      metaTitle: 'Kathakali Performance - Cultural Experience in Kochi',
      metaDescription: 'Watch a live Kathakali performance and immerse in Kerala’s vibrant art form in Kochi.',
      coordinates: {
        lat: 9.9667,
        lng: 76.2333
      }
    },
    {
      name: 'Ayurvedic Massage',
      slug: 'ayurvedic-massage',
      location: 'Kovalam',
      image: 'https://www.keralatourism.org/images/ayurveda/large/ayurveda-treatment-kairali.jpg',
      category: 'Wellness',
      description: 'Rejuvenate your body and mind with authentic Ayurvedic therapies.',
      duration: '60–90 minutes',
      price: '₹800–₹2500',
      rating: 4.9,
      tags: ['Wellness', 'Relaxation', 'Healing'],
      availableDays: ['All Days'],
      shortLabel: 'Healing Therapy',
      icon: 'fa-solid fa-spa',
      isSafe: true,
      isBookable: true,
      provider: 'AyurSoma Center',
      contactLink: 'https://wa.me/919834567123',
      metaTitle: 'Ayurvedic Massage in Kovalam - Kerala Wellness',
      metaDescription: 'Experience traditional Ayurvedic healing massage in Kovalam, Kerala. Refresh your senses and body.',
      coordinates: {
        lat: 8.4017,
        lng: 76.9784
      }
    },
    {
      name: 'Tea Plantation Tour',
      slug: 'tea-plantation-tour',
      location: 'Munnar',
      image: 'https://www.ekeralatourism.net/wp-content/uploads/2018/03/Munnar-Tea-Plantation.jpg',
      category: 'Nature',
      description: 'Walk through lush green tea estates and learn about tea processing.',
      duration: '3–4 hours',
      price: '₹300–₹700',
      rating: 4.6,
      tags: ['Nature', 'Photography', 'Educational'],
      availableDays: ['Monday', 'Tuesday', 'Thursday', 'Saturday'],
      shortLabel: 'Tea Garden Walk',
      icon: 'fa-solid fa-leaf',
      isSafe: true,
      isBookable: true,
      provider: 'Kannan Devan Hills Plantation',
      contactLink: 'https://wa.me/918765432101',
      metaTitle: 'Tea Plantation Tour in Munnar - Kerala Green Experience',
      metaDescription: 'Explore the lush tea estates of Munnar and discover the art of tea making.',
      coordinates: {
        lat: 10.0889,
        lng: 77.0595
      }
    },
    {
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
    }
  ];

  openWhatsApp(link: string) {
    if (link) {
      window.open(link, '_blank');
    }
  }

  fnNavigate(path: string, slug?: string) {
    if (slug) {
      this.router.navigate([path, slug]);
    } else {
      this.router.navigate([path]);
    }
  }

}
