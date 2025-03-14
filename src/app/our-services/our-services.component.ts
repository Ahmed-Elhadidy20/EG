import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServesComponent } from '../serves/serves.component';


@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [RouterModule,CommonModule,ServesComponent],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss',
  
})
export class OurServicesComponent {
  services = [
    {
      icon: 'fas fa-code',
      title: 'Web Developer',
      description: 'Craft modern, responsive websites that elevate your online presence.',
      route: '/web-devolopment'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Cyber-Security',
      description: 'Secure your digital assets with advanced protection solutions.',
      route: '/Cyber'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Business Solutions',
      description: 'Optimize operations with tailored strategies for growth.',
      route: '/business-solutions'
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Digital Marketing',
      description: 'Boost your brand with innovative marketing campaigns.',
      route: '/digital-marketing'
    }
  ];

  getCardDelay(index: number): number {
    return index * 200; // تأخير  لكل كارت
  }
}