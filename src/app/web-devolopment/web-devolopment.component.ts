import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-web-devolopment',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './web-devolopment.component.html',
  styleUrl: './web-devolopment.component.scss'
})
export class WebDevolopmentComponent {
services = [
  {
    icon: 'fa-code',
    title: 'Front-End Development',
    description: 'Responsive and engaging UI/UX designs for all devices.'
  },
  {
    icon: 'fa-server',
    title: 'Back-End Development',
    description: 'Secure and scalable server-side solutions.'
  },
  {
    icon: 'fa-mobile-alt',
    title: 'Mobile Optimization',
    description: 'Seamless performance across mobile platforms.'
  },
  {
    icon: 'fa-lock',
    title: 'Web Security',
    description: 'Protect your site with advanced security measures.'
  },
  {
    icon: 'fa-rocket',
    title: 'Performance Tuning',
    description: 'Fast-loading websites for better user experience.'
  }
];

getCardDelay(index: number): number {
  return index * 200; // تأخير متتالي لكل كارت
}
}