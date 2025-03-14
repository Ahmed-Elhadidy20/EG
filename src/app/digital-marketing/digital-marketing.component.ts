import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-digital-marketing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './digital-marketing.component.html',
  styleUrl: './digital-marketing.component.scss',
})
export class DigitalMarketingComponent {
  digitalMarketingServices = [
    {
      icon: 'fa-bullhorn',
      title: 'Social Media Marketing',
      description: 'Engage your audience with targeted campaigns on social platforms.'
    },
    {
      icon: 'fa-search',
      title: 'SEO Optimization',
      description: 'Boost your visibility with top-tier search engine strategies.'
    },
    {
      icon: 'fa-envelope',
      title: 'Email Marketing',
      description: 'Reach customers directly with personalized email campaigns.'
    },
    {
      icon: 'fa-film',
      title: 'Content Creation',
      description: 'Captivate your audience with compelling videos and graphics.'
    },
    {
      icon: 'fa-chart-bar',
      title: 'Analytics & Insights',
      description: 'Track performance and refine strategies with data-driven insights.'
    }
  ];

  getCardDelay(index: number): number {
    return index * 200; // تأخير  لكل كارت
  }
}
