import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-apout-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './apout-home.component.html',
  styleUrl: './apout-home.component.scss',
 
})
export class  ApoutHomeComponent {
  overviewCards = [
    {
      title:'Our Mission',
      description:'To provide businesses and entrepreneurs with reliable customized solutions that drive their operations and growth toward guaranteed success',
      icon: 'fas fa-rocket',
      link: '/contact',
      buttonText: 'Contact Us',
      colSize: 5
    },
    {
      title: 'Our Services',
      description:'We provide digital marketing business setup licensing social media management and cybersecurity delivering secure streamlined solutions. With SEO strategies practical advice and expert guidance on market growth we help clients succeed in competitive markets.',
      icon: 'fas fa-rocket',
      link: '/Our',
      buttonText: 'Read More',
      colSize: 7
    }
  ];
}