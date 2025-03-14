import { Component } from '@angular/core';
import { PageHeadinComponent } from "../Shear/page-headin/page-headin.component";

@Component({
  selector: 'app-contac-us',
  standalone: true,
  imports: [PageHeadinComponent],
  templateUrl: './contac-us.component.html',
  styleUrl: './contac-us.component.scss'
})
export class ContacUsComponent {
heading = {title:'Contact Us',background:'url(assets/image/heading-bg.jpg)'}
}
