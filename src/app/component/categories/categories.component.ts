import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [
    CommonModule
  ],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

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

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = '/images/no-image.png';
  }

  fnNavigate(item: any) {
    this.router.navigate(['/places', item.slug])
  }

}
