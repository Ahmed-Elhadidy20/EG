import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-headin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-headin.component.html',
  styleUrl: './page-headin.component.scss'
})
export class PageHeadinComponent {
@Input() title : string ='' ;
@Input() descrption : string ='' ;
@Input() background : string ='' ;
}
