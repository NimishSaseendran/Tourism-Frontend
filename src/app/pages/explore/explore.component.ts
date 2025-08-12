import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-explore',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {

  constructor(
    private router: Router
  ) { }

  arrExplore = [
    {
      id: 1,
      title: 'Munnar',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDfAwB3-kKLrdmfJgRCNvDjzLo3cgM6HZb4rlzK3QD7x0HM9Yc4lzRFJFGYXrYVx8tr2o&usqp=CAU',
      description: 'Munnar is a hill station known for sprawling tea gardens, misty hills, and cool climate. Ideal for nature lovers and honeymooners.',
      location: 'Idukki',
      tags: ['Hill Station', 'Tea Gardens', 'Nature'],
      rating: 4.8,
      activities: ['Tea Estate Visit', 'Trekking', 'Boating', 'Photography'],
      bestTimeToVisit: 'September to May',
      categorySlug: 'hill-stations',
      slug: 'munnar',
    },
    {
      id: 2,
      title: 'Alleppey',
      image: 'https://images.ctfassets.net/cypk3gnrfs78/6DTkvF6aJQDYJZQ4EbPjyx/72b533aae79523a16d4b6b016af1168a/Alappuzha.jpeg?q=90&fm=jpg&fl=progressive',
      description: 'Alleppey is famous for its serene backwaters, houseboats, and lush paddy fields. It’s often called the "Venice of the East".',
      location: 'Alappuzha',
      tags: ['Backwaters', 'Houseboats', 'Nature'],
      rating: 4.7,
      activities: ['Houseboat Stay', 'Canoe Ride', 'Village Walks'],
      bestTimeToVisit: 'October to March'
    },
    {
      id: 3,
      title: 'Wayanad',
      image: 'https://s3.india.com/wp-content/uploads/2025/06/8-Honeymoon-Places-In-Wayanad-That-Feel-Like-a-Fairytale-1.jpg?impolicy=Medium_Widthonly&w=350&h=263',
      description: 'Wayanad is a peaceful district with waterfalls, caves, wildlife, and spice plantations. Ideal for trekking and eco-tourism.',
      location: 'Wayanad',
      tags: ['Wildlife', 'Caves', 'Trekking'],
      rating: 4.6,
      activities: ['Trekking', 'Wildlife Safari', 'Waterfall Visit'],
      bestTimeToVisit: 'October to May'
    },
    {
      id: 4,
      title: 'Kochi',
      image: 'https://s3.india.com/wp-content/uploads/2025/06/8-Honeymoon-Places-In-Wayanad-That-Feel-Like-a-Fairytale-1.jpg?impolicy=Medium_Widthonly&w=350&h=263',
      description: 'Kochi is a major port city known for its colonial heritage, Chinese fishing nets, and vibrant culture.',
      location: 'Ernakulam',
      tags: ['History', 'Urban', 'Port City'],
      rating: 4.5,
      activities: ['Fort Visit', 'Food Tour', 'Fishing Net View'],
      bestTimeToVisit: 'October to March'
    },
    {
      id: 5,
      title: 'Thekkady',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/6b/09/70/thekkady.jpg?w=600&h=500&s=1',
      description: 'Thekkady is home to the famous Periyar Wildlife Sanctuary, offering boating and wildlife spotting in lush surroundings.',
      location: 'Idukki',
      tags: ['Wildlife', 'Nature', 'Boating'],
      rating: 4.6,
      activities: ['Wildlife Safari', 'Boating', 'Nature Walks'],
      bestTimeToVisit: 'October to May'
    },
    {
      id: 6,
      title: 'Varkala',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlE6qhbT1v0PgLfk3JxmubgW5LBUADH-7rAQ&s',
      description: 'Varkala is a beach destination known for its cliffs, natural springs, and spiritual ambiance.',
      location: 'Thiruvananthapuram',
      tags: ['Beach', 'Cliff View', 'Yoga'],
      rating: 4.7,
      activities: ['Beach Walk', 'Surfing', 'Ayurveda Massage'],
      bestTimeToVisit: 'October to March'
    },
    {
      id: 7,
      title: 'Kumarakom',
      image: 'https://www.keralatourism.org/images/microsites/kumarakom/kumarakom-1024x768.jpg',
      description: 'Kumarakom is a peaceful village on Vembanad Lake, offering houseboat cruises and bird watching.',
      location: 'Kottayam',
      tags: ['Bird Watching', 'Backwaters', 'Luxury Stay'],
      rating: 4.6,
      activities: ['Houseboat Cruise', 'Bird Watching', 'Fishing'],
      bestTimeToVisit: 'September to March'
    },
    {
      id: 8,
      title: 'Bekal',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuj9a-kUEQ2bYZNrkx5KpFxsN1OjGNriIpg&s',
      description: 'Bekal is known for its massive seafront fort and beautiful beach, offering scenic views and history.',
      location: 'Kasaragod',
      tags: ['Fort', 'Beach', 'History'],
      rating: 4.5,
      activities: ['Fort Exploration', 'Beach Walk', 'Photography'],
      bestTimeToVisit: 'October to March'
    },
    {
      id: 9,
      title: 'Athirappilly Waterfalls',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRebjaMpulQgPoxqyIM6pFZ4RjWCgvHrOgHgg&s',
      description: 'Often called the "Niagara of India", Athirappilly is the largest waterfall in Kerala.',
      location: 'Thrissur',
      tags: ['Waterfall', 'Adventure', 'Nature'],
      rating: 4.8,
      activities: ['Hiking', 'Picnic', 'Waterfall View'],
      bestTimeToVisit: 'September to January'
    },
    {
      id: 10,
      title: 'Poovar Island',
      image: 'https://www.keralatourism.org/images/service-providers/photos/property-3322-Exterior-11040-20180831082544.jpg',
      description: 'A hidden gem near Trivandrum where backwaters meet the sea. Perfect for a calm getaway.',
      location: 'Thiruvananthapuram',
      tags: ['Island', 'Backwaters', 'Beach'],
      rating: 4.4,
      activities: ['Backwater Cruise', 'Floating Cottages', 'Beach Visit'],
      bestTimeToVisit: 'October to February'
    },
    {
      id: 11,
      title: 'Ponmudi',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/75/e3/cd/ponmudi.jpg?w=900&h=500&s=1',
      description: 'A small hill station near Trivandrum, perfect for trekking and nature photography.',
      location: 'Thiruvananthapuram',
      tags: ['Hill Station', 'Trekking', 'Photography'],
      rating: 4.5,
      activities: ['Hiking', 'Nature Walks', 'Scenic Drive'],
      bestTimeToVisit: 'November to March'
    },
    {
      id: 12,
      title: 'Thrissur',
      image: 'https://s3.india.com/wp-content/uploads/2024/06/Pilgrimage-Places-Near-Thrissur.jpg',
      description: 'Cultural capital of Kerala, known for Thrissur Pooram, Vadakkunnathan Temple, and cultural heritage.',
      location: 'Thrissur',
      tags: ['Culture', 'Festival', 'Temple'],
      rating: 4.6,
      activities: ['Temple Visit', 'Cultural Fest', 'Museum Tour'],
      bestTimeToVisit: 'April (for Thrissur Pooram) and October to March'
    }
  ];

  fnNavigate(category: any, slug: any) {
    this.router.navigate(['/places', category, slug])
  }

}
