import { Component, OnInit, Inject, PLATFORM_ID, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('navbarNavDropdown') navbarNavDropdown!: ElementRef;

  isNavbarOpen = false;
  isDropdownOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // يمكنك إضافة أي منطق تهيئة هنا إذا لزم الأمر
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.onScroll.bind(this));
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.onScroll.bind(this));
    }
  }

  private onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      const navbar: HTMLElement | null = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    }
  }

  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeNavbar(): void {
    this.isNavbarOpen = false;
  }

  closeAll(): void {
    this.isNavbarOpen = false;
    this.isDropdownOpen = false;
  }
}