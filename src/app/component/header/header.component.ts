import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private router: Router
  ) { }

  arrCategories = [
    {
      id: 1,
      title: 'Hill Stations',
      image: 'https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/munnar-image.jpg',
      slug: 'hill-stations',
      description: 'Explore the serene beauty and cool climate of Kerala\'s famous hill stations.'
    },
    {
      id: 2,
      title: 'Beaches',
      image: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2020/11/Feature-image-Kerala-Beaches-Reopen-.jpg',
      slug: 'beaches',
      description: 'Relax on the golden sands and enjoy the scenic sunsets at Kerala\'s pristine beaches.'
    },
    {
      id: 3,
      title: 'Backwaters',
      image: 'https://lp-cms-production.imgix.net/2025-04/shutterstock2454866115.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop',
      slug: 'backwaters',
      description: 'Experience the tranquil backwaters with houseboat cruises and lush landscapes.'
    },
    {
      id: 4,
      title: 'Wildlife & Forests',
      image: 'https://b3681537.smushcdn.com/3681537/wp-content/uploads/2020/04/chinnar-wildlife-sanctuary.gif?lossy=2&strip=1&webp=1',
      slug: 'wildlife-and-forests',
      description: 'Discover Kerala\'s rich biodiversity in its wildlife sanctuaries and dense forests.'
    },
    {
      id: 5,
      title: 'Waterfalls',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/4b/a2/1c/athirapally-falls-in.jpg?w=500&h=500&s=1',
      slug: 'waterfalls',
      description: 'Marvel at the breathtaking waterfalls cascading through Kerala\'s lush terrain.'
    },
    {
      id: 6,
      title: 'Heritage Sites',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqFjvpG78h3E38osxbYrlL3iHntjqANa5Gg&s',
      slug: 'heritage-sites',
      description: 'Visit historical monuments and UNESCO heritage sites reflecting Kerala\'s rich culture.'
    },
    {
      id: 7,
      title: 'Pilgrimage Destinations',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/9c/f4/af/worlds-largest-bird-sculpture.jpg?w=500&h=500&s=1',
      slug: 'pilgrimage-destinations',
      description: 'Explore sacred temples, churches, and mosques that attract pilgrims from around the world.'
    },
    {
      id: 8,
      title: 'Village Life',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs4oUoc4ZndLkCWmHgY-61xKrhHLVWHzx7wA&s',
      slug: 'village-life',
      description: 'Experience the authentic rural lifestyle and traditional customs of Kerala\'s villages.'
    },
    {
      id: 9,
      title: 'Ayurveda & Wellness',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMbq0pfqg9Vs42NeeL3XNuRGf0pVJIZWnaWA&s',
      slug: 'ayurveda-and-wellness',
      description: 'Rejuvenate your mind and body with Kerala\'s world-renowned Ayurveda and wellness therapies.'
    }
  ];

  arrTravelhub = [
    {
      title: 'Hotels & Stays',
      icon: 'fa-solid fa-hotel',
      color: 'primary',
      description: 'Find curated stays across Kerala',
      path: '/travel-hub/hotels'
    },
    {
      title: 'Local Food Spots',
      icon: 'fa-solid fa-utensils',
      color: 'success',
      description: 'Top-rated local cuisines & restaurants',
      path: '/travel-hub/food'
    },
    {
      title: 'Transport',
      icon: 'fa-solid fa-taxi',
      color: 'warning',
      description: 'Cabs, bikes, and auto services',
      path: '/travel-hub/transport'
    },
    {
      title: 'Travel Essentials',
      icon: 'fa-solid fa-briefcase',
      color: 'danger',
      description: 'Checklist, emergency contacts, & more',
      path: '/travel-hub/essentials'
    }
  ];


  arrSpecialities = [
    {
      name: "Tour Packages",
      slug: "tour-packages",
      description: "Customizable and theme-based tours including short breaks and extended journeys.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Nature & Eco Tourism",
      slug: "eco-tourism",
      description: "Village life, wildlife tours, backwater cruises, and eco stays in harmony with nature.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Cultural & Heritage",
      slug: "cultural-heritage",
      description: "Explore Kerala’s traditions, temple festivals, classical art forms, and historical sites.",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Food & Culinary Tours",
      slug: "culinary-tours",
      description: "Enjoy local food trails, sadya experiences, seafood tours, and cooking classes.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Art & Handicrafts",
      slug: "handicrafts",
      description: "Authentic local crafts including coir, coconut shell products, and Aranmula mirrors.",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Wellness & Ayurveda",
      slug: "wellness-ayurveda",
      description: "Ayurvedic therapies, yoga retreats, monsoon wellness, and detox programs.",
      image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Adventure & Activities",
      slug: "adventure",
      description: "Trekking, kayaking, night walks, and outdoor adventures for thrill seekers.",
      image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Romantic & Luxury",
      slug: "luxury-romantic",
      description: "Honeymoon packages, luxury houseboats, treehouse stays, and spa getaways.",
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Festival & Event Tourism",
      slug: "festival-tourism",
      description: "Celebrate Onam, witness boat races, Theyyam rituals, and temple festivals.",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=500&q=80"
    }
  ];

  fnNavigate(path: any, slug: any) {
    if (slug) {
      this.router.navigate([path, slug]);
    } else {
      this.router.navigate([path]);
    }
  }

}
