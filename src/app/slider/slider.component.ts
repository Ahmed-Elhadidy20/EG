import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  slides = [
    {
      image: 'assets/image/slide-01.jpg',
      title: 'Get <em>ready</em> for your business<br>& upgrade <em>all aspects</em>',
      description: '"Future-Proof Your Business: The Complete Readiness & Upgrade Blueprint"  In today’s hyper-competitive markets, survival isn’t enough—domination demands a business that’s fully primed, agile, and firing on all cylinders. This isn’t about tweaking a few processes; It’s a radical overhaul to align every facet of your operations, teams, and strategy with the demands of tomorrow',
      button1Text: 'Discover More',
      button2Text: 'Contact Us'
    },
    {
      image: 'assets/image/slide-02.jpg',
      title: 'Tips<em>Market</em> Currency for you <br>Domination & Revenue Growth Expert - MDRGE',
      description: 'Market Domination & Revenue Growth Expert (MDRGE): Redefining Competitive Excellence If your ambition is to not just compete but own your market while fueling relentless revenue surges, a Market Domination & Revenue Growth Expert (MDRGE) is your strategic ace. This role merges battlefield-level market tactics with precision-engineered revenue systems to position your brand as the undisputed leader in your niche.',
      button1Text: 'Discover More',
      button2Text: 'Contact Us'
    },
    {
      image: 'assets/image/slide-03.jpg',
      title: 'Business Mastermind&<br>Growth Expert - BMGE',
      description: 'Business Mastermind & Growth Expert (BMGE): Your Blueprint for Breakthrough Success Looking to shift your business from surviving to thriving in a competitive landscape? A Business Mastermind & Growth Expert (BMGE) isn’t just another consultant—they’re the architect behind your company’s next-level transformation. Think of them as a hybrid strategist, mentor, and action-driver who crafts bespoke pathways to unlock untapped potential.',
      button1Text: 'Discover More',
      button2Text: 'Contact Us'
    }
  ];
}