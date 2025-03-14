import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevolopmentComponent } from './web-devolopment.component';

describe('WebDevolopmentComponent', () => {
  let component: WebDevolopmentComponent;
  let fixture: ComponentFixture<WebDevolopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebDevolopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebDevolopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
