import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-graphic-design',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './graphic-design.component.html',
  styleUrl: './graphic-design.component.scss',
  
})
export class GraphicDesignComponent {
  services = [
    {
      icon: 'fa-paint-brush',
      title: 'Logo Design',
      description: 'Create a unique and memorable logo that defines your brand.'
    },
    {
      icon: 'fa-image',
      title: 'Branding Materials',
      description: 'Consistent visuals for business cards, brochures, and more.'
    },
    {
      icon: 'fa-desktop',
      title: 'UI/UX Design',
      description: 'Stunning interfaces that enhance user experience.'
    },
    {
      icon: 'fa-ad',
      title: 'Ad Creatives',
      description: 'Eye-catching designs for digital and print advertising.'
    },
    {
      icon: 'fa-tshirt',
      title: 'Merchandise Design',
      description: 'Custom graphics for apparel and promotional items.'
    }
  ];

  getCardDelay(index: number): number {
    return index * 200; // تأخير متتالي لكل كارت
  }
}