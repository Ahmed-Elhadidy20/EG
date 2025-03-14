import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeadinComponent } from './page-headin.component';

describe('PageHeadinComponent', () => {
  let component: PageHeadinComponent;
  let fixture: ComponentFixture<PageHeadinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHeadinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageHeadinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
