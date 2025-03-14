import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-serves',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './serves.component.html',
  styleUrl: './serves.component.scss'
})
export class ServesComponent {
Heding = [{title:'Services'}];
    services = [
      {
        icon: 'fa fa-code',
        title: 'Web Developer',
        description: 'Build responsive and modern websites tailored to your needs.',
        route: '/web-development'
      },
      {
        icon: 'fa fa-shield-alt',
        title: 'Cyber-Security',
        description: 'Protect your digital assets with top-tier security solutions.',
        route: '/Cyber'
      },
      {
        icon: 'fa fa-briefcase',
        title: 'Business-Solutions',
        description: 'Streamline your operations with custom business strategies.',
        route: '/business-solutions'
      },
      {
        icon: 'fa fa-bullhorn',
        title: 'Digital Marketing',
        description: 'Grow your online presence with effective marketing campaigns.',
        route: '/digital-marketing'
      },
      {
        icon: 'fa fa-paint-brush',
        title: 'Graphic Design',
        description: 'Grow your online presence with effective marketing campaigns.',
        route: '/graphic-design'
      },
      {
        icon: 'fa-tv fas',
        title: 'Media Production',
        description: 'Grow your online presence with effective marketing campaigns.',
        route: '/mediaPro'
      }
    ];
  }