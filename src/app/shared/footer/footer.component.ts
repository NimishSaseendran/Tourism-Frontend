import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule

  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  siteSections = [
    {
      title: 'Explore',
      links: [
        { name: 'Classification Schemes', url: '/classification-schemes' },
        { name: 'Governmental Affairs', url: '/governmental-affairs' },
        { name: 'Official Mobile App', url: '/official-mobile-app' },
        { name: 'Newsletter', url: '/newsletter' },
        { name: 'Responsible Tourism', url: '/responsible-tourism' },
        { name: 'Ecotourism', url: '/ecotourism' },
        { name: 'Kerala Specialist', url: '/kerala-specialist' },
        // { name: 'Travel Hub', url: '/travel-hub' },

      ]
    },
    {
      title: 'Travel Hub',
      links: [
        { name: 'Kerala at a Glance', url: '/kerala-at-a-glance' },
        { name: 'Travel Care', url: '/travel-care' },
        { name: 'Plan Your Trip', url: '/plan-your-trip' },
        { name: 'Souvenirs', url: '/souvenirs' },
        { name: 'Travel Tips', url: '/travel-tips' },
        { name: 'Accommodation', url: '/accommodation' },
        { name: 'FAQs', url: '/faqs' }
      ]
    },
    {
      title: 'Nature',
      links: [
        { name: 'Hills', url: '/nature/hills' },
        { name: 'Backwaters', url: '/nature/backwaters' },
        { name: 'Beaches', url: '/nature/beaches' },
        { name: 'Wildlife', url: '/nature/wildlife' },
        { name: 'Waterfalls', url: '/nature/waterfalls' },
        { name: 'Islands', url: '/nature/islands' }
      ]
    },
    {
      title: 'Places',
      links: [
        { name: 'Munnar', url: '/places/munnar' },
        { name: 'Wayanad', url: '/places/wayanad' },
        { name: 'Kovalam', url: '/places/kovalam' },
        { name: 'Kumarakom', url: '/places/kumarakom' },
        { name: 'Fort Kochi', url: '/places/fort-kochi' },
        { name: 'Varkala', url: '/places/varkala' }
      ]
    },
    {
      title: 'Specialities',
      links: [
        { name: 'Ayurveda', url: '/specialities/ayurveda' },
        { name: 'Monsoon', url: '/specialities/monsoon' },
        { name: 'Houseboat', url: '/specialities/houseboat' },
        { name: 'Kerala Food', url: '/specialities/kerala-food' },
        { name: 'Festivals', url: '/specialities/festivals' },
        { name: 'Artforms', url: '/specialities/artforms' }
      ]
    },
    {
      title: 'Media',
      links: [
        { name: 'Videos', url: '/media/videos' },
        { name: 'Photos', url: '/media/photos' },
        { name: '360° Videos', url: '/media/360-videos' },
        { name: 'Royalty Free Photos', url: '/media/royalty-free-photos' },
        { name: 'Media Room', url: '/media-room' },
        { name: 'Site Map', url: '/site-map' }
      ]
    }
  ];

}
