import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-saved-place',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './saved-place.component.html',
  styleUrl: './saved-place.component.scss'
})
export class SavedPlaceComponent {

  arrWishlist = [
    {
      title: 'Munnar',
      slug: 'munnar',
      image: 'https://www.keralatourism.org/_next/image/?url=http%3A%2F%2F127.0.0.1%2Fktadmin%2Fimg%2Fpages%2Ftablet%2Fmunnar-blooms-blue-1743492906_7c09c3cad2add1e5fa89.webp&w=1920&q=75',
      category: 'Hill Station',
      categorySlug: 'hill-station',
      location: 'Idukki, Kerala',
      description: 'A serene hill town famous for tea gardens and cool climate.'
    },
    {
      title: 'Varkala Beach',
      slug: 'varkala-beach',
      image: 'https://res.cloudinary.com/voyehomes/image/upload/w_1280,f_auto,c_scale/v1687803805/property/80/image/8a443104-4376-4a14-b59c-1ad2298afeae.jpg',
      category: 'Beach',
      categorySlug: 'beach',
      location: 'Thiruvananthapuram, Kerala',
      description: 'Cliff-side beach with beautiful sunsets and natural springs.'
    },
    {
      title: 'Athirappilly Falls',
      slug: 'athirappilly-falls',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/4b/a2/1c/athirapally-falls-in.jpg?w=800&h=-1&s=1',
      category: 'Waterfall',
      categorySlug: 'waterfall',
      location: 'Thrissur, Kerala',
      description: 'Majestic waterfall surrounded by lush forest and wildlife.'
    }
  ];

}
