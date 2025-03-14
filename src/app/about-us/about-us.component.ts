import { CommonModule} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageHeadinComponent } from "../Shear/page-headin/page-headin.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterModule, CommonModule ,PageHeadinComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {
  heading = { title: 'About Us', description: 'Welcome to EG your trusted partner in business formation, licensing services, digital marketing ,social media management,  business establishment and  business solutions . We are committed to helping entrepreneurs and businesses reach their full potential.',background:'url(assets/image/heading-bg.jpg)'};
  accordionItems = [
    {
      title: 'EG Web-Developer',
      content: 'You will see a bunch of free CSS templates when you search on Google. TemplateMo website is probably the best one because it is 100% free.',
      isOpen: true,
       route: '/web-development'
    },
    {
      title: 'EG Digital Marketing',
      content: 'EG HTML5 Template is available to download 100% free of charge. This CSS layout is based on Bootstrap 5 framework.',
      isOpen: false,
       route: '/digital-marketing'
    },
    {
      title: 'EG Business Solutions',
      content: 'Ut dictum vehicula massa, ac pharetra leo tincidunt eu. Phasellus in tristique magna, ac gravida leo.',
      isOpen: false,
      route: '/business-solutions'
    }
  ];

  steps = [
    { number: '01', title: 'First Step', description: 'Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.' },
    { number: '02', title: 'Second Step', description: 'Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.' },
    { number: '03', title: 'Third Step', description: 'Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.' },
    { number: '04', title: 'Fourth Step', description: 'Pellentesque ipsum elit, congue a sapien laoreet, pellentesque ultricies risus.' }
  ];

  partners = [
    { image: '/assets/image/client-01.png' },
    { image: '/assets/image/client-01.png' },
    { image: '/assets/image/client-01.png' },
    { image: '/assets/image/client-01.png' },
    { image: '/assets/image/client-01.png' },
    { image: '/assets/image/client-01.png' }
  ];

  constructor() { }

  ngOnInit(): void { }

  toggleAccordion(index: number): void {
    this.accordionItems[index].isOpen = !this.accordionItems[index].isOpen;
  }
}