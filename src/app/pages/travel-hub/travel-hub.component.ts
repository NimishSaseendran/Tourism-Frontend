import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-travel-hub',
  imports: [
    CommonModule
  ],
  templateUrl: './travel-hub.component.html',
  styleUrl: './travel-hub.component.scss'
})
export class TravelHubComponent {

  currentType: string = '';
  data: any[] = [];

  arrHotelsAndStays = [
    {
      name: 'Spice Tree Munnar',
      city: 'Munnar',
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/84588779.jpg?k=1f34cac4219a0423d6e7006fd6ac7ca49723d0388bdfbfdc9e29a8da5753ed27&o=&hp=1',
      type: 'Luxury Resort',
      priceRange: '₹8500–₹12,000',
      rating: 4.8,
      reviewCount: 152,
      amenities: ['Wi-Fi', 'Spa', 'Mountain View', 'Restaurant', 'Private Jacuzzi'],
      bookingLink: 'https://www.spicetreemunnar.com',
      description: 'A serene luxury retreat nestled in the high ranges of Munnar, offering breathtaking mountain views, premium suites, and rejuvenating spa experiences.',
      tags: ['Luxury', 'Nature', 'Couple-Friendly'],
      isPopular: true,
      contact: '+91 9876543210',
      availability: 'Available on Weekends and Holidays',
      slug: 'spice-tree-munnar'
    },
    {
      name: 'Rainforest Athirappilly',
      city: 'Thrissur',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/01/ff/1e/rainforest-resort-athirapally.jpg?w=900&h=500&s=1',
      type: 'Boutique Resort',
      priceRange: '₹9500–₹15,000',
      rating: 4.9,
      reviewCount: 214,
      amenities: ['Waterfall View', 'Infinity Pool', 'Nature Walks', 'Fine Dining'],
      bookingLink: 'https://www.rainforest.in',
      description: 'Located beside the majestic Athirappilly waterfalls, this eco-luxury resort is perfect for honeymooners and nature lovers looking for exclusivity and tranquility.',
      tags: ['Waterfall', 'Luxury', 'Romantic'],
      isPopular: true,
      contact: '+91 9988776655',
      availability: 'Pre-booking Required',
      slug: 'rainforest-athirappilly'
    },
    {
      name: 'Vismaya Lake Heritage',
      city: 'Alleppey',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/09/68/66/15/vismaya.jpg',
      type: 'Heritage Villa',
      priceRange: '₹7000–₹10,000',
      rating: 4.7,
      reviewCount: 89,
      amenities: ['Lake View', 'Private Pool', 'Backwater Access', 'Canoeing'],
      bookingLink: 'https://vismayavilla.com',
      description: 'An exclusive 2-room heritage villa set on the shores of a peaceful lake in Alleppey, perfect for intimate getaways and serene escapes.',
      tags: ['Backwater', 'Private Pool', 'Heritage'],
      isPopular: false,
      contact: '+91 9123456789',
      availability: 'Weekdays & Weekends',
      slug: 'vismaya-lake-heritage'
    },
    {
      name: 'Zostel Varkala',
      city: 'Varkala',
      image: 'https://www.zostel.com/blog/content/images/2022/03/Zostel-Varkala.jpg',
      type: 'Budget Hostel',
      priceRange: '₹700–₹1200',
      rating: 4.5,
      reviewCount: 278,
      amenities: ['Beach Access', 'Wi-Fi', 'Common Lounge', 'Shared Kitchen'],
      bookingLink: 'https://www.zostel.com/zostel/varkala/',
      description: 'A vibrant backpacker hostel near Varkala Cliff offering dorms and private rooms with sea views. Ideal for solo travelers and digital nomads.',
      tags: ['Budget', 'Backpacker', 'Youth'],
      isPopular: true,
      contact: '+91 9876123450',
      availability: 'Available Daily',
      slug: 'zostel-varkala'
    },
    {
      name: 'Marari Beach Resort',
      city: 'Mararikulam',
      image: 'https://cghearth.com/uploads/marari-beach.jpg',
      type: 'Eco-friendly Resort',
      priceRange: '₹8000–₹11,000',
      rating: 4.6,
      reviewCount: 121,
      amenities: ['Eco Villas', 'Organic Farm', 'Beach Access', 'Ayurveda Spa'],
      bookingLink: 'https://cghearth.com/marari-beach',
      description: 'A sustainable coastal resort offering a blend of Kerala village life and pristine beaches, with ayurvedic wellness and organic cuisine.',
      tags: ['Beach', 'Eco-Friendly', 'Ayurveda'],
      isPopular: true,
      contact: '+91 9090909090',
      availability: 'Open Year Round',
      slug: 'marari-beach-resort'
    }
  ];

  ngOnInit(): void {
    this.data = this.arrHotelsAndStays;
    this.currentType = 'Hotels & Stays';
  }

}
