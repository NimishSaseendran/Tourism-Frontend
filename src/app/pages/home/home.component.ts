import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ExploreComponent } from "../explore/explore.component";
import { EventsComponent } from "../events/events.component";
import { FooterComponent } from "../../shared/footer/footer.component";
import { MemoriesComponent } from "../../component/memories/memories.component";
import { CategoriesComponent } from "../../component/categories/categories.component";
import { HeaderComponent } from "../../component/header/header.component";

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    AboutComponent,
    ExploreComponent,
    EventsComponent,
    FooterComponent,
    MemoriesComponent,
    CategoriesComponent,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
