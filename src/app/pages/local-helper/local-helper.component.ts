import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-local-helper',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './local-helper.component.html',
  styleUrl: './local-helper.component.scss'
})
export class LocalHelperComponent {

  searchHelperQuery = '';
  selectedSkill = '';
  isFilter: boolean = false;

  skillList = ['Luggage Carrying', 'Shopping Help', 'Senior Citizen Help', 'Translator', 'Market Guide', 'Route Help'];

  localHelpers = [
    {
      name: 'Ramesh Pillai',
      slug: 'ramesh-pillai',
      city: 'Kochi',
      photo: 'https://i.pinimg.com/564x/39/33/f6/3933f64de1724bb67264818810e3f2cb.jpg',
      skills: ['Luggage Carrying', 'Shopping Help'],
      experience: 5,
      rating: 4.7,
      languages: ['Malayalam', 'English'],
      availability: 'Morning to Evening',
      contactNumber: '+91 98765 11122',
      whatsappNumber: '+91 98765 11122',
      tags: ['Budget-friendly', 'Friendly', 'Free Service'],
      bio: 'Volunteering to assist travelers with bags and market shopping in Kochi — always happy to help!'
    },
    {
      name: 'Reshma R',
      slug: 'reshma-r',
      city: 'Trivandrum',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPjv1lHEIpzgDk_e3Sm-e4EVOzggYdb5aHA&s',
      skills: ['Senior Citizen Help', 'Local Route Help'],
      experience: 3,
      rating: 4.8,
      languages: ['Malayalam', 'Hindi'],
      availability: 'Evenings and Weekends',
      contactNumber: '+91 88888 22334',
      whatsappNumber: '+91 88888 22334',
      tags: ['Elder-care', 'Patient', 'Free Service'],
      bio: 'A kind local passionate about guiding senior citizens and first-time visitors around temples and landmarks.'
    },
    {
      name: 'Akshay Menon',
      slug: 'akshay-menon',
      city: 'Calicut',
      photo: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg',
      skills: ['Translator', 'Market Guide', 'Luggage Help'],
      experience: 4,
      rating: 4.9,
      languages: ['Malayalam', 'Tamil', 'English'],
      availability: 'All Days',
      contactNumber: '+91 99999 44556',
      whatsappNumber: '+91 99999 44556',
      tags: ['Multilingual', 'Helpful', 'Free Service'],
      bio: 'Helps tourists communicate and shop with ease in Calicut’s local markets. Offers free multilingual support.'
    }
  ];

  filteredHelpers = [...this.localHelpers];

  filterHelpers() {
    this.isFilter = true
    this.filteredHelpers = this.localHelpers.filter(h => {
      const matchSearch = this.searchHelperQuery ?
        h.name.toLowerCase().includes(this.searchHelperQuery.toLowerCase()) ||
        h.city.toLowerCase().includes(this.searchHelperQuery.toLowerCase()) : true;

      const matchSkill = this.selectedSkill ?
        h.skills.includes(this.selectedSkill) : true;

      return matchSearch && matchSkill;
    });
  }

  fnNumber(number: any, status: any) {
    if (!number) return;
    const cleaned = number.replace(/\D/g, '');
    if (status === 'whatsapp') {
      window.open(`https://wa.me/${cleaned}`, '_blank');
    } else if (status === 'contact') {
      window.location.href = `tel:${cleaned}`;
    }
  }

  fnClearFilter() {
    this.searchHelperQuery = '';
    this.selectedSkill = ''
    this.filteredHelpers = [...this.localHelpers];
    this.isFilter = false
  }

}
