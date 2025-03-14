import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-media-production',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './media-production.component.html',
  styleUrl: './media-production.component.scss',
 
})
export class MediaProductionComponent {
  services = [
    {
      icon: 'fas fa-video',
      title: 'Video Production',
      description: 'High-quality video content from scripting to editing for all platforms.'
    },
    {
      icon: 'fas fa-microphone',
      title: 'Audio Production',
      description: 'Crystal-clear podcasts, voiceovers, and soundtracks tailored to your needs.'
    },
    {
      icon: 'fas fa-film',
      title: 'Motion Graphics',
      description: 'Dynamic animations to enhance your videos and presentations.'
    },
    {
      icon: 'fas fa-camera',
      title: 'Photography',
      description: 'Professional photoshoots for branding, events, and marketing.'
    },
    {
      icon: 'fas fa-tv',
      title: 'Live Streaming',
      description: 'Seamless live event coverage with top-tier production quality.'
    }
  ];

  getCardDelay(index: number): number {
    return index * 200; // تأخير متتالي لكل كارت
  }
}