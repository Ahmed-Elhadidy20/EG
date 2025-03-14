import { CommonModule } from '@angular/common';
import { Component,HostListener} from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.scss'
})
export class ScrollToTopComponent {

  showScrollButton = false; // الزر مخفي افتراضيًا

  // مراقبة التمرير
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // لو التمرير أكتر من 100 بكسل، الزر يظهر، غير كده يتخفى
    this.showScrollButton = window.scrollY > 100;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // رجوع ناعم لأول الصفحة
  }
}
