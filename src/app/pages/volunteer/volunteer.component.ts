import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-volunteer',
  imports: [
    CommonModule
  ],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.scss'
})
export class VolunteerComponent {

  volunteers = [
    {
      name: 'Meera Joseph',
      slug: 'meera-joseph',
      city: 'Kumarakom',
      photo: 'https://i.pinimg.com/564x/39/33/f6/3933f64de1724bb67264818810e3f2cb.jpg',
      role: 'Temple Guidance & Cultural Help',
      availability: 'Weekends & Holidays',
      languages: ['Malayalam', 'English'],
      whatsappNumber: '+91 99988 11223',
      contactNumber: '+91 99988 11223',
      tags: ['Volunteer', 'Cultural', 'Friendly', 'Free Support'],
      bio: 'Helps tourists understand local customs and rituals at temples. Loves sharing Kerala’s traditions.',
      rating: 4.9
    },
    {
      name: 'Naveen K',
      slug: 'naveen-k',
      city: 'Varkala',
      photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPjv1lHEIpzgDk_e3Sm-e4EVOzggYdb5aHA&s',
      role: 'First-Aid & Emergency Help',
      availability: 'All Days (Evenings)',
      languages: ['Malayalam', 'Hindi'],
      whatsappNumber: '+91 98765 22211',
      contactNumber: '+91 98765 22211',
      tags: ['Emergency Help', 'Volunteer', 'Free Service'],
      bio: 'Medical volunteer who supports lost or injured travelers with first aid and directions.',
      rating: 5.0
    },
    {
      name: 'Fathima Nazeer',
      slug: 'fathima-nazeer',
      city: 'Kannur',
      photo: 'https://wallpapers.com/images/hd/pretty-profile-pictures-k1qebyviiyl0wx0x.jpg',
      role: 'Language Translation & Local Companion',
      availability: 'Sundays',
      languages: ['Malayalam', 'English', 'Arabic'],
      whatsappNumber: '+91 88877 66554',
      contactNumber: '+91 88877 66554',
      tags: ['Translation', 'Caring', 'Free Volunteer'],
      bio: 'Helps Arabic and international visitors navigate local spots and communicate clearly.',
      rating: 4.8
    }
  ];

  fnNumber(number: any, status: any) {
    if (!number) return;
    const cleaned = number.replace(/\D/g, '');
    if (status === 'whatsapp') {
      window.open(`https://wa.me/${cleaned}`, '_blank');
    } else if (status === 'contact') {
      window.location.href = `tel:${cleaned}`;
    }
  }

}
