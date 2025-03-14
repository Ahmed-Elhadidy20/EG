import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, HeaderComponent,FooterComponent,ScrollToTopComponent],
  template:`<app-scroll-to-top></app-scroll-to-top><app-header></app-header><router-outlet></router-outlet><app-footer>
`
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

 
}
