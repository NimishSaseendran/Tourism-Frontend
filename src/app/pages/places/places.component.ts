import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-places',
  imports: [
    CommonModule
  ],
  templateUrl: './places.component.html',
  styleUrl: './places.component.scss'
})
export class PlacesComponent {

  categorySlug!: string;
  // category: any;
  // places: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.categorySlug = this.route.snapshot.paramMap.get('categorySlug')!;
  }

  arrPlaces = [
    {
      id: 101,
      title: 'Munnar',
      slug: 'munnar',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Munnar_hill_station.jpg',
      description: 'A breathtaking hill station known for tea gardens, cool climate, and misty mountains.',
      categorySlug: 'hill-stations',
      arrTags: ['tea gardens', 'mountains', 'cool climate']
    },
    {
      id: 102,
      title: 'Wayanad',
      slug: 'wayanad',
      image: 'https://www.keralatourism.org/images/destination/mobile/wayanad20131031114123_113_1.jpg',
      description: 'Green paradise of the Western Ghats, famous for waterfalls, caves, and wildlife.',
      categorySlug: 'hill-stations',
      arrTags: ['waterfalls', 'caves', 'wildlife']
    },
    {
      id: 103,
      title: 'Thekkady',
      slug: 'thekkady',
      image: 'https://www.tourmyindia.com/states/kerala/image/thekkady1.jpg',
      description: 'Famous for Periyar Wildlife Sanctuary and spice plantations nestled in hills.',
      categorySlug: 'hill-stations',
      arrTags: ['wildlife sanctuary', 'spice plantations', 'hills']
    },
    {
      id: 104,
      title: 'Ponmudi',
      slug: 'ponmudi',
      image: 'https://www.keralatourism.org/images/enchanting_kerala/large/ponmudi_a_peep_into_natures_paradise20211229055346_1697_1.jpg',
      description: 'A scenic and lesser-explored hill destination near Thiruvananthapuram.',
      categorySlug: 'hill-stations',
      arrTags: ['scenic', 'nature', 'lesser-explored']
    },
    {
      id: 105,
      title: 'Vagamon',
      slug: 'vagamon',
      image: 'https://www.keralatourism.org/images/destination/mobile/vagamon-20131031111439_132_1.jpg',
      description: 'Charming meadows and pine forests make Vagamon a favorite weekend retreat.',
      categorySlug: 'hill-stations',
      arrTags: ['meadows', 'pine forests', 'retreat']
    },
    {
      id: 106,
      title: 'Nelliyampathy',
      slug: 'nelliyampathy',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Nelliampathi_Palakkad_Kerala.jpg',
      description: 'A quiet hill station near Palakkad with coffee estates and valley views.',
      categorySlug: 'hill-stations',
      arrTags: ['coffee estates', 'valley views', 'quiet']
    },
    {
      id: 107,
      title: 'Peermade',
      slug: 'peermade',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Peermade.jpg',
      description: 'A cool, green getaway with spice gardens and panoramic views.',
      categorySlug: 'hill-stations',
      arrTags: ['spice gardens', 'panoramic views', 'green']
    },
    {
      id: 108,
      title: 'Gavi',
      slug: 'gavi',
      image: 'https://www.keralatourism.org/images/enchanting_kerala/large/Gavi-1838.jpg',
      description: 'An eco-tourism spot ideal for trekking, wildlife, and scenic beauty.',
      categorySlug: 'hill-stations',
      arrTags: ['eco-tourism', 'trekking', 'wildlife']
    },
    {
      id: 109,
      title: 'Ranipuram',
      slug: 'ranipuram',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Ranipuram_Hills.JPG',
      description: 'Often called the "Ooty of Kerala", known for its high-altitude trekking paths.',
      categorySlug: 'hill-stations',
      arrTags: ['trekking', 'high-altitude', 'Ooty of Kerala']
    },
    {
      id: 110,
      title: 'Malakkappara',
      slug: 'malakkappara',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Malakkappara_tea_estates.jpg',
      description: 'A peaceful hill area with winding roads through lush tea plantations.',
      categorySlug: 'hill-stations',
      arrTags: ['tea plantations', 'winding roads', 'peaceful']
    }
  ];

  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = '/images/no-image.png';
  }

  fnNavigate(item: any) {
    this.router.navigate(['/places', item.categorySlug, item.slug])
  }

}
