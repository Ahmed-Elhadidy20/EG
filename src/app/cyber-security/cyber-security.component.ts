import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cyber-security',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cyber-security.component.html',
  styleUrl: './cyber-security.component.scss',
 
})
export class CyberSecurityComponent {
  services = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Threat Detection',
      description: 'Real-time monitoring to identify and neutralize threats before they strike.'
    },
    {
      icon: 'fas fa-lock',
      title: 'Data Encryption',
      description: 'Secure your sensitive data with advanced encryption techniques.'
    },
    {
      icon: 'fas fa-network-wired',
      title: 'Network Security',
      description: 'Robust protection for your network infrastructure against intrusions.'
    },
    {
      icon: 'fas fa-search',
      title: 'Security Audits',
      description: 'Comprehensive audits to ensure compliance and identify vulnerabilities.'
    },
    {
      icon: 'fas fa-undo-alt',
      title: 'Incident Recovery',
      description: 'Swift response and recovery plans to minimize damage from breaches.'
    }
  ];

  getCardDelay(index: number): number {
    return index * 200; // تأخير  كارد
  }
}