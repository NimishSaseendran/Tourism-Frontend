import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [
    CommonModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  kerala = {
    title: 'Kerala – God’s Own Country',
    subtitle: 'A land of lush greenery, serene backwaters, vibrant culture, and timeless traditions.',
    description: `Kerala, located on the southwestern coast of India, is a tropical paradise known for its natural beauty, rich cultural heritage, Ayurveda, and peaceful backwaters. From misty hill stations like Munnar to golden beaches of Kovalam, from classical art forms like Kathakali to the modern cosmopolitan buzz of Kochi – Kerala offers a unique blend of tradition and modernity.`,
    heroImage: 'images/kerala-about.jpg',
    backdropImages: [
      'https://upload.wikimedia.org/wikipedia/commons/5/5e/Munnar_Valley.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/f/f3/Backwaters_in_Alappuzha.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/2/2c/Athirappilly_Falls_view.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/e6/Bekal_Fort_View.jpg',
    ],
    highlights: [
      'Backwaters & Houseboats',
      'Lush Hill Stations',
      'Beaches & Coastal Beauty',
      'Wildlife Sanctuaries',
      'Ayurveda & Wellness',
      'Traditional Arts & Dance',
      'Delicious Kerala Cuisine',
      'Temple Festivals & Poorams'
    ],
    tags: ['Nature', 'Culture', 'Backwaters', 'Ayurveda', 'Festivals', 'Food'],
    topDistricts: ['Ernakulam', 'Alappuzha', 'Idukki', 'Wayanad', 'Thiruvananthapuram', 'Thrissur'],
    capital: 'Thiruvananthapuram',
    language: 'Malayalam',
    population: '35+ million',
    bestTimeToVisit: 'September to March',
    website: 'https://www.keralatourism.org',
    tourismSlogan: 'God’s Own Country',
    famousFoods: ['Puttu & Kadala Curry', 'Appam with Stew', 'Malabar Biryani', 'Sadya', 'Karimeen Pollichathu'],
    festivals: ['Onam', 'Thrissur Pooram', 'Vishu', 'Boat Races', 'Theyyam'],
  };

}
