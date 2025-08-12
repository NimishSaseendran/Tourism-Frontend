import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-connect-with-others',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './connect-with-others.component.html',
  styleUrl: './connect-with-others.component.scss'
})
export class ConnectWithOthersComponent {

  travelPosts: any[] = [];
  filteredPosts: any[] = [];

  filter = {
    destination: '',
    interest: ''
  };

  ngOnInit(): void {
    this.travelPosts = [
      {
        name: 'Arya Menon',
        destination: 'Munnar',
        fromDate: '2025-08-15',
        toDate: '2025-08-18',
        travelStyle: 'Backpacker',
        interests: ['Trekking', 'Photography'],
        about: 'Nature lover, traveling solo from Kochi. Looking for a co-traveler.',
        contactLink: 'https://wa.me/919876543210'
      },
      {
        name: 'Rahul Krishnan',
        destination: 'Alleppey',
        fromDate: '2025-07-25',
        toDate: '2025-07-27',
        travelStyle: 'Relaxed',
        interests: ['Backwater', 'Boating'],
        about: 'Couple looking to meet others for a boat sharing experience.',
        contactLink: 'https://wa.me/919812345678'
      },
      {
        name: 'Sneha Thomas',
        destination: 'Wayanad',
        fromDate: '2025-09-02',
        toDate: '2025-09-05',
        travelStyle: 'Adventure',
        interests: ['Wildlife', 'Forest Walks'],
        about: 'Looking to explore forests & wildlife, preferably with a small group.',
        contactLink: 'https://wa.me/919988776655'
      },
      {
        name: 'Vivek R.',
        destination: 'Varkala',
        fromDate: '2025-07-15',
        toDate: '2025-07-17',
        travelStyle: 'Budget',
        interests: ['Beach', 'Yoga'],
        about: 'Traveling alone. Open to stay-sharing and beach exploration.',
        contactLink: 'https://wa.me/919900112233'
      }
    ];

    this.filteredPosts = [...this.travelPosts];
  }

  applyFilter(): void {
    this.filteredPosts = this.travelPosts.filter(post => {
      const matchesDestination = this.filter.destination
        ? post.destination.toLowerCase().includes(this.filter.destination.toLowerCase())
        : true;

      const matchesInterest = this.filter.interest
        ? post.interests.some((i: string) =>
          i.toLowerCase().includes(this.filter.interest.toLowerCase())
        )
        : true;

      return matchesDestination && matchesInterest;
    });
  }

  clearFilter(): void {
    this.filter = {
      destination: '',
      interest: ''
    };
    this.filteredPosts = [...this.travelPosts];
  }

}
