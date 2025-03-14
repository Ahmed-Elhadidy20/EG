import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { SliderComponent } from "../slider/slider.component";
import { ServesComponent } from "../serves/serves.component";
import { ApoutHomeComponent } from "../apout-home/apout-home.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterModule, SliderComponent, ServesComponent, ApoutHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  testimonials = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      name: 'John Doe',
      role: 'CEO',
      image: 'assets/image/testimonials-01.jpg'
    },
    {
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Jane Smith',
      role: 'Designer',
      image: 'assets/image/testimonials-01.jpg'
    }
  ];

  partners = [
    { image: 'assets/image/logo.png' },
    { image: 'assets/image/logo.png' },
    { image: 'assets/image/logo.png' }
  ];

}