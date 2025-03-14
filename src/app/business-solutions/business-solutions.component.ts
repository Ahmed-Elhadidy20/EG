import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-business-solutions',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './business-solutions.component.html',
  styleUrl: './business-solutions.component.scss',
})
export class BusinessSolutionsComponent {
  solutions = [
    {
      icon: 'fa-briefcase',
      title: 'Process Optimization',
      description: 'Streamline workflows to increase efficiency and reduce costs.'
    },
    {
      icon: 'fa-chart-line',
      title: 'Growth Planning',
      description: 'Develop strategies to scale your business sustainably.'
    },
    {
      icon: 'fa-users',
      title: 'Team Productivity',
      description: 'Enhance team performance with tailored tools and training.'
    },
    {
      icon: 'fa-cogs',
      title: 'Technology Integration',
      description: 'Implement cutting-edge tech to stay competitive.'
    },
    {
      icon: 'fa-handshake',
      title: 'Client Engagement',
      description: 'Strengthen relationships through personalized customer experiences.'
    },
    {
      icon: 'fa-trophy',
      title: 'Market Domination',
      description: 'Position your brand as a leader in your industry.'
    },
    {
      icon: 'fa-building',
      title: 'Business Setup',
      description: 'Lay a solid foundation for your new venture with expert guidance.'
    },
    {
      icon: 'fa-lightbulb',
      title: 'Growth Expert - BMGE',
      description: 'Unlock innovative solutions with Business Model Growth Experts.'
    },
    {
      icon: 'fa-brain',
      title: 'Business Mastermind',
      description: 'Collaborate with top minds to solve complex business challenges.'
    },
    {
      icon: 'fa-money-bill-wave',
      title: 'Revenue Growth Expert - MDRGE',
      description: 'Maximize profits with Market-Driven Revenue Growth Experts.'
    }
  ];

  getCardDelay(index: number): number {
    return index * 200; // تأخير متتالي لكل كارت
  }
}