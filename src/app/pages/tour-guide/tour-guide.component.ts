import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tour-guide',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './tour-guide.component.html',
  styleUrl: './tour-guide.component.scss'
})
export class TourGuideComponent {
  searchQuery = '';
  selectedLanguage = '';
  selectedSpecialty = '';
  isFilterApplied: boolean = false;

  languages = ['English', 'Hindi', 'Malayalam', 'Tamil'];
  specialties = ['Nature Trails', 'City Tours', 'Heritage Walks', 'Food Tours', 'Adventure'];

  guides = [
    {
      name: 'Anil Kumar',
      city: 'Munnar',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbkECXtEG_6-RV7CSNgNoYUGZE-JCliYm9g&s',
      experience: 6,
      rating: 4.9,
      languages: ['English', 'Malayalam'],
      specialties: ['Nature Trails', 'Adventure'],
      pricePerDay: 700,
      availability: 'Weekends Only',
      bio: 'Passionate about trekking and nature exploration.',
      contactLink: 'https://wa.me/919876543210',
      whatsappNumber: '+91 9876543210',
      contactNumber: '+91 9876543210',
      tags: ['Adventure', 'Nature', 'Hiking']
    },
    {
      name: 'Sangeetha Nair',
      city: 'Alleppey',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHMDlwRCHOHZP_tX7jRYNxV8W8MpNEog45w&s',
      experience: 4,
      rating: 4.8,
      languages: ['English', 'Hindi'],
      specialties: ['Backwater Tours', 'Food Tours'],
      pricePerDay: 850,
      availability: 'Available Daily',
      bio: 'Local cuisine enthusiast and boat ride expert.',
      contactLink: 'https://wa.me/918887766554',
      whatsappNumber: '+91 8887766554',
      contactNumber: '+91 8887766554',
      tags: ['Backwater', 'Food', 'Cultural']
    },
    {
      name: 'Rahul Dev',
      city: 'Wayanad',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyI9Cvp53aaP9XeRn-ZKbJDH2QaWC72O26A&s',
      experience: 7,
      rating: 5.0,
      languages: ['English', 'Tamil'],
      specialties: ['Adventure', 'Forest Walks'],
      pricePerDay: 900,
      availability: 'Weekdays & Weekends',
      bio: 'Certified eco-tour guide.',
      contactLink: 'https://wa.me/918884445566',
      whatsappNumber: '+91 9995397808',
      contactNumber: '+91 9995397808',
      tags: ['Wildlife', 'Adventure', 'Forest']
    }
  ];

  fnNumber(number: any, status: any) {
    if (!number) {
      console.warn('No number provided');
      return;
    }

    const cleanedNumber = number.replace(/\D/g, ''); // remove non-digits

    if (status === 'whatsapp') {
      const waLink = `https://wa.me/${cleanedNumber}`;
      window.open(waLink, '_blank');
    } else if (status === 'contact') {
      const telLink = `tel:${cleanedNumber}`;
      window.location.href = telLink;
    } else {
      console.warn('Unknown contact type:', status);
    }
  }


  filteredGuides = [...this.guides];

  filterGuides() {
    this.isFilterApplied = true
    this.filteredGuides = this.guides.filter(g => {
      const searchMatch = this.searchQuery ?
        g.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        g.city.toLowerCase().includes(this.searchQuery.toLowerCase()) : true;

      const langMatch = this.selectedLanguage ?
        g.languages.includes(this.selectedLanguage) : true;

      const specMatch = this.selectedSpecialty ?
        g.specialties.includes(this.selectedSpecialty) : true;

      return searchMatch && langMatch && specMatch;
    });
  }

  fnClearFilter() {
    this.isFilterApplied = false;
    this.searchQuery = '';
    this.selectedLanguage = '';
    this.selectedSpecialty = '';
    this.filteredGuides = [...this.guides];
  }
}
