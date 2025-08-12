import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memories',
  imports: [
    CommonModule
  ],
  templateUrl: './memories.component.html',
  styleUrl: './memories.component.scss'
})
export class MemoriesComponent {

  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  showLeftArrow = false;
  showRightArrow = true;

  constructor(
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.updateArrowVisibility();
    this.scrollContainer.nativeElement.addEventListener('scroll', () => {
      this.updateArrowVisibility();
    });
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    setTimeout(() => this.updateArrowVisibility(), 300);
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    setTimeout(() => this.updateArrowVisibility(), 300);
  }

  updateArrowVisibility() {
    const el = this.scrollContainer.nativeElement;
    this.showLeftArrow = el.scrollLeft > 0;
    this.showRightArrow = el.scrollLeft + el.clientWidth < el.scrollWidth;
  }

  arrMemories = [
    { title: 'Village Life Experience', image: 'images/village.webp', slug: 'village-life-experience' },
    { title: 'Trekking and Safaris', image: 'images/trekking.webp', slug: 'trekking-and-safaris' },
    { title: 'Agri Tourism', image: 'images/agri-tourism.webp', slug: 'agri-tourism' },
    { title: 'Cuisine', image: 'images/sadya.webp', slug: 'cuisine' },
    { title: 'Art Forms', image: 'images/artforms.webp', slug: 'art-forms' },
    { title: 'Monsoon', image: 'images/monsoon.webp', slug: 'monsoon' },
    { title: 'Houseboat', image: 'images/houseboat.webp', slug: 'houseboat' }
  ]

  // ecotourism/trekking-programs
  fnNavigate(item: any) {
    this.router.navigate([`ecotourism/${item.slug}`])
  }
}
